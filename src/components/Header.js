import { useState } from 'react'

function Header({ money }) {
  return (
    <div style={{color: "white"}}>
      Harcamak için {money}$ paranız var.
    </div>
  )
}

export default Header
