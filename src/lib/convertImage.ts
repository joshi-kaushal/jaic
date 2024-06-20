"use server"
import JSZip from 'jszip';
import sharp from 'sharp';

const fs = require('fs');
const path = require('path');

type ConvertToFormat = "png" | "webp" | "jpeg" | "avif" | "heif" | "tiff"

// Ensure "output" directory exists
const outputDirectory = path.join(__dirname, 'output');
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}


async function uint8ArrayToBase64Image(uint8Array: Uint8Array, mimeType: string): string {
  // Step 1: Convert Uint8Array to binary string
  let binaryString = '';
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }

  // Step 2: Convert binary string to base64
  const base64String = btoa(binaryString);

  // Step 3: Format as data URL
  return `data:${mimeType};base64,${base64String}`;
}

async function imagesToZip(images: string[], format: ConvertToFormat) {
  const zip = new JSZip();

  try {
    const zip = new JSZip();

    // Add each Base64 image to the zip file
    images.forEach((base64, index) => {
      zip.file(`image_${index + 1}.${format}`, base64.split(';base64,').pop(), { base64: true });
    });

    // Generate the zip file asynchronously
    const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

    // Define the path for the zip file
    const zipFilePath = path.join(outputDirectory, 'images. zip');

    // Write the zip file to the "output" directory
    fs.writeFile(zipFilePath, zipContent, (err: any) => {
      if (err) {
        console.error('Error writing zip file:', err);
        // res.status(500).send('Internal Server Error');
        return;
      }

      console.log(`Zip file created successfully at ${zipFilePath}`);
      // res.send(`Zip file created successfully at ${zipFilePath}`);
    });
  } catch (error) {
    console.error('Error generating zip file:', error);
    // res.status(500).send('Internal Server Error');
  }
}

export async function convertImage(prevData: any, formData: FormData): Promise<any> {
  const format = formData.get('format') as ConvertToFormat;
  const images = formData.getAll('images') as File[];

  try {
    const formattedImages = await Promise.all(images.map(async (image) => {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      if (buffer.length === 0) {
        throw new Error("Buffer is empty after conversion from arrayBuffer.");
      }
      console.log(format)
      const formattedImage = await sharp(buffer).keepMetadata().toFormat(format).toBuffer();
      const base64Img = uint8ArrayToBase64Image(formattedImage, `image/${format}`)
      return base64Img;
    }));

    imagesToZip(formattedImages, format)

    // return formattedImages;
    return {
      success: true,
      errors: undefined,
      fieldValues: {
        format: format,
        images: formattedImages
      }
    };
  } catch (error: unknown) {

    return {
      success: false,
      errors: (error as Error).message,
      fieldValues: undefined
    };
  }
}

// export async function convertImage(image: string | Buffer, format: ConvertToFormat = "webp"): Promise<Buffer | undefined> {
//   try {
//     console.log(image);

//     // Determine if the input is a Buffer or a string (file path or URL)
//     const inputBuffer = typeof image === 'string' ? await sharp(image).toBuffer() : image;
//     // Convert the image to the specified format
//     // const formattedImage = await sharp(Buffer.from(inputBuffer)).toFormat(format).toBuffer();
//     const formattedImage = await sharp(Buffer.from(inputBuffer)).toFormat(format).toFile(`filename.${format}`);
//     console.log({ formattedImage });

//     // return formattedImage;
//   } catch (err: unknown) {
//     console.error('Error during image conversion:', err.message);
//   }
// }