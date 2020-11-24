import React from 'react';
import { connect } from 'react-redux';
import { enterNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessageText: (text) => {
            dispatch(enterNewMessageActionCreator(text));
        },
        sendMessageText: () => {
            dispatch(sendNewMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;