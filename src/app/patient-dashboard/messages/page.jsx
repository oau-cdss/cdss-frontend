import React from 'react'
import Header from '../component/header'
import Sidebar from '../component/sidebar'


function Messages() {
  return (
<div className="flex h-full w-screen">
  <div className="w-[15%]">
    <Sidebar />
  </div>

  <div className="flex w-[85%] flex-col h-full px-5">
    <Header />
   
  </div>
</div>
  )
}

export default Messages