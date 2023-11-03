import React from 'react'
import logoImg from "../pic/dark_logo.png"
import PersonIcon from '@mui/icons-material/Person';

// 디자인
import design from "../design/Header.scss"

const Header = () => {
  return (
    <header className='suit'>
      <div className='align'>
        <img src={logoImg} />
        <div className='right'>
          <div className='users'>
            <div className='myPage'>
              <PersonIcon />
              <a>Login</a>
            </div>
            |
            <a className='care'>CARE 회원이란?</a>
          </div>
          <div className='menus'>
            <a className='english'>GUIDE</a>
            <a>오디션</a>
            <a>질문하기</a>
            <a className='english'>CARE</a>
            <a>파트너사</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header