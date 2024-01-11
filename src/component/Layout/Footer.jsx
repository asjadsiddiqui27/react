import React from 'react'

export default function Footer() {
    let styles={
        backgroundColor : "rgba(0, 0, 0, 0.05)"
    }

  return (
    <div className='mt-4'>

<footer className="bg-body-tertiary text-center text-lg-start">

  <div className="text-center p-3 footer" style={styles}>
  
    © 2023 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">react.com</a>
  </div>

</footer>

    </div>
  )
}
