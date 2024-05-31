import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from '../Pages/Homepage'
import MovieDetails from '../Components/MovieDetails'
import Topratedpage from '../Pages/Topratedpage'
import Favouritepage from '../Pages/Favouritepage'
import Blog from '../Pages/Blog'
import Signup from '../Components/Signup'
import Login from '../Components/Login'

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/topratedpage" element={<Topratedpage />} />
          <Route path="/favorite" element={<Favouritepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing