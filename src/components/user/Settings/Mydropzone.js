import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "semantic-ui-react";

const MyDropzone = ({ setFiles }) => {
  const onDrop = useCallback(acceptedFiles => {
    
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
          <h3><p>
            Drop the photo here 
          </p></h3>
          <Icon className="picture" size="huge"></Icon>
        </div>
      ) : (
        <div className="dropZone textup">
          <h3><p>
            Drag and drop the photo here, or click to select it 
          </p></h3>
          <Icon className="upload" size="huge"></Icon>
        </div>
      )}
    </div>
  );
};
export default MyDropzone;
