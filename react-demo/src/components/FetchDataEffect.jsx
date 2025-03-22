import React, { useState, useEffect } from 'react'

const FetchDataEffect = () => {

    const [post, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            // convert response into json
            const data = await response.json()
            // store inside our state
            setPosts(data)
        }

        fetchData()

    } , [] )

  return <div>

    <h1>First Post Title: </h1>
    {/* first post only so that why users[0] */}
    {post.length > 0 ? <h2>{post[0].title}</h2> : <p>Loading......</p> }
  </div>
}

export default FetchDataEffect
