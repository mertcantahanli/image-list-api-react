import React from "react";

const ImageList = (props) => {
    const images=props.images.map((image) =>{
        return <img key={image.id} src={image.webformatURL} alt="imagee"/>
    })
    
    
    
    return (
       <div>
            {props.imagearr>0 ? <div>{images}</div>: <div>Lütfen geçerli bir kelime arayın</div> } 
            
      </div>
)};

export default ImageList;
