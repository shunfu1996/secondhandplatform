import React from 'react';
import leftArrow from '../../img/left-arrow.svg';
import rightArrow from '../../img/right-arrow.svg';

export default function Arrow() {
    return (
        <div>
            <img src={leftArrow} />
            <img src={rightArrow} />
        </div>
    )
}