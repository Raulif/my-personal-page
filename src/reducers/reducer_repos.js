import _ from 'lodash';
import { FETCH_REPOS } from '../actions/actions';

export default function(state = {}, action) {

    switch(action.type) {
        case FETCH_REPOS:
            return _.mapKeys(action.payload.data, 'id')
    }

    return state;
}
