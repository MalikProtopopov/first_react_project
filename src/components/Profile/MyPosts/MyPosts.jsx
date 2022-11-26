import React from "react";
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    return  <div>
        <div className={s.myPosts}>
            My posts
        </div>

    <form className={s.special}>
            <label>
                <input type="text" name="name" />
            </label>
            <input type="submit" value="send" />
         </form>

        <div className={s.headPostsProfile}>
            New posts
        </div>
        {props.postsElements}

    </div>
}
export default MyPosts;