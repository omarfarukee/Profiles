import React from 'react';
import { FaHome,FaProjectDiagram,FaUserCog,FaPhone } from 'react-icons/fa';
import './NavBer.css'
import { TypeAnimation } from 'react-type-animation';
const NavBer = () => {
    return (
        <div className='backs-img'>
        <div className='flex justify-between p-3  border'>
            <div><button className='text-3xl bg-primary rounded p-1 w-40'> omar--</button></div>
            <div className=' w-96 rounded-2xl shadow-2xl h-12 bg-white'>
                <div className='flex justify-between p-3 ml-3 mr-3'>
                    <button className='' title='Home'><FaHome className='btn-hov'></FaHome></button>
                    <button className='' title='My Projects'><FaProjectDiagram className='btn-hov'></FaProjectDiagram></button>
                    <button className='' title='About Me'><FaUserCog className='btn-hov'></FaUserCog></button>
                    <button className='' title='Contact me'><FaPhone className='btn-hov'></FaPhone></button>
                </div>

            </div>
            <div><button className='text-3xl bg-primary rounded p-1 w-40'> Resume</button></div>
        </div>

            <div>
                <h1 className='text-3xl text-white'>
                <TypeAnimation
                                sequence={[
                                    'Hello hiiiii',
                                    1500,
                                    'I am react develoiper',
                                    1000
                                ]}
                                speed={10} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '1em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                
                </h1>
            </div>

        </div>
    );
};

export default NavBer;