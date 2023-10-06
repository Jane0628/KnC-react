import React from 'react'
import logoImg from "../pic/dark_logo.png"

const Header = () => {

  return (
    <header>
      <div>
        <img src={logoImg} />
        <div className='right'>
          <div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header