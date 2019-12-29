import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "semantic-ui-react";

const MyDropzone = ({ setFiles }) => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*"
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="dropZone1">
          <p>
            <h3>Drop the photo here </h3>
          </p>
          <Icon className="picture" size="huge"></Icon>
        </div>
      ) : (
        <div className="dropZone textup">
          <p>
            <h3>Drag and drop the photo here, or click to select it </h3>{" "}
          </p>
          <Icon className="upload" size="huge"></Icon>
        </div>
      )}
    </div>
  );
};
export default MyDropzone;
