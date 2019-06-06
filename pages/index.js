import React from 'react'
import Router from 'next/router'

function Index() {
  return (
    <div>
      <span>Index 1</span>
      <button onClick={() => Router.push('/index2')}>Navigate</button>
    </div>
  )
}

export default Index;
