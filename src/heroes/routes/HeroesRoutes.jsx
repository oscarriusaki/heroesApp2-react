import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPages, MarvelPage } from '../pages'
import { Hero } from '../pages/Hero'
import { Search } from '../pages/Search'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path='marvel' element={<MarvelPage />} />
                <Route path='dc' element={<DcPages />} />

                <Route path='search' element={<Search />} />
                <Route path='hero/:id' element={<Hero/>} />

                <Route path='/' element={<Navigate to='/marvel' />}   />
            </Routes>
        </div>
    </>
  )
}
