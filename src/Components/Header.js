import React from 'react'
import logoDark from '../svg/logo-white-fill.svg'
import logoLight from '../svg/logo-dark-fill.svg'
import iconDark from '../svg/icon-sun.svg'
import iconLight from '../svg/icon-moon.svg'
// import icon from '../svg/'

function Header({toggleTheme, themeStatus, theme}) {

    // const themeChange='LIGHT'

  return (
    <div className="header-container">
        <div className='logo-div'>
      <section className="left">
        <img  src={theme === 'dark' ? logoDark : logoLight} alt=""  />
      </section>
      <section className="right">
            <p className={theme === 'dark' ? 'theme' : 'theme-light'}>{themeStatus}</p>
        <img className='icon-theme' src={theme === 'dark' ? iconDark : iconLight} alt="" onClick={toggleTheme} />
      </section>
    </div>
    </div>
  )
}

export default Header
