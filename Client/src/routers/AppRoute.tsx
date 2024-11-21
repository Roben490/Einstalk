import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddNewPuzzle from '../pages/AddNewPuzzle'

export default function AppRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Welcome' element={<Home />}></Route>
            <Route path='/Puzzles' element={<Home />}></Route>
            <Route path='/Users' element={<Home />}></Route>
            <Route path='/Profile' element={<Home />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addNewUser' element={<AddNewUser />}></Route>
            <Route path='/addNewPuzzle' element={<AddNewPuzzle />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
        </Routes>
    </div>
  )
}
