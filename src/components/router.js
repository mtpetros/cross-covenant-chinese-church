import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import App from './App'
import reset from '../styling/reset.scss'

const router = (
    <BrowserRouter>
        <App style={ reset } />
    </BrowserRouter>
)

export default router