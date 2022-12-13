import React, { useEffect, useState } from 'react';
import { Button, MenuItem, InputLabel, Select, TextField } from '@mui/material';
import apiCategories from '../../../apis/category.api';

const buttonStyle = {
    borderColor: '#FF8C00',
    marginTop: '10px',
    width: '50%',
    color: '#FF8C00',
    '&:hover': {
        color: 'white',
        backgroundColor: '#FF8C00',
        borderColor: '#FF8C00'
    }
};

const CategoryOption = () => {   
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [filter, setFilter] = useState("");
    const categoriesFilter = categories
        .filter(x => x.type.includes(filter) || x.subtype.includes(filter));

    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function callAPI() {
            const categoryList = await apiCategories.getAllCategories();
            setCategories(categoryList);
        }    

        return () => {
            callAPI();
        };
    }, []);

    return (
        <>
            <InputLabel sx={{fontSize: '0.8rem'}}>Danh mục *</InputLabel>
            <Select
                id="category" 
                type="text" 
                // name="category" 
                variant="outlined"
                value={category}
                sx={{fontSize:'0.8rem', width: '100%', overflow: 'hidden'}}
                onClick={() => setFilter("")}
                onChange={handleChangeCategory}
              >
                <TextField 
                    type="text"
                    sx={{ width: '90%', margin: '2px 5%', borderColor: '#333', fontSize: '0.75rem' }}
                    value={filter}
                    variant="standard"
                    onChange={(e) => { 
                        setFilter(e.target.value);
                    }}
                />
                {categoriesFilter.map((option) => (
                  <MenuItem key={option.id} value={option.id} sx={{fontSize: '0.7rem'}}>
                    {option.type + " - " + option.subtype}
                  </MenuItem>
                ))}
              </Select>
              <Button 
                variant="outlined" 
                sx={buttonStyle}
                onClick={() => {}}>
                    Tạo danh mục mới
              </Button>
        </>
    )
}

export default CategoryOption;