
import { Component } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallary';
 
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
    page: 1,
    perPage: 12,
  }
   
 handleFormSubmit = request => {
   this.setState({ request });
   console.log(this.state.request)
  }
    

  
  

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem request = {this.state.request} page = {this.state.page} perPage = {this.state.perPage} />
        </ImageGallery>

     </Container>
      
    );
  }
       
}
  
 
       