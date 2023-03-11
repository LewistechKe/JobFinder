import React from 'react'

const NavBar = () => {
  return (
    <div className='NavBar flex justify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-greenColor">
                <strong>Job</strong>Finder</h1>
        </div>
        <div className="menu flex gap-8">
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Jobs</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Companies</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Above</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Contact</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Blog</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Login</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Register</li>
            
        </div>
    </div>
  )
}

export default  NavBar