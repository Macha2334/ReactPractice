import React from 'react';
import './components/pages/commonStyles.scss'
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from '../src/components/pages/Home'
import Cart from '../src/components/pages/Cart'
import Counter from '../src/components/pages/counterContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import AddTodo from "./components/pages/reduxToolKitEx/TodoEx/AddTodo"
import ShowTodo from './components/pages/reduxToolKitEx/TodoEx/ShowTodo';

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <AddTodo/>
        <ShowTodo/>
    </div>
  );
}
/*<Routes>
        <Route path="/" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="counter" element={<Counter/>}/>
        </Routes> */
export default App;
