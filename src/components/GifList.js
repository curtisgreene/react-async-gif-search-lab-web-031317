import React from 'react'

function GifList(props) {
  const listItems = props.gifs.map( (gif, i) =>  <li key={i}><img src={gif.images.fixed_height.url} /></li> )
  return (
    <ul>
      { listItems }
    </ul>
  )
}

export default GifList


// maybe hieght and width of image?
