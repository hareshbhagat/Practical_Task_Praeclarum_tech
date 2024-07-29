import { Navigate, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'


export default function MainPage() {
const Navigate = useNavigate();


  return (
    <>
    <div className="centered-container">
      <div className="button-container">
      <button onClick={() => Navigate('/Task')} className="nav-button">
        Add Forms
      </button>
      <button onClick={() => Navigate('/ShowList')} className="nav-button">
        Show List
      </button>
    </div>
    </div>

    </>
  )
}
