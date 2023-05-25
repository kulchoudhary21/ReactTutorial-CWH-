import React from 'react'
import Login from '../authentication/Login'

function Header({name,change}) {
  return (
    <div>
        <Login name={name} change={change}/>
    </div>
  )
}

export default Header