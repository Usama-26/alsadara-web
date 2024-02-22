import React from "react";

const FileIcon = ({ fileType }) => {
  switch (fileType) {
    case ".pdf":
      return <img src="path/to/pdf-icon.png" alt="PDF" />;
    case ".xml":
      return <img src="path/to/xml-icon.png" alt="XML" />;
    // Add more cases for other file types
    default:
      return <img src="path/to/default-icon.png" alt="File" />;
  }
};

export default FileIcon;
