import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const formData: FormData = await req.formData();
  const format = formData.get('format') as string;
  const imagesBlob = formData.get('imagesBlob') as Blob;
  const metadata = JSON.parse(formData.get('metadata') as string);

  const imagesBuffer = convertBlobToImageBuffers(imagesBlob, metadata);

  const images = imagesBuffer.map(async (buffer) => {

    const formattedImage = await sharp(buffer).keepMetadata().toFormat(format).toBuffer();
    const base64Img = uint8ArrayToBase64Image(formattedImage, `image/${format}`)
  })
  return Response.json({ hello: "world" })
}

function convertBlobToImageBuffers(blob: Blob, metadata: any) {
  let offset = 0;
  const chunks = [];
  console.log(metadata)
  metadata.forEach(size => {
    const chunk = blob.slice(offset, offset + size);
    chunks.push(chunk);
    offset += size;
  });

  return chunks;
}