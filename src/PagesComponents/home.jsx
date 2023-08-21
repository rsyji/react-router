import React,{ useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data=> data.json())
        .then(data=> setPosts(data))
    },[])
  return (
  <>
    <h1 className='font-bold text-3xl'>Home</h1>
    <div className='flex justify-around'>
        {posts.map(post=> <NavLink to={`/post/${post.id}`} key={post.id}><div>{post.title}</div></NavLink>)}
    </div>
  </>
    
  )
}

export default Home