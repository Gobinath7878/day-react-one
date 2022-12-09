import React from 'react'
import "./App.css"

function App() {
  return (
    <div className='container'>

      <div className='card-container'>
        <div className='card-1'>
          <h6 className='head-value'>FREE</h6>
          <h1 className='head-title'>$0<sub className='head-sub'>/month</sub></h1>
          <hr/>
          <ul className='list-items'>
            <li>Single User</li>
            <li>5GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li className='list-mute'>Unlimited Private Projects</li>
            <li className='list-mute'>Dedicated Phone Support</li>
            <li className='list-mute'>Free Subdomain</li>
            <li className='list-mute'>Monthly Status Reports</li>
          </ul>
          <button className='button'>BUTTON</button>
        </div>
      </div>

      <div className='card-container'>
        <div className='card-1'>
          <h6 className='head-value'>PLUS</h6>
          <h1 className='head-title'>$9<sub className='head-sub'>/month</sub></h1>
          <hr className='hrline'/>
          <ul className='list-items'>
            <li>Single User</li>
            <li>5GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li className='list-mute'>Monthly Status Reports</li>
          </ul>
          <button className='button'>BUTTON</button>

        </div>
      </div>

      <div className='card-container'>
        <div className='card-1'>
          <h6 className='head-value'>PRO</h6>
          <h1 className='head-title'>$49<sub className='head-sub'>/month</sub></h1>
          <hr/>
          <ul className='list-items'>
            <li>Single User</li>
            <li>5GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li><b>Unlimited</b> Free Subdomain</li>
            <li>Monthly Status Reports</li>
          </ul>
          <button className='button'>BUTTON</button>

        </div>
      </div>

    </div>
  )
}

export default App