import React from 'react'
// ⬇️⬇️⬇️⬇️컴포넌트 만들기전에 세팅해야할 부분들 ⬇️⬇️⬇️⬇️
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'
import AboutView from './views/AboutView'
import './assets/scss/style.scss'
// ---------------------------------------------

const App = () => {
  return (
    // ⬇️⬇️⬇️⬇️컴포넌트 만들기전에 세팅해야할 부분들 ⬇️⬇️⬇️⬇️ (BrowserRouter, Routes, Route(path 와 element설정, 공식이니까 일단 외우기)  )

    <BrowserRouter>
      <Routes>
        {/* path뒤에 공백이면 기본 도메인에서 보여지는 화면, /about을 입력하면, 도메인/about 입력시 나오는 화면 컴포넌트 ex)www.google.com and 
        www.google.com/about */}
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
      </Routes>
    </BrowserRouter>
  )
  // ------------------------------------------
}

export default App
