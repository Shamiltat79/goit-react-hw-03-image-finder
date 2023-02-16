import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const Image = styled.img`
width: 300px;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`


const ImageItem = styled.li`
width: 300px;
  height: 260px;
 
    border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`



export const ImageGalleryItem = ({images, handleModal}) => {  
                
    return (                 
     <>
        { images.map(image => (
            <ImageItem key={image.id} >
            <Image src={image.webformatURL} alt="" key={image.id} onClick={handleModal} />
            </ImageItem>
            ))
        }
                       
    </>
     )}

     ImageGalleryItem.propTypes = {
        images: PropTypes.arrayOf(PropTypes.object.isRequired)
     }

     


          

    
