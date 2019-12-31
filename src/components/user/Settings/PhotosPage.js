import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import {
  Segment,
  Header,
  Divider,
  Grid,
  Button
} from "semantic-ui-react";
import CropperPhoto from "./Cropper";
import MyDropzone from "./Mydropzone";
import { uploadProfileImage, deletePhoto, setMainPhoto } from "../UserActions";
import { toastr } from "react-redux-toastr";
import UserPhotos from "./UserPhotos";

const query = ({ auth }) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "photos" }],
      storeAs: "photos"
    }
  ];
};

const actions = {
  uploadProfileImage,
  deletePhoto,
  setMainPhoto
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos,
  loading: state.async.loading
});

const PhotosPage = ({
  uploadProfileImage,
  photos,
  profile,
  deletePhoto,
  setMainPhoto,
  loading
}) => {
  const [files, setFiles] = useState([]);
  const [cropResult, setCropResult] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
      URL.revokeObjectURL(cropResult);
    };
  }, [files, cropResult]);

  const handleUploadImage = async () => {
    try {
      await uploadProfileImage(image, files[0].name);
      handleCancelCrop();
      toastr.success("done", "Photo uploaded");
    } catch (error) {
      toastr.error("Fail", "Something went wrong");
    }
  };

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
    setCropResult("");
  };

  const handleSetMainPhoto = async photo => {
    try {
      await setMainPhoto(photo);
    } catch (error) {
      toastr.error("Fail", error.message);
    }
  };

  const handleDeletePhoto = async photo => {
    try {
      await deletePhoto(photo);
    } catch (error) {
      toastr.error("Fail", error.message);
    }
  };

  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid.Row>
        <Grid.Row width={4}>
          <Header color="purple" sub content="Step 1 - Add Photo" />
          <MyDropzone setFiles={setFiles} />
        </Grid.Row>
        <Divider />
        <Grid.Row width={1} />
        <Grid.Row width={4}>
          <Header sub color="purple" content="Step 2 - Resize image and Save" />
          {files.length > 0 && (
            <CropperPhoto
              imagePreview={files[0].preview}
              setCropResult={setCropResult}
              setImage={setImage}
            />
          )}
          {files.length > 0 && (
            <Fragment>
              <Button.Group>
                <Button
                  onClick={handleUploadImage}
                  loading={loading}
                  style={{ width: "100px" }}
                  positive
                  icon="check"
                />
                <div class="or"></div>
                <Button
                  disabled={loading}
                  onClick={handleCancelCrop}
                  style={{ width: "100px" }}
                  icon="close"
                />
              </Button.Group>
            </Fragment>
          )}
        </Grid.Row>
      </Grid.Row>

      <Divider />
      <UserPhotos
        photos={photos}
        profile={profile}
        deletePhoto={handleDeletePhoto}
        setMainPhoto={handleSetMainPhoto}
      />
    </Segment>
  );
};

export default compose(
  connect(mapState, actions),
  firestoreConnect(auth => query(auth))
)(PhotosPage);
