
import { strapiClient as StrapiClient} from "../lib/api";


const client  = new StrapiClient();

async function getStaticPropst()  {
  
    
    const allServices =  await client.fetchData('/services')  
   console.log(allServices.data)
   
};

getStaticPropst();