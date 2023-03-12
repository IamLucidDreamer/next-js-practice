import React from 'react'

const Blog = ({ post }) => {
  return (
    <div>{post.id}{post.title}</div>
  )
}

export default Blog

export const getStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blog}`)
  const data = await response.json()

  return {
    props: {
      post: data
    }
  }
}

export const getStaticPaths = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  return {
    paths: data.map(post => {
      return {
        params: {
          blog: `${post.id}`
        }
      }
    })
    ,
    fallback: false
  }
}