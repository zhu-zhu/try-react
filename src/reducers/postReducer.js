const initialState = {
    items: [],
    item: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_USER':
            return {
                ...state,
                item: action.payload
            }
        case 'GET_USER':
            console.log(state)
            return {
                ...state
            }
        default: 
            return state
    }
}

export default reducer