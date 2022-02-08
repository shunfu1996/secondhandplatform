import react from "react";
const AdImg = []
    


export default function Slide({ content }) {
    return (
        <div style={{  backgroundImage: `url(${content})`}}>
            <img src="" />
        </div>
    )
}


/* import React from 'react'
import styled from '@emotion/styled'

const SliderContent = styled.div`
  transform: translate(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`
export default SliderContent */