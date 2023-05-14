import React, { useState } from 'react';
import './Projects.css'
const Projects = () => {
    const [color, setColor] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 200){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div className={color ? 'active projects-backs': 'projects-backs'}>
            <div>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
             <h1 className='text-2xl'>hellooooooo</h1>
            <h1 className='text-2xl'>hellooooooo</h1>
            <h1 className='text-2xl'>hellooooooo</h1>
            </div>
          
            
        </div>
    );
};

export default Projects;