import s from "./Dialogs.module.css"


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {props.dialogsElement}
            </div>
            <div className={s.messages}>
                {props.messageElement}
            </div>

        </div>
    )
}
export default Dialogs;


