import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { BiFile } from "react-icons/bi";
export default function FileDropzone({}) {
  const [files, setFiles] = useState([]);

  const handleOnDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const thumbs = files?.map((file) => (
    <div
      key={file.name}
      className="group-hover:text-neutral-700 bg-neutral-200 m-2 rounded-md inline-flex items-center p-1  text-xs"
    >
      <BiFile className="w-5 h-5" />
      <p className=" p-2">{file.name}</p>
    </div>
  ));

  return (
    <Dropzone accept={"image/*"} onDrop={handleOnDrop}>
      {({ getRootProps, getInputProps }) => (
        <div>
          <div
            {...getRootProps()}
            className="border border-gray-400 group border-dashed rounded-md cursor-pointer py-5 hover:bg-primary-50 text-sm text-center"
          >
            <input {...getInputProps()} />
            <span className="p-4 rounded-md inline-block bg-gray-100">
              <ArrowUpTrayIcon className="w-6 h-6" />
            </span>
            <h4 className="text-base font-bold">
              Drag & drop OR{" "}
              <button className="text-primary">browse files</button>
            </h4>
            <p>Max. file size 10MB</p>
            <p>
              Supported Files <b>jpeg, PNG</b>
            </p>
          </div>
        </div>
      )}
    </Dropzone>
  );
}
