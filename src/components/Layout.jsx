import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {

  return (
    <>
    <NavBar/>
    <div className={styles['main-container']}>
        {children}
    </div>
    
    </>
    
  )
}

export default Layout