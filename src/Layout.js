import React from 'react'
import NavigationBar from './components/NavigationBar'
import { Footer } from './components/Footer'
import ChatBotPanel from './components/ChatBotPanel'

function Layout({children}) {
  return (
    <div>
      <NavigationBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
