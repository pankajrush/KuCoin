import React from 'react'
import kucoin from '../../assets/logokucoin.svg'
import './Nav.css'
import { useNavigate } from 'react-router'

const Nav = () => {

    const navigate = useNavigate();

    const handlelogin = () => {
        navigate('/login')
    }

  return (
    <div className='navbar'>
        <div className="leftbar">
            <ul>
                <li><img src={kucoin} alt="" /></li>
                <li className='divide'>|</li>
                <li onClick={handlelogin}>Buy Crypto</li>
                <li onClick={handlelogin}>Markets Trade</li>
                <li onClick={handlelogin}>Derivatives</li>
                <li onClick={handlelogin}>Earn</li>
                <li onClick={handlelogin}>Institutional</li>
                <li onClick={handlelogin}>More</li>
                <li onClick={handlelogin} className='rewards'>Rewards Hub</li>
                <li className='searchicon'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg><input type="text" placeholder='Search' /></li>
            </ul>
        </div>
        <div className="rightbar">
            <ul>
                <button className='login' onClick={handlelogin}>Log In</button>
                <button className='signup' onClick={handlelogin}>Sign Up</button>
            </ul>
        </div>
    </div>
  )
}

export default Nav