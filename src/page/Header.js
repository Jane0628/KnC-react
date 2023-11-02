import React from 'react'
import logoImg from "../pic/dark_logo.png"
import PersonIcon from '@mui/icons-material/Person';

// 디자인
import design from "../design/Header.scss"

const Header = () => {
  return (
    <header>
      <div className='align'>
        <img src={logoImg} />
        <div className='right'>
          <div className='users'>
            <PersonIcon />
            <a>My Page</a>
            |
            <a className='care'>CARE 회원이란?</a>
          </div>
          <div className='menus'>
            <a>GUIDE</a>
            <a>오디션</a>
            <a>질문하기</a>
            <a>CARE</a>
            <a>파트너사</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header