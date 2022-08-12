import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import colors from '../style/color';
import CardMedia from '@mui/material/CardMedia';

const heroSection = () => {
  return (



<Box
sx={{
  display: 'flex',
  flexDirection: {xs: 'column', md: 'row'},
  alignContent: 'space-between',
  height: 700,
  backgroundColor: colors.palette.primary.dark,
  fontWeight: 'bold',
}}
>


<Box
sx={{
  display : 'flex',
  flexDirection: 'column',
  margin: 5,
  padding: 5,
  width: '50%',
  }}
>
      <Box component="span" sx={{fontSize: 64, mt:1, color: colors.palette.primary.light }} >
        Move Faster
      </Box>
      
      <Box component="span" sx={{fontSize: 64, mt:1 }} >
        Move Faster
      </Box>

      <Box component="span" sx={{fontSize: 16, mt:1, width: '50%'}} >
      Move FasterMove FasterMove FasterMove FasterMove 
      FasterMove FasterMove FasterMove FasterMove Faster
      </Box>

</Box>




<Box
sx={{
  width:'50%',
  
  margin: 2,
  overflow: 'hidden'
}}
>
  
  
  <Box
  sx={{
    borderRadius: '20%' ,
    width:'100%',
  }}>
     <CardMedia
  component="img"
  alt="green iguana"
  height="100%"
  image="/images/image.png"
/>
  
  </Box>
</Box>









</Box>



)
}

export default heroSection