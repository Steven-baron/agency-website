import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import colors from '../style/color';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Webservices  from '../icons/homepage';
import { start } from 'repl';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import  fetchAPI  from '../lib/api';
import { PostsDocument, PostsQuery, PostsQueryVariables } from '../generated'
  import useSWR from 'swr';
  import {ApolloClient, InMemoryCache , useQuery, gql } from '@apollo/client'


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color:"white",
          padding:"2rem",
          margin:"0.2rem",
        },
      },
    },
  },
});






export default function ServicesSection(services) {


//  const { data, error, loading } = useQuery<PostsQuery, PostsQueryVariables>(PostsDocument);

console.log(services.services.services.services.data)



return(
 

    <Box
        sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            alignContent: 'space-between',
            height: 700,
            backgroundColor: colors.palette.primary.dark,
            fontWeight: 'bold',

    }}>
    
{/* service button sections */} 
        <Box
                sx={{
                display : 'flex',
                flexDirection: 'column',
                margin: 5,
                padding: 5,
                width: '50%',
        }}>
                
                <Box component="span" sx={{fontSize: 40, mt:1  }} >
                    Move Faster
                </Box>
                
                <Box component="span" sx={{fontSize: 40, mt:1, color: colors.palette.primary.light  }} >
                    Move Faster
                </Box>

                <Box component="span" sx={{fontSize: 16, mt:1, width: '50%'}} >
                



                </Box>


                {/* secitno of buttons */}
                   <ThemeProvider theme={theme}>
               
              { 
               
              
        
               services.services.services.services.data.map((each, index) => ( 

                <Button key={index} variant="text" edge="start" startIcon={<Webservices/>}  >
               
               {each.attributes.Name}
               
                </Button>
              
           ))} 

              </ThemeProvider>     

        </Box>

        

{/* service exponation section */}
        <Box
            sx={{
            width:'50%',
            
            margin: 2,
            overflow: 'hidden'
        }}>
        
        
            <Box
                sx={{
                borderRadius: '20%' ,
                width:'100%',
                    }}
            >
                
                <Card sx={{ width: 700 }}>
      <CardMedia
        component="img"
        height="400"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
                
       
            </Box>


        </Box>


    </Box>

)



}












