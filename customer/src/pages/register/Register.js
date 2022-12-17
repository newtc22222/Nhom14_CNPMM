import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import UserContext from "../../contexts/UserContext";

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

const Register = () => {
  const auth = useContext(UserContext);
  const navigate = useNavigate();

  const [isFail, setIsFail] = useState(false);

  const [gender, setGender] = useState(genderList[0].value);
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  
  const nameRef = useRef();
  const dobRef = useRef();
  const addressStreetRef = useRef();
  const addressTownRef = useRef();
  const addressProvinceRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const handleRegister = async () => {
    const newUser = {
      name: nameRef.current.value,
      dob: dobRef.current.value,
      gender: gender,
      address: {
        street: addressStreetRef.current.value,
        town: addressTownRef.current.value,
        province: addressProvinceRef.current.value
      },
      email: emailRef.current.value,
      phone: '+84' + phoneRef.current.value.slice(1),
      password: passwordRef.current.value
    }

    if (newUser.name.trim() === "" || newUser.name === null || //name
        (new Date(newUser.dob).getYear() > (new Date().getFullYear() - 16)) || //dob
        newUser.address.street.trim() === "" || newUser.address.street === null || // street
        newUser.address.town.trim() === "" || newUser.address.town === null || //town
        newUser.address.province.trim() === "" || newUser.address.province === null || //province
        newUser.phone.trim() === "" || newUser.phone === null || // phone
        newUser.password.length < 8) { // password
      setIsFail(true);
    }
    else {
      setIsFail(false);
    }

    if(!isFail) {
      await auth.register(newUser);
      navigate("/login");
    }
  }

  return (
    <Box>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Typography sx={{ fontSize: "0.7rem" }}>
          <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
            Trang chủ
          </Link>
        </Typography>
        <Typography sx={{ fontSize: "0.7rem" }}>Đăng ký tài khoản</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          backgroundImage:
            'url("https://www.questica.com/wp-content/themes/questica/inc/img/home/Orange-Shape.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "340px",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 0 5px #333",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "orangered",
              marginBottom: "20px",
            }}
          >
            Vui lòng đầy đủ thông tin yêu cầu dưới đây!
          </Typography>
          {isFail && 
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "red",
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: "20px",
            }}
          >
            Thông tin đăng ký chưa hợp lệ!
          </Typography>}  
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <form method="post" action="/register">
              <TextField
                required
                id="name"
                label="Họ và tên"
                placeholder="Nguyễn Văn A"
                type="text"
                inputRef={nameRef}
                variant="standard"
                sx={textFieldStyle}
              />
              <TextField
                required
                id="dob"
                label="Ngày sinh"
                type="date"
                inputRef={dobRef}
                variant="standard"
                defaultValue={"2000-01-01"}
                sx={textFieldStyle}
              />
              <InputLabel sx={{ fontSize: "0.8rem" }}>Giới tính *</InputLabel>
              <Select
                id="gender"
                label="Giới tính"
                value={gender}
                variant="standard"
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
                  placeholder="đường số 17, phường Linh Trung"
                  type="text"
                  inputRef={addressStreetRef}
                  variant="standard"
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  id="town"
                  label="Thị trấn, huyện, thị xã, thành phố"
                  name="town"
                  placeholder="Thành phố Thủ Đức"
                  type="text"
                  inputRef={addressTownRef}
                  variant="standard"
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  id="province"
                  label="Tỉnh, thành phố trực thuộc quốc gia"
                  name="province"
                  placeholder="Thành phố Hồ Chí Minh"
                  type="text"
                  inputRef={addressProvinceRef}
                  variant="standard"
                  sx={textFieldStyle}
                />
              </Box>
              <TextField
                id="email"
                label="Email"
                placeholder="something@abc.com"
                type="email"
                inputRef={emailRef}
                variant="standard"
                sx={textFieldStyle}
              />

              <TextField
                required
                id="phone"
                label="Số điện thoại"
                placeholder="0839918872"
                type="number"
                inputRef={phoneRef}
                variant="standard"
                sx={textFieldStyle}
              />
              <TextField
                required
                title="Mật khẩu cần có ít nhất 8 ký tự, bao gồm chữ cái thường, chữ cái in hoa, chữ số và ký tự đặc biệt"
                id="password"
                label="Mật khẩu"
                type="password"
                inputRef={passwordRef}
                variant="standard"
                sx={textFieldStyle}
              />

              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  color: "orangered",
                  borderColor: "orangered",
                  "&:hover": {
                    backgroundColor: "orangered",
                    color: "white",
                  },
                }}
                onClick={handleRegister}
              >
                Đăng ký
              </Button>
            </form>
          </Box>
          <Typography
            sx={{ fontSize: "0.75rem", textAlign: "center", color: "#333" }}
          >
            Bằng việc đăng ký, bạn đã đồng ý với
            <Link to="/policy" style={{ textDecoration: "none" }}>
              {" "}
              Điều khoản sử dụng
            </Link>{" "}
            của Good Fair.
          </Typography>
          <Typography
            sx={{ fontSize: "0.8rem", textAlign: "center", marginTop: "15px" }}
          >
            Đã có tài khoản?{" "}
            <Link to="/login" style={{ color: "blue", textDecoration: "none" }}>
              Đăng nhập ở đây
            </Link>
            !
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
