import type { NextPage } from 'next'
import HeroSection from '../components/heroSection';
import ServicesSection from '../components/serviceSection';
import color from '../style/color';
import Box from '@mui/material/Box';
import {ApolloClient, InMemoryCache , useQuery, gql } from '@apollo/client'
import Button from '@mui/material/Button';
const Home: NextPage = (services) => {




  return (
    <Box
      sx={{
        backgroundColor: color.palette.primary.dark,
        height:'auto',
        width:'auto'
      }}
    >
    
   
   <ServicesSection services={services}/>
    
    
    </Box>
   
  
  )
}

export async function  getStaticProps(){

  const client = new ApolloClient({
    uri: `http://localhost:1337/graphql`,
    cache: new InMemoryCache()
  });

  const {data} = await  client.query({
    query: gql`
    query{
      services{
        data{
          attributes{
            UID
            Name
          }
        }
      }  
    }
    `
  });

  return{
    props: {
      services: data

    }
  }

}

export default Home
