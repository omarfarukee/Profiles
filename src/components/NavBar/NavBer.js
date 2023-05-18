import React, { useState } from 'react';
import pic from '../../images/pngwing.com.png'
import { FaHome, FaProjectDiagram, FaUserCog, FaPhone, FaFilePdf } from 'react-icons/fa';
import {GiSkills } from 'react-icons/gi';
import './NavBer.css'
import { TypeAnimation } from 'react-type-animation';
import Skill from '../skills/Skill';
import Projects from '../Projects/Projects';

const NavBer = () => {

    const [navber, setNavber] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 100){
            setNavber(true)
        }
        else{
            setNavber(false)
        }
    }
     window.addEventListener('scroll', changeBackground)

    const [icon, setIcon] = useState(false)

    const changeIcon = () => {
        if(window.scrollY >= 100){
            setIcon(true)
        }
        else{
            setIcon(false)
        }
    }
    window.addEventListener('scroll', changeIcon)
    const [berPosition, setBerPosition] = useState(false)

    const changeBer = () => {
        if(window.scrollY >= 100){
            setIcon(true)
        }
        else{
            setIcon(false)
        }
    }
    window.addEventListener('scroll', changeBer)
    return (
        <div id='home'>
        <div className='backs-img'>
            <div className={changeBer ? 'active position ': ''}> 
                {/* <div><button className='text-3xl bg-primary rounded p-1 w-40'> omar--</button></div> */}
                <div className={navber ? ' rounded-2xl shadow-2xl h-12 active nav-ber ': 'ber rounded-lg shadow-2xl h-12 border'}>
                    <div className={icon ? 'icons active' : 'icons'}> 
                    {/* flex y-r justify-between p-3 ml-3 mr-3 */}
                       <a href='#home'> <button className='' title='Home'><FaHome className='btn-hov'></FaHome></button></a>
                     <a  href="#sk">  <button className='' title='My Skills'><GiSkills className='btn-hov'></GiSkills></button></a> 
                     <a href='#project'>   <button className='' title='My Projects'><FaProjectDiagram className='btn-hov'></FaProjectDiagram></button></a>
                       <a> <button className='' title='About Me'><FaUserCog className='btn-hov'></FaUserCog></button></a>
                       <a> <button className='' title='My resume'><FaFilePdf className='btn-hov'></FaFilePdf></button></a>
                       <a><button className='' title='Contact me'><FaPhone className='btn-hov'></FaPhone></button></a> 

                    </div>

                </div>
                {/* <div><button className='text-3xl bg-primary rounded p-1 w-40'> Resume</button></div> */}
            </div>

            <div className='mt-32 ml-20'>
                <div className='flex justify-between dev-width'>
                    <div className='first-div ml-28'>
                        <h1 className='text-6xl text-green-500 font-extrabold'>
                            <TypeAnimation
                                sequence={[
                                    'Hello',
                                    1500,
                                    'I am react developer',
                                    1000
                                ]}
                                speed={10} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '1em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                        </h1>
                        <p className='text-white mt-3'>
                            <TypeAnimation
                                sequence={[
                                    "Becoming a good minded developer requires the right intention, hard work and practice. So for almost a long year I was able to identify myself as a Full-Stack web developer by adopting that consistency. I have learned a lot in my journey as a developer and am still learning and will learn in the future.",
                                    1500,
                                    // 'I am react developer',
                                    // 1000
                                ]}
                                speed={75} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '1em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />

                        </p>
                    </div>

                </div>
            </div>

        </div>
            
        </div>
    );
};

export default NavBer;