import { BiSlideshow } from "react-icons/bi";
import Arrow from "./Arrow";
import Slide from "./Slide";
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import advanA from './img/a.jpg';
import advanB from './img/b.jpg';
import advanC from './img/c.jpg';
import advanD from './img/d.jpg';
import advanE from './img/e.jpg';



/* export default function Advertise() {
    return (
        <div >
            {images.map(slide => (
                <Slide key={slide} content={slide} />
            ))}
            <Arrow />
        </div>
    )
} */


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  export default function Advertise() {
    return (
      <>

        <Carousel dotPosition="bottom">
          <div>
            <img src={advanA} width="50%" height="50%" style={{verticalAlign: "middle"}} />
            <img src={advanB} width="50%" height="50%" style={{verticalAlign: "middle"}} />
          </div>
          <div>
            <img src={advanC} width="50%" height="50%" />
          </div>
          <div>
            <img src={advanD} width="50%" height="50%" />
          </div>
          <div>
            <img src={advanE} width="50%" height="50%" />
          </div>
        </Carousel>
      </>
    );
  };