import { useEffect, useState } from "react";
import ReactImageUploading from "react-images-uploading";

import { Camera, Edit } from "@mui/icons-material";
import { Box, Button, Card, CardMedia, IconButton, Stack } from "@mui/material";
import { red } from "@mui/material/colors";

const ProfileImageUpload = () => {
  const [image, setimage] = useState("");

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setimage(imageList);
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ textAlign: "center",height:"100%",width:"100%" }}
    >
      <ReactImageUploading
        multiple
        value={image}
        onChange={onChange}
        dataURLKey="data_url"
        maxNumber={67}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%", height: "100%" }}
          >
            {!image.length && (
              <Button
                type="button"
                variant="outlined"
                startIcon={<Camera />}
                sx={{
                  backGroundColor: isDragging ? red[800] : "",
                  m:3,
                  height:"100%"
                }}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop Image
              </Button>
            )}
              {image && image.length ? 
            <Card sx={{ position: "relative", width: "100%",height:"100%", ":hover .MuiBox-root":{
                    display:'initial'
                  }}}>
              <CardMedia
                image={image[0]["data_url"]}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                 
                }}
              />
              <Box sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"none"}}>
                <IconButton color="primary" sx={{backgroundColor:"#fff"}} onClick={() => onImageUpdate(0)}>
                  <Edit />
                </IconButton>
              </Box>
            </Card>: ''}
          </Stack>
        )}
      </ReactImageUploading>
    </Stack>
  );
};

export default ProfileImageUpload;
