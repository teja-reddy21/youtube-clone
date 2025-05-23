import React from 'react'
import './home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
const Home = ({sidebar}) => {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default Home