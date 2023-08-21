import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const PostPage = () => {
    const [post,SetPost] = useState(null)
    const idOfPost = useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idOfPost.postId}`)
        .then(data=> data.json())
        .then(data=> SetPost(data))
    },[])
  return (
    <div>
        {
            post===null ? <>Loading...</>:<><h1 className='text-4xl font-bold'>{post.title}</h1>
            <p>{post.body}</p></>
        }
    </div>
  )
}

export default PostPage