import React from 'react'
import { useRouteData } from 'react-static'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

//
import { Link } from 'components/Router'
// Importing Leaflet Destroys the dynamic generation of the Html Head
import Head from 'react-helmet'

const Post = () => {
  const { post } = useRouteData()
  return (
    <div>
      <Head>
        <title>Post | {post.title}</title>
      </Head>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
