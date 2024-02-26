import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const FileIcon = ({ fileType }) => {
  switch (fileType) {
    case "application/pdf":
      return (
        <Image
          src={"/icons/pdf-icon.svg"}
          height={200}
          width={200}
          className="w-10 h-10"
          alt="word-icon"
        />
      );
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return (
        <Image
          src={"/icons/excel-icon.svg"}
          height={200}
          width={200}
          className="w-10 h-10"
          alt="word-icon"
        />
      );
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return (
        <Image
          src={"/icons/word-icon.svg"}
          height={200}
          width={200}
          className="w-10 h-10"
          alt="word-icon"
        />
      );
    default:
      return <DocumentCheckIcon className="w-10 h-10" />;
  }
};

export default FileIcon;
