import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";



let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Anna"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Petr"},
                {id: 4, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Yo"},
                {id: 3, message: "How are you?"}
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "First post", likesCount: 15},
            ],
            newPostText: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },    

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }

}

export default store;