import ImageLoader from "components/Sceleton/Skeleton";
import styled from "styled-components";

const ImageLoaderGallery = styled.div`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const Loader2 = ({amount = 12}) => {
    return (
        <>
        <ImageLoaderGallery>
        {[...Array(amount)].map((_, index) => (
        <ImageLoader key={index} />
      ))}  
        </ImageLoaderGallery>
      
      </>
    )
    
}