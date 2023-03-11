import React from 'react'
import Footer from './Components/FooterDiv/Footer'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/Value'

const App = () => {
  return (
        <div className  = ' m-auto w-[85%] m-auto bg-white'>
        <NavBar/>
        <Search/>
        <Jobs/>
        <Value/>
        <Footer/>
    </div>
  )
}

export default App