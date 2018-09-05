import React from 'react'
import logo from '../../utils/images/emailicon.png'

const Landing = () => {
  return (
    <main className='layout'>
      <div className="opacity">
        <div className="container">
          <div className="title">
            <img src={logo} alt="logo image"/>
            <h1> Welcome to the MailMaker Application!</h1>
            <h2> Create your own email campaign and analyse the result of your audiency</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing
