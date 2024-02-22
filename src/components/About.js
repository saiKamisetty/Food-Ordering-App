import React from 'react'
import UserClass from './UserClass';

const About = () => {
  return (
    <div className='m-3 bg-slate-200'>
        <h1 className='text-lg font-bold'>This is my About Component</h1>
        <UserClass Name={"SAI KUMAR"}/>
    </div>
  )
};

export default About
