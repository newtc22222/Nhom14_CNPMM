import React, { useState } from 'react';
import { Box, Button, InputLabel, MenuItem, Typography, TextField, Select } from '@mui/material';

const textFieldStyle = {
    width: '100%',
    marginBottom: '20px'
}

const genderList = [
    {
        value: 'male',
        label: 'Nam'
    },
    {
        value: 'female',
        label: 'Nữ'
    },
    {
        value: 'other',
        label: 'Khác'
    }
];

const ProfileBox = () => {
    const [editMode, setEditMode] = useState(false);

    const user = {};
    const {name, dob, gender, address, email, phone} = user;
    // const {street, town, province} = address;

    const handleEditMode = () => {
        if (editMode) {
            console.log(`save`);
        }
        setEditMode(!editMode);
    }

    const [userGender, setUserGender] = useState(gender || genderList[0].value);

    const handleChange = (event) => {
        setUserGender(event.target.value);
    };

    return (
        <Box sx={{ marginTop: '20px', boxShadow: '0 0 5px #777', padding: '10px' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Thông tin cá nhân</Typography>
            <hr style={{ opacity: '0.4' }} />
            <form
                method="post"
                action="/register"
                style={{
                    padding: '10px 30px',
                    boxShadow: '0 0 2px #333',
                    marginRight: '40%'
                }}>
                <TextField
                    required
                    id="name"
                    label="Họ và tên"
                    value="Nguyễn Văn A"
                    type="text"
                    variant="standard"
                    disabled={!editMode}
                    sx={textFieldStyle}
                />
                <TextField
                    required
                    id="dob"
                    label="Ngày sinh"
                    type="date"
                    variant="standard"
                    disabled={!editMode}
                    value={"2000-01-01"}
                    sx={textFieldStyle}
                />
                <InputLabel sx={{ fontSize: '0.8rem' }}>Giới tính *</InputLabel>
                <Select
                    id="gender"
                    label="Giới tính"
                    value={userGender}
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
                    <InputLabel sx={{ fontSize: '0.8rem' }}>Địa chỉ *</InputLabel>
                    <TextField
                        required
                        id="street"
                        label="Số nhà, đường, phường/xã/ấp"
                        name="street"
                        // value={street ?? ""}
                        type="text"
                        variant="standard"
                        disabled={!editMode}
                        sx={textFieldStyle}
                    />
                    <TextField
                        required
                        id="town"
                        label="Thị trấn, huyện, thị xã, thành phố"
                        name="town"
                        // value={town ?? ""}
                        type="text"
                        variant="standard"
                        disabled={!editMode}
                        sx={textFieldStyle}
                    />
                    <TextField
                        required
                        id="province"
                        label="Tỉnh, thành phố trực thuộc quốc gia"
                        name="province"
                        // value={province ?? ""}
                        type="text"
                        variant="standard"
                        disabled={!editMode}
                        sx={textFieldStyle}
                    />
                </Box>

                <TextField
                    id="email"
                    label="Email"
                    value="something@abc.com"
                    type="email"
                    variant="standard"
                    disabled={!editMode}
                    sx={textFieldStyle}
                />
                <TextField
                    required
                    id="phone"
                    label="Số điện thoại"
                    value="0839918872"
                    type="number"
                    variant="standard"
                    disabled={!editMode}
                    sx={textFieldStyle}
                />
                {/* <TextField
                    required
                    title="Mật khẩu cần có ít nhất 8 ký tự, bao gồm chữ cái thường, chữ cái in hoa, chữ số và ký tự đặc biệt"
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    variant="standard"
                    sx={textFieldStyle}
                /> */}
                <Box sx={{ display: 'flex' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            width: '45%',
                            marginRight: '10%',
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                            color: 'orangered',
                            borderColor: 'orangered',
                            '&:hover': {
                                backgroundColor: 'orangered',
                                borderColor: 'orangered',
                                color: 'white'
                            }
                        }}
                        onClick={handleEditMode}>
                        {editMode ? "Lưu thông tin" : "Chỉnh sửa"}
                    </Button>
                    <Button
                        variant="outlined"
                        disabled={!editMode}
                        sx={{
                            width: '45%',
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                            color: 'orangered',
                            borderColor: 'orangered',
                            '&:hover': {
                                backgroundColor: 'orangered',
                                borderColor: 'orangered',
                                color: 'white'
                            }
                        }}
                        onClick={() => { setEditMode(!editMode) }}>
                        Hủy
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default ProfileBox;