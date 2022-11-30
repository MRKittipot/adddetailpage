import React from 'react'
import './logincom.css'

function login() {
  return (
    <div className='allblock'>
        <div>
            <div>
                Login                
            </div>
            <form>
                <label>Name : </label>
                <input type="text"/>
                <label>Password : </label>
                <input type='text'/>
            </form>
        </div>
    </div>
  )
}

export default login