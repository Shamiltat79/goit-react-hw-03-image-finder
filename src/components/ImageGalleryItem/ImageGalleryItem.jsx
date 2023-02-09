import { Component } from "react";
import styled from "styled-components";


import { STATUS } from "constans/status.constans";
import imageAPI  from "components/Services/image.service";
// import { toast } from 'react-toastify';


const Image = styled.img`
width: 300px;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`


const ImageItem = styled.li`
 
    border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`


export class ImageGalleryItem extends Component {

    state = {
        images: null,
        status: STATUS.idle,
        error: null,
        request: '',
    }




    componentDidUpdate(prevProps, prevState) {

        const prevRequest = prevProps.request;
        const nextRequest = this.props.request;




        if (prevRequest !== nextRequest) {
            this.setState({ status: STATUS.loading });
            imageAPI
            .getImage(nextRequest)
            .then(gallery => this.setState({images: gallery.hits, status: STATUS.success}))
            .catch(error => this.setState({error, status: STATUS.error}))

    
           

        }
    }

        render() {
            const { images, status,} = this.state;
            // const { request } = this.props;
            if (status === 'idle') {
                return <div> 'Введіть запит у поле пошуку' </div>
            }
            if (status === 'loading') {
                return  <p>'Шукаю...'</p>
            }

            if (status === 'succes') {
                return (
                    
                    <>{  images.map(image => (
                        <ImageItem key={image.id}>
                            <Image src={image.webformatURL} alt="" />
                        </ImageItem>
                        ))}</>   
                
                    )}
                    if (status === 'error') {
                        return <div> Шеф, всьо пропало!!! </div>
                    }

        }
    }

    
