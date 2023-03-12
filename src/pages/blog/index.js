import React from 'react'

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {
        posts.map(val => {
          return (
            <div key={val.id}>
              <h1>
                {val.id}{val.title}
              </h1>
            </div>
          )
        })
      }
    </>
  )
}

export default PostList


export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data =await response.json()

  return {
    props: {
      posts: data
    }
  }
}