import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
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
        <Post message='Hi, how are you?' likes='97'/>
        <Post message='It is my first post' likes='13'/>

    </div>
}

export default MyPosts;