import React from 'react'
import {Route, Navigate, Routes} from 'react-router-dom'
import { routes } from '../routes.js'
import { SHOP_ROUTE } from '../utils/consts.js'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
  )
}

export default AppRouter