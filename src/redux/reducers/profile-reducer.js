let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator =() => {
    return {type: ADD_POST};
}
export const updateNewPostActionCreator =(text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        text: text
    }
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "First post", likesCount: 15},
    ],
    newPostText: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: { 
            let post = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        default:
            return state;
    }
}

export default profileReducer;

