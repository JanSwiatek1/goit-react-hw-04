// import { useState } from 'react'
import { ImageGallery } from './components/imageGallery/imageGallery'
import { SearchBar } from './components/searchBar/searchBar'
import { Loader } from './components/loader/loader'
import './App.css'


function App() {


  return (
    <>
      <SearchBar/>
      <h1>Vite + React</h1>
      <ImageGallery/>
      <Loader/>
    </>
  )
}

export default App
