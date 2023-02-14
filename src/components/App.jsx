
import { Component } from 'react';
import styled from 'styled-components';


import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Loadbutton } from './Button/Button';



const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`



export class App extends Component {

  
  state = {
    gallery: null,
    request: '',
    perPage: 12,
    page: 1,
    
  }
   
 handleFormSubmit = request => {
   this.setState({ request });
   console.log(this.state.request)
  }
    
handleButtonClick = async () =>{
this.setState((prevState) => ({page: prevState.page + 1}))

}



// handleFetch = async ()
  

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem request = {this.state.request} page = {this.state.page} perPage = {this.state.perPage} largeImage = {this.state.largeImage}></ImageGalleryItem> 

        </ImageGallery>
        {/* <Loader2 /> */}
        {<Loadbutton onClick={this.handleButtonClick}/>}  
        
     </Container>
      
    );
  }
       
}
  
// this.state.page > 1 && 
       