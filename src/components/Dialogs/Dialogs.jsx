import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {   


    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem name = {el.name} key={el.id} id={el.id}/>);

    let messagesElements = props.dialogsPage.messages.map(mess =>  <Message message={mess.message} key={mess.id} id={mess.id}/>);

    let newMessageText = React.createRef();
    let changeNewMessageText = () => {
        let text = newMessageText.current.value;
        props.changeNewMessageText(text);
    }
    let sendMessageButton = React.createRef();
    let sendMessageText = () => {
        props.sendMessageText();
    }

    return (
        <div className={d.dialogs}>
            <div className = {d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {d.messages}>
                {messagesElements} 
                <div>
                    <textarea ref={newMessageText} onChange={changeNewMessageText} value = {props.dialogsPage.newMessageText}></textarea>  
                </div>
                <button ref = {sendMessageButton} onClick = {sendMessageText}>Send</button>             
            </div>
            
        </div>
        
    )
}

export default Dialogs;