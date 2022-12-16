import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
  TextField,
  Select,
  Avatar,
} from "@mui/material";
import UserContext from "../../../contexts/UserContext";
import convertImage from "../../../helpers/convertImage";

const textFieldStyle = {
  width: "100%",
  marginBottom: "20px",
};

const genderList = [
  {
    value: "male",
    label: "Nam",
  },
  {
    value: "female",
    label: "Nữ",
  },
  {
    value: "other",
    label: "Khác",
  },
];

const ProfileBox = () => {
  const [editMode, setEditMode] = useState(false);

  console.log(editMode);

  const auth = useContext(UserContext);
  const user = auth.user;

  const [userAvatar, setUserAvatar] = useState({
    avatar: user.avatar ?? "",
    file: null,
    filename: "",
  });
  const [userGender, setUserGender] = useState(user.gender);
  const nameRef = useRef();
  const dobRef = useRef();
  const addressStreetRef = useRef();
  const addressTownRef = useRef();
  const addressProvinceRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleChange = (event) => {
    setUserGender(event.target.value);
  };

  const handleEditMode = async () => {
    if (editMode) {
      const userFormData = new FormData();
      // const avatarBuffer = new TextEncoder().encode(userAvatar.avatar); // Convert Buffer
      userFormData.append("avatar", userAvatar.file, userAvatar.filename);
      userFormData.append("name", nameRef.current.value);
      userFormData.append("gender", userGender);
      userFormData.append("dob", dobRef.current.value);
      userFormData.append("address[street]", addressStreetRef.current.value);
      userFormData.append("address[town]", addressTownRef.current.value);
      userFormData.append(
        "address[province]",
        addressProvinceRef.current.value
      );
      userFormData.append("email", emailRef.current.value);
      userFormData.append("phone", phoneRef.current.value);
      await auth.updateInformation(userFormData, user._id);
      setEditMode((prev) => !prev);
    } else {
      setEditMode((prev) => !prev);
    }
  };

  return (
    <Box sx={{ marginTop: "20px", boxShadow: "0 0 5px #777", padding: "10px" }}>
      <Typography sx={{ fontWeight: "bold" }}>Thông tin cá nhân</Typography>
      <hr style={{ opacity: "0.4" }} />
      <Grid container>
        <Grid item xs={4}>
          {userAvatar ? (
            <Avatar
              sx={{ width: "18vw", height: "18vw" }}
              src={
                convertImage(userAvatar?.avatar.data?.data) || userAvatar.avatar
              }
            />
          ) : (
            <Avatar sx={{ width: "18vw", height: "18vw" }} />
          )}
          <Button
            variant="outlined"
            component="label"
            sx={{
              width: "18vw",
              marginTop: "20px",
              fontWeight: "bold",
              backgroundColor: "white",
              color: "orangered",
              borderColor: "orangered",
              "&:hover": {
                backgroundColor: "orangered",
                borderColor: "orangered",
                color: "white",
              },
            }}
            disabled={!editMode}
          >
            Chọn hình ảnh
            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  let reader = new FileReader();
                  reader.onload = (event) => {
                    setUserAvatar({
                      avatar: event.target.result,
                      file: e.target.files[0],
                      filename: e.target.files[0].name,
                    });
                  };
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={8}>
          <form
            style={{
              padding: "10px 30px",
              boxShadow: "0 0 2px #333",
            }}
          >
            <TextField
              required
              id="name"
              label="Họ và tên"
              defaultValue={user.name}
              type="text"
              inputRef={nameRef}
              variant="standard"
              disabled={!editMode}
              sx={textFieldStyle}
            />
            <TextField
              required
              id="dob"
              label="Ngày sinh"
              type="date"
              inputRef={dobRef}
              variant="standard"
              disabled={!editMode}
              defaultValue={new Date(user.dob).toISOString().slice(0, 10)}
              sx={textFieldStyle}
            />
            <InputLabel sx={{ fontSize: "0.8rem" }}>Giới tính *</InputLabel>
            <Select
              id="gender"
              label="Giới tính"
              defaultValue={userGender}
              variant="standard"
              disabled={!editMode}
              sx={textFieldStyle}
              onChange={(e) => handleChange(e)}
            >
              {genderList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>

            <Box>
              <InputLabel sx={{ fontSize: "0.8rem" }}>Địa chỉ *</InputLabel>
              <TextField
                required
                id="street"
                label="Số nhà, đường, phường/xã/ấp"
                name="street"
                defaultValue={user.address.street ?? ""}
                type="text"
                inputRef={addressStreetRef}
                variant="standard"
                disabled={!editMode}
                sx={textFieldStyle}
              />
              <TextField
                required
                id="town"
                label="Thị trấn, huyện, thị xã, thành phố"
                name="town"
                defaultValue={user.address.town ?? ""}
                type="text"
                inputRef={addressTownRef}
                variant="standard"
                disabled={!editMode}
                sx={textFieldStyle}
              />
              <TextField
                required
                id="province"
                label="Tỉnh, thành phố trực thuộc quốc gia"
                name="province"
                defaultValue={user.address.province ?? ""}
                type="text"
                inputRef={addressProvinceRef}
                variant="standard"
                disabled={!editMode}
                sx={textFieldStyle}
              />
            </Box>

            <TextField
              id="email"
              label="Email"
              defaultValue={user.email ?? ""}
              type="email"
              inputRef={emailRef}
              variant="standard"
              disabled={!editMode}
              sx={textFieldStyle}
            />
            <TextField
              required
              id="phone"
              label="Số điện thoại"
              defaultValue={user.phone.replace("+84", "0") ?? ""}
              type="number"
              variant="standard"
              aria-readonly
              inputRef={phoneRef}
              disabled={!editMode}
              sx={textFieldStyle}
            />
            <Box sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                sx={{
                  width: "45%",
                  marginRight: "10%",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  color: "orangered",
                  borderColor: "orangered",
                  "&:hover": {
                    backgroundColor: "orangered",
                    borderColor: "orangered",
                    color: "white",
                  },
                }}
                onClick={handleEditMode}
              >
                {editMode ? "Lưu thông tin" : "Chỉnh sửa"}
              </Button>
              <Button
                variant="outlined"
                disabled={!editMode}
                sx={{
                  width: "45%",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  color: "orangered",
                  borderColor: "orangered",
                  "&:hover": {
                    backgroundColor: "orangered",
                    borderColor: "orangered",
                    color: "white",
                  },
                }}
                onClick={() => {
                  setUserAvatar((prev) => {
                    return { avatar: user.avatar ?? "", file: null, filename: "" };
                  });
                  setEditMode((prev) => !prev);
                }}
              >
                Hủy
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileBox;
