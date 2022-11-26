import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Post from "../Profile/MyPosts/Post/Post";
import React from "react";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {props.dialogsElement.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )}
            </div>
            <div className={s.messages}>
                {props.messageElement.map( message => <Message message={message.messages}/>)}
            </div>

        </div>
    )
}
export default Dialogs;


