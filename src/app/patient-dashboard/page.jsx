import React from 'react'
import Header from './component/header'
import Sidebar from './component/sidebar'
import Main from './component/main'

function Patient() {
  return (
<div class="flex h-full w-screen">
  
  <Sidebar />
  
  <div class="flex flex-col w-4/5">
    
    <Header />
    <Main/>
    
    
  </div>
</div>
  )
}

export default Patient