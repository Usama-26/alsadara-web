import Image from "next/image";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

export default function FileDropzone({ files, setFiles, multiple = true }) {
  const [localFiles, setLocalFiles] = useState([]);

  const handleOnDrop = async (acceptedFiles) => {
    const accepted = [
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ];
    setLocalFiles(accepted);
    setFiles([...files, ...accepted]);
  };

  return (
    <Dropzone onDrop={handleOnDrop} maxFiles={3} multiple={multiple}>
      {({ getRootProps, getInputProps }) => (
        <>
          <div
            {...getRootProps()}
            className="border border-gray-400 group border-dashed rounded-lg cursor-pointer py-5 hover:bg-primary-50 text-sm text-center"
          >
            <input {...getInputProps()} />
            <span className="p-4 rounded-md inline-block">
              <Image
                src={"/icons/cloud-add.svg"}
                height={200}
                width={200}
                className="w-10 h-10"
                alt="word-icon"
              />
            </span>
            <div className="space-y-4">
              <h4 className="text-base font-bold">
                Choose a file or drag & drop it here
              </h4>
              <p>PDF, Docs, and Xl formats</p>
              <p>Max Files : 3</p>
              <p>Max Files Size : 10 MB</p>
              <button
                type="button"
                className="px-8 py-2 rounded-md font-medium border border-gray-400"
              >
                Browse Files
              </button>
            </div>
          </div>
        </>
      )}
    </Dropzone>
  );
}
