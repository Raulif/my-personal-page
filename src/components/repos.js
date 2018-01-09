import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Repos extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    renderRepos(repo) {
        return(
            <li key={repo.id}>
                <p>{repo.name}</p>
            </li>
        )
    }

    render() {
        return (
            <ul>
                {_.map(this.props.repos, this.renderRepos.bind(this))}
            </ul>
        )
    }
}

export default Repos;
