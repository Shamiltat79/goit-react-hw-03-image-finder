import styled from "styled-components";
import React from "react";
import PropTypes from 'prop-types';

 const Button = styled.button`
  display: inline-block;
  width: 300px;
  height: 48px;
  margin-right: auto;
  margin-left: auto;
  border: 0;
  border-radius: 10px;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-color: #3f51b5;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover{
    opacity: 0.6;
    transform: scale(1.1);
  }
 `



export const Loadbutton = ({onClick}) => {
    return (
<Button type="button" onClick={onClick}>Load more...</Button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}