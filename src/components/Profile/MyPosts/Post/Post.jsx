import React from "react";
import s from './Post.module.css';



const Post = (props) => {
    return  (
        <div>

        <div className={s.postsProfile}>
            <img className={s.avatar} src='https://sun9-17.userapi.com/impg/c857216/v857216917/d3021/bzwMaw93g3w.jpg?size=604x604&quality=96&sign=e8e07193c82adce127fc9328409bfa75&type=album'>
            </img>
            <div className={s.post2} >
                {props.message}
            </div>
                <div className={s.likes}><img src='https://e7.pngegg.com/pngimages/103/933/png-clipart-computer-icons-graphics-thumb-signal-partnership-icon-hand-thumb-signal.png'></img> {props.likes}</div>
            </div>
        </div>

    )
}


export default Post;