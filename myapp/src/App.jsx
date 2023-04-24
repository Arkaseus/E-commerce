
import { useState, useEffect } from 'react';
import {Link,Route,Routes} from 'react-router-dom';

import './App.css'

import Signup from './components/authentication/signup';
import Signin from './components/authentication/signin';
import Home from './screens/home/home';

import Admin_signin from './screens/admin/admin_signin';

import Admin_home from './screens/admin/admin_home';
import Update_pro from './screens/admin/update_pro';
import Cart from './screens/cart/cart';

function App() {

  return (
         <>
       
          <Routes> 
            <Route path="/" element={ <Home/>}>                 </Route>
            <Route path="/home" element={ <Home/>}>             </Route>
            <Route path="/signin" element={ <Signin/>}>         </Route>
            <Route path="/signup" element={ <Signup/>}>         </Route>
            <Route path="/admin_signin" element={ <Admin_signin/>}> </Route>
            <Route path="/admin_home" element={ <Admin_home/>}>   </Route>
            <Route path="/update_pro" element={<Update_pro/>}>    </Route>
            <Route path="/cart" element={<Cart/>}>    </Route>
          </Routes>

         </>
  )
}

export default App
