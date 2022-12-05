import React from 'react';
import Header from './Header';
import Slider from '../components/Slider';
import {
  Stack,
} from '@mui/material';


function LayoutAdmin() {
  return (
    <Stack direction="row">
      <Slider/>
      <Stack>
        <Header/>
      </Stack>
    </Stack>
  )
}

export default LayoutAdmin;