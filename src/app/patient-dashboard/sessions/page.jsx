import React from 'react'
import Header from '../component/header'
import Sidebar from '../component/sidebar'
import Main from '../component/main'

function Sessions() {
  return (
<div className="flex h-full w-screen">
  
  <Sidebar />
  
  <div className="flex flex-col w-4/5">
    
    <Header />
    <Main/>
    
    
  </div>
</div>
  )
}

export default Sessions