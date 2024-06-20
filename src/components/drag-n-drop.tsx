"use client";

import {
  ReactNode,
  RefObject,
  useCallback,
} from "react";

import { Accept, useDropzone } from "react-dropzone";
import { toast } from "sonner";

interface DragAndDropProps {
  multiple?: boolean;
  accept?: Accept;
  onChange: Function;
  maxSize?: number;
  name: string;
  children?: ReactNode;
  formRef: RefObject<HTMLFormElement>;
}

interface ExtendedImageFile extends File {
  blob: string;
}
export default function DragAndDrop({
  children,
  multiple,
  accept,
  name,
  onChange,
  formRef
}: DragAndDropProps) {
  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      if (acceptedFiles.length === 0) {
        toast.error("Image(s) not uploaded properly");
      }

      // const dataTransfer = new DataTransfer();
      // dataTransfer.items.add(acceptedFiles[0]);
      // if (formRef.current) {
      //   const input: HTMLInputElement | null =
      //     formRef.current.querySelector("input[type=file]");
      //   if (input) {
      //     input.files = dataTransfer.files;
      //   }
      // }

      // const reader = new FileReader();

      // reader.onload = (event) => {
      //   if (
      //     event.target &&
      //     event.target.result &&
      //     typeof event.target.result === "string"
      //   ) {
      //     const fileUrl = event.target.result;
      //     if (onChange) {
      //       onChange(fileUrl); // Pass the file URL to the onChange function
      //     }
      //   }
      // };

      // reader.readAsDataURL(acceptedFiles[0]);
      const files = acceptedFiles.map((file) => {
        if (file) {
          file.blob = URL.createObjectURL(file as Blob)
        }
        return file
      })

      // onChange(files)
      onChange(acceptedFiles)
    },
    [onChange]
  );

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple,
    accept,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} name={name} />
      {children || <p>Drag and drop files or select to browse</p>}
    </div>
  );
}
