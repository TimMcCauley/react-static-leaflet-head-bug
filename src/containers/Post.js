import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import Head from 'react-helmet'
import './leaflet.css'  


const Post = () => {
  const { post } = useRouteData()


  // only load leaflet in browser not for react-static
  // importing leaflet when building react-static website
  // will remove the head section of the html document and I have no idea why!
  if (typeof document !== 'undefined') {

    const a = './leaflet-src.esm.js'    

    import(`${a}`).then(L => {

      const southWest = L.latLng(-89.98155760646617, -180)
      const northEast = L.latLng(89.99346179538875, 180)
      const bounds = L.latLngBounds(southWest, northEast)

      const mapParams = {
        center: [40.419, -73.889],
        maxBounds: bounds,
        zoom: 10,
        minZoom: 2,
        maxZoom: 18
      }

      const map = L.map('map', mapParams)

      map.setView(mapParams.center, 6)
        
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19
        }
      ).addTo(map)

      
      })
    
  } 
  // else {
  //   console.log('react-static cant do leaflet')
  // }


  return (
    <div>
      <Head>
        <title>Post | {post.title}</title>
      </Head>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div style={{ height: '300px', width: '300px'}} id="map" />
    </div>
  )
}

export default Post

