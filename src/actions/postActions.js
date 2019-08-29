import axios from 'axios'

const fetchPost = () => async dispatch => {
    let { data } = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
    dispatch({
        type: 'FETCH_POSTS',
        payload: data
    })
}

const addUser = (userName) => async dispatch => {
    dispatch({
        type: 'ADD_USER',
        payload: userName
    })
}

const getUser = () => async dispatch => {
    dispatch({
        type: 'GET_USER'
    })
}

export {
    fetchPost,
    addUser,
    getUser
}