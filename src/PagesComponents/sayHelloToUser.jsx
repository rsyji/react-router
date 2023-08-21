import React from 'react'
import {useParams} from 'react-router-dom'

const SayHelloToUser = () => {
    const userid = useParams()
    console.log(userid)
  return (
    <div>Welcome Your Name is: {userid.userName}</div>
  )
}

export default SayHelloToUser