import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";
import Post from "./components/Profile/MyPosts/Post/Post";

const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
    {id: 1, message: 'Hi, how are you?' , likes: 97},
    {id: 2, message: 'It is my first post', likes: 12},
    {id: 2, message: 'Whats that?', likes: 12},
    {id: 2, message: 'blalala', likes: 12}
]
let digitalData = [
    {id: 1 , name: 'Malik'},
    {id: 2, name: 'Nazim'},
    {id: 3, name: 'Omar'},
    {id: 4, name: 'Dzhamal'},
    {id: 5, name: 'Dmitriy'},
    {id: 6, name: 'Max'}
]
let messagesData = [
    {id: 0 , messages: 'Hi'},
    {id: 1, messages: 'How is it going?'},
    {id: 2, messages: 'like and subscribe posts which I made for, it motivates me work better and more '}
]




root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={digitalData} messages={messagesData} posts={posts}/>
        </BrowserRouter>

    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
