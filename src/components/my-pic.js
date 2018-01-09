import React, { Component } from 'react';
import image from '../rif.jpg';

class MyPic extends Component {
    constructor(props) {
        super(props)

        this.state = { animationClass: 'animated fadeInLeft'}
    }

    render() {

        return(
            <div className={`my-pic ${this.state.animationClass}`}>
                <img src={image} alt='pic'/>
            </div>
        )
    }
}

export default MyPic;
