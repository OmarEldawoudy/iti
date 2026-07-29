import { useState } from 'react';
import './App.css';
import Home from './assets/component/Home/Home.jsx';
import About from './assets/component/About/About.jsx';
import Layout from './assets/component/Layout/Layout.jsx';
import Navbar from './assets/component/Navbar/Navbar.jsx';
import Footer from './assets/component/Footer/Footer.jsx';
import Car from './assets/component/Car/Car.jsx'; 
import Hero from './assets/component/Hero/Hero.jsx'; 
import Parent from './assets/component/Parent/Parent.jsx';
// import Child from './assets/component/Child/Child.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notfound from './assets/component/Notfound/Notfound.jsx';

function App() {
  // createBrowserRouter([
  // {path:  '/', element:<Home></Home>},
  // { path: '/Home', element: <Home></Home> },
  // { path: '/Hero', element: <Hero></Hero> },
  // { path: '/About', element:  <About></About>},
  // { path: '/Footer', element: <Footer></Footer> },
  // ])

  const routes= createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { path: '/Navbar', element: <Navbar></Navbar> },
        {
          index: true, element: <Home></Home>, },
        {
          path: '/Hero', element: <Hero></Hero>, children: [
            { path: 'Cars', element: <Car></Car> },

          ]
},
        { path: '/About', element: <About></About> },
        { path: '/Footer', element: <Footer></Footer> },
        { path: '*', element: <Notfound/> },

    ] },
  
  ])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App