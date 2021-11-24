import { Route, Routes } from 'react-router-dom'

import React from 'react'
import Explore from '../pages/Explore'
import ErrorPage from '../pages/ErrorPage'
import LaunchesIdPage from '../pages/LaunchesIdPage'

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Explore />} />
            <Route exact path="/:id" element={<LaunchesIdPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
