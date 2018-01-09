import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users/Raulif/repos'

export const FETCH_REPOS = 'FETCH_REPOS';

export function fetchRepos() {
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_REPOS,
        payload: request
    }
}
