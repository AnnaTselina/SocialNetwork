let ENTER_NEW_MESSAGE = 'ENTER-NEW-MESSAGE';
let SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

export const enterNewMessageActionCreator = (text) => {
    return {
        type: ENTER_NEW_MESSAGE,
        text: text
    }
}
export const sendNewMessageActionCreator = () => {
    return {
        type: SEND_NEW_MESSAGE
    }
}

let initialState = {
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
}

let dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ENTER_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.text
            };
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageText}],
                newMessageText: ''
            };
        default:
            return state;
    }
    
}

export default dialogsReducer;