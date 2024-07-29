
import './App.css';
// import {  Test2} from './components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Navbar, FirstContent, AllBlog, TrendingOne, Load } from './components';
// import { Routes, Route } from 'react-router-dom';


function App() {
    let [articles, setArticles]= useState([]);
useEffect(() => {
  axios.get("https://dev.to/api/articles").then((response) => {
    setArticles(response.data);
  });
}, []);
  return (
/* <Routes>
<Route path='/' element={<Test2/>}></Route>
<Route path='/Dest' element={<Test3/>}></Route>
<Route path='/Cest' element={<Test4/>}></Route>
<Route path='/Test' element={<Test/>}></Route>
</Routes> */
 <div className='flex flex-col max-w-[1216px] mx-auto gap-[100px]'>
       <Navbar/> 
      <FirstContent/>
      <TrendingOne/>
     <AllBlog articles={articles}/>
     <Load/>
     <AllBlog articles={articles}/>
    {/* <Test2/> */}
  </div>
  
   
  );
}

export default App;
// useEffect(() => {
//   axios.get(`${BACKEND_ENDPOINT}/articles`).then((response) => {
//     setArticles(response.data);
//     console.log(articles, "articles");
//   });
// }, []);