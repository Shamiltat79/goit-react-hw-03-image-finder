import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Overlay = styled.div`
     position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`
const StyledModal = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
`


export class Modal extends Component {
    state = ''

    handleESC = (event) => {
        if (event.key === 'Escape') {
            this.props.closeModal();
        }
    }

    handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
        this.props.closeModal();
    }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleESC)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleESC)
    }

    render() {
        return(
            <Overlay  onClick={this.handleBackdropClick}> <StyledModal><img src={this.props.largeImage} alt="" /></StyledModal></Overlay>
                 
                    
                  
                 )
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
}