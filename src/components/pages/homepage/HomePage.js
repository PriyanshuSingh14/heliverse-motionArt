import React from 'react'
import Header from './Header'
import Description from './Description'

const HomePage = () => {
  return (
    <div>
        <div className='md:mx-28 mx-2 my-8 flex flex-col md:flex-column '>
        <Header/>
        <Description/>
        </div>
    </div>
  )
}

export default HomePage