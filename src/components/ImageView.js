import React from 'react'
import './ImageView.css'

const ImageView=({images})=> {
    
    return (
      <div className="imagebox py-3">
          {images.map(({id,largeImageURL, tags})=>{

              return (

                <div key={id} className="gallery">
                    <img src={largeImageURL} alt={tags}/>
                </div>


              )


          })}
      </div>
    )
}


export default ImageView