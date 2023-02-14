import { Component } from "react";
import styled from "styled-components";


import { STATUS } from "constans/status.constans";
// import imageAPI  from "components/Services/image.service";

import api from "components/Services/image.service";
// import { Loadbutton } from "components/Button/Button";
import { Loader2 } from "components/Loader/Loader2";
import { Modal } from "components/Modal/Modal";

const Image = styled.img`
width: 300px;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`


const ImageItem = styled.li`
width: 320px;
  height: 260px;
 
    border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`
const Notify = styled.p`
   color: #6f6b6b;
  text-align: center;
  padding: 10px;
`


export class ImageGalleryItem extends Component {

    state = {
        images: null,
        status: STATUS.idle,
        error: null,
        request: '',
        total: null,
        largeImage: null,
    }

openModal = (event) => {
    // eslint-disable-next-line array-callback-return
    this.state.images.map((pic) => {
        if( pic.webformatURL === event.target.src) {
        this.setState({largeImage: pic.largeImageURL}) 
        
        }
})
        
        }

    closeModal = () => {
        this.setState({largeImage: null})
    }   


    componentDidUpdate(prevProps, ) {

        const prevRequest = prevProps.request;
        const nextRequest = this.props.request;




        if (prevRequest !== nextRequest || prevProps.page !== this.props.page) {
            this.setState({ status: STATUS.loading });
            this.setState({request: this.props.request});
            api
                .getImage(nextRequest,this.props.page, this.props.perPage)
                .then(gallery => this.setState({images: gallery.hits, status: STATUS.success, total: gallery.total,})
                
                )

                .catch(error => this.setState({error, status: STATUS.error}))
            

    
           

        }
    }

        render() {
            const { images, status,} = this.state;
           
            if (status === STATUS.idle) {
                
                return <Notify>Please enter search image...</Notify>
            }
            if (status === STATUS.loading) {
                return  <Loader2/>
            }

            if (status === STATUS.success && images !== []) {
                return (
                    
                   <>
                { 
    
    images.map(image => (
                        <ImageItem key={image.id}>
                            <Image src={image.webformatURL} alt="" key={image.id} onClick ={ this.openModal}/>
                        
                          
                        </ImageItem>
                        ))}
                { this.state.largeImage === null ? null : <Modal largeImage = {this.state.largeImage} closeModal= {this.closeModal}/>}
                        </>
     )}

    //  else { toast.info(`Нет фото по запросу ${request}`)}

            if (status === STATUS.error) {
                        return <div> Шеф, всьо пропало!!! </div>
                    }

        }
    }

    
