import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './PagesComponents/home';
import About from './PagesComponents/about';
import Profile from './PagesComponents/profile';
import SayHelloToUser from './PagesComponents/sayHelloToUser';
import PostPage from './PagesComponents/postPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user/:userName' element={<SayHelloToUser/>}/>
        <Route path='/post/:postId' element={<PostPage/>}/>
        <Route path='userSetting'>
          <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);