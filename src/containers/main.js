import React, { Component } from 'react';
import MyPic from '../components/my-pic';
import Repos from '../components/repos';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


class Main extends Component {

    componentDidMount() {
        this.props.fetchRepos()
    }

    render() {
        return (
            <div className='main'>
                <MyPic/>
                <Repos repos={this.props.repos}/>
            </div>
        )
    }
}

function mapStateToProps({repos}) {
    return {
        repos
    }
}

export default connect(mapStateToProps, actions)(Main);
