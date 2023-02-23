import axios from "axios";
import { Component } from 'react';
import styled from 'styled-components';
import {  toast } from 'react-toastify';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Loadbutton } from './Button/Button';

import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`



export class App extends Component {

  
  state = {
    request: '',
    images: [],
    perPage: 12,
    page: null,
    error: null,
    total: null,
    largeImage: null,
    totalHits: null,
    isLoader: false,
  }
   
 handleFormSubmit = (search) => {
   this.setState({request: search, page: 1, images: []});
   
  }

  getModalImage = (event) => {
    // eslint-disable-next-line array-callback-return
    this.state.images.map(image => 
      {image.webformatURL === event.target.src && this.setState({largeImage: image.largeImageURL}) } )
      

        
        }  

closeModal = () => {
  this.setState({largeImage: null})
       } 

handleButtonClick = async () =>{
      
  this.setState((prevState) => ({page: prevState.page + 1, }))
  }

        
    async componentDidUpdate(_, prevState) {

      const prevRequest = prevState.request;
      const nextRequest = this.state.request;
      const { page, request} = this.state;




      if (prevRequest !== nextRequest || prevState.page !== page) {
          this.setState({ isLoader: true, request: nextRequest});
         
          console.log(nextRequest)
          try {
            
            const {data} = await axios.get(`https://pixabay.com/api/?q=${nextRequest}&page=${page}&key=33196746-3c53ba3d329df844fee4c0829&image_type=photo&orientation=horizontal&per_page=12`)
            
            this.setState((prevState) => ({images: [...prevState.images, ...data.hits], total: data.total, totalHits: data.totalHits, largeImage: data.hits.largeImageURL  }))
             
                    
          if (data.totalHits === 0) { 
            this.setState({image: []}) 
toast.error(`No image by ${request} request`)
            
}

          } catch (error) {
            console.log(error);
          }   
          finally {this.setState({isLoader: false})}
         

      }
      }

      render() {
          
  

  

  
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} handleModal={this.getModalImage}></ImageGalleryItem> 
         { this.state.isLoader && <Loader/>}
        </ImageGallery>
        
       {this.state.largeImage && <Modal closeModal={this.closeModal} largeImage={this.state.largeImage}/>}
        {(this.state.page * this.state.perPage) >= this.state.totalHits ? null : <Loadbutton onClick={this.handleButtonClick}/>}  
        {/* {this.state.images.length < 12 ? null : <Loadbutton onClick={this.handleButtonClick}/> }     */}
     </Container>
      
    );
  
       
}
}

  
// this.state.page > 1 && 

// { this.state.largeImage === null ? null : <Modal largeImage = {this.state.largeImage} closeModal= {this.closeModal}/>}
                        
//    
  