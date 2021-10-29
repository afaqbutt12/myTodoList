const Reducer = (state, action) => {
    
    switch (action.type) {
        case 'ViewList':
            return {
                ...state,
                ListData: action.payload
            };
        case 'EditList':{
            console.log(action.payload)
            return{
                ...state,
                UpdatedlistData:action.payload,
            }
        }
        case 'ADD_POST':
            return {
                ...state,
                };
        case 'REMOVE_POST':
            return {
                ...state,
                // posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;
