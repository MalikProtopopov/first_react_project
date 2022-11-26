import './App.css';

import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/Product/ProductPage";
import DialogWindow from "./components/Dialogs/DialogWindow/DialogWindow";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
            <Routes>
                <Route path='/' >
                <Route path='dialogs' element={<Dialogs messageElement={props.messages} dialogsElement={props.dialogs}/>}/>
                <Route path='dialogs/:id' element={<DialogWindow />}/>
                <Route path='profile' element={<Profile postsElements={props.posts} />}/>
                <Route path='products' element={<ProductPage />}/>
                <Route path='products/:id' element={<Products />}/>
                </Route>
            </Routes>


        </div>

      </div>
  )
}


export default App;
