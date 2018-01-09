import React, { Component } from 'react';
import { history } from '../index'

class Name extends Component {
    constructor(props) {
        super(props)

        this.state = { className: 'animated fadeInUpBig name' }
    }

    onClickOut() {
        this.setState({ className: 'animated fadeInUpBig name fadeOut'})
        setTimeout(() => {
            history.push('/main')
        }, 300)
    }

    render() {
        return (
            <div>
                <div
                    className={this.state.className}
                    onClick={this.onClickOut.bind(this)}>
                        Hi, my name is Raul
                </div>
            </div>
        )
    }
}

export default Name;
