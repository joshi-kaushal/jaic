"use client"
import React, { ChangeEvent, FormEvent, FormEventHandler, useRef, useState } from "react";
import DragAndDrop from "./drag-n-drop";
import Image from "next/image";
import { LuTrash2, LuX } from "react-icons/lu";
import { formatFileSize } from "@/lib/utils";

import { convertImage } from "@/lib/convertImage";
import sharp from "sharp";
import { useFormState } from "react-dom";
import { toast } from "sonner";

interface ExtendedImageFile extends File {
  blob: string;
}

type ConvertToFormat = "png" | "webp" | "jpeg" | "avif" | "heif" | "tiff"

interface IFormState {
  success: boolean | undefined;
  errors: string | undefined;
  fieldValues: {
    format: ConvertToFormat,
    images: FileList | string[] | null
  }
}

export default function ImageUpload() {
  // const [images, setImages] = useState<FileList | null>(null)
  const [images, setImages] = useState<ArrayBuffer[]>([])
  const [format, setFormat] = useState<ConvertToFormat>("webp")
  // const [formState, formAction] = useFormState(convertImage, {
  //   success: undefined,
  //   errors: undefined,
  //   fieldValues: {
  //     format: "webp",
  //     images: images
  //   }
  // })

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const imagesBlob = new Blob(images, { type: 'application/octet-stream' });
    const metadata = images.map((arrayBuffer) => arrayBuffer.byteLength);

    const formData = new FormData();
    formData.append('format', format);
    formData.append("imagesBlob", imagesBlob)
    formData.append("metadata", JSON.stringify(metadata))
    // images.forEach((arrayBuffer, index) => {
    //   const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
    //   formData.append(`image${index}`, blob);
    // });

    fetch('api/convert', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    if (!input.files) {
      toast.error("No files were uploaded.")
      return;
    }

    const files = Array.from(input.files)

    const promises = files.map(file => {
      return new Promise<ArrayBuffer>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          if (e.target && e.target.result) {
            resolve(e.target.result as ArrayBuffer);
          } else {
            reject(new Error('Error reading file'));
          }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    });

    Promise.all(promises)
      .then(arrayBuffers => {
        setImages(arrayBuffers);
        console.log('ArrayBuffers:', arrayBuffers); // Optional: for debugging
      })
      .catch(error => {
        console.error('Error processing files', error);
      });
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* <DragAndDrop
          multiple={true}
          accept={{
            "image/png": [".png", ".jpg", ".jpeg", ".webp", ".avif"],
          }}
          onChange={setImages}
          maxSize={20_00_000}
          name="images"
          formRef={formRef}
        >

          <section className="w-full h-96 border border-slate-900 rounded-lg mt flex items-center flex-col justify-center gap-2 hover:cursor-pointer hover:bg-slate-900/5 transition">
            <p>Drag and drop images</p>
            <p>Or Click to choose </p>
            <p>Doesn&apos;t really matter</p>
          </section>

        </DragAndDrop> */}
        <input
          type="file"
          name="images"
          id="images"
          multiple
          accept="image/*"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImages(e.target.files)}
          onChange={handleImageUpload}
          className="w-full h-96 border border-slate-900 rounded-lg mt flex items-center flex-col justify-center gap-2 hover:cursor-pointer hover:bg-slate-900/5 transition"
        />
        {
          !!images?.length && (
            <>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4 md:items-center">
                <Select defaultValue={"webp"} name="format" >
                  {/*  onValueChange={(value) => setConvertToFormat(value as ConvertToFormat)} */}
                  <SelectTrigger className="w-[180px] h-12">
                    <SelectValue placeholder="Choose Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="webp">WebP</SelectItem>
                    <SelectItem value="jpeg">JPEG</SelectItem>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="avif">AVIF</SelectItem>
                    <SelectItem value="heif">HEIF</SelectItem>
                    <SelectItem value="tiff">TIFF</SelectItem>

                  </SelectContent>
                </Select>

                <Button type="submit">Convert Images</Button>
              </div>
              {
                /*
                            <section className="flex flex-col p-8">
                              <ul className="group divide-y">
                                {
                                  Array.from(images).map((image) => {
                                    const imageSize = formatFileSize(image.size)
                                    return (
                                      <li key={image.name} className="flex items-center py-6 justify-between">
                                        <div className="flex flex-col gap-2">
                                          <p className="text-xl font-semibold">{image.name}</p>
                                          <div className="flex md:flex-row flex-col items-center gap-2 md:gap-4">
                                            <p className="p-2 border rounded-lg text-base">{image.type.split("/")[1].toUpperCase()}</p>
                                            <p>{imageSize}</p>
                                          </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                          <Image
                                            priority={false}
                                            src={URL.createObjectURL(image as Blob)}
                                            // src={image}
                                            alt={image.name}
                                            width={100}
                                            height={100}
                                            className="object-cover aspect-video border border-gray-300 border-dashed rounded"
                                          />
                                          <div
                                            className=" p-1 rounded-full cursor-pointer -right-3 -top-3group-hover:flex"
                                            onClick={() => setImages(Array.from(images).forEach(img => img.name !== image.name))}
                                          >
                                            <LuTrash2 className="size-6 hover:text-red-400 text-red-500" />
                                          </div>
                                        </div>
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                            </section>
                            */
              }
            </>
          )
        }

      </form>


      {/* {
        formState?.fieldValues?.images && (
          formState.fieldValues.images.map((image: string, index: number) => {
            return <>
              <p>hello</p>
              <Image src={image} alt="asd" key={index + 1} />
            </>
          })
        )
      } */}
    </>
  )
}