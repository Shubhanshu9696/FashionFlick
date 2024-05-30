import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Product } from '../components/Product';
import { Spinner } from '../components/Spinner';

export const Home = () => {
  const URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData(){
    setLoading(true);

    try {
      const response = await fetch(URL);

      const data = await response.json();

      // console.log("type of data in home");
      // console.log(typeof data);
      // console.log(data.length());
      console.log(Object.keys(data).length);
      console.log(data);
      setPosts(data);

      // axios.get(URL).then((response) =>{setPosts(response.data) console.log(response.data)} )
      

    } catch (error) {
      console.error(error);
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      {
        loading ? <Spinner/> : posts.length >0 ? 
        (<div className='grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
          {
            posts.map( (post) =>(<Product  key={post.id} post= {post} />))
          }
        </div> ) :
        <div className='flex justify-center items-center'>
          <p>No product found</p>
        </div>
      }
    </div>
  )
}
