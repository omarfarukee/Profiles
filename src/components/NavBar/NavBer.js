import React, { useState } from 'react';
import { FaHome, FaProjectDiagram, FaUserCog, FaPhone, FaFilePdf } from 'react-icons/fa';
import './NavBer.css'
import { TypeAnimation } from 'react-type-animation';
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
    return (
        <div className='backs-img'>
            <div className='flex justify-center p-3'> 
                {/* <div><button className='text-3xl bg-primary rounded p-1 w-40'> omar--</button></div> */}
                <div className={navber ? 'ber rounded-2xl shadow-2xl h-12 active nav-ber': 'ber rounded-2xl shadow-2xl h-12 border'}>
                    <div className='flex justify-between p-3 ml-3 mr-3'>
                        <button className='' title='Home'><FaHome className='btn-hov'></FaHome></button>
                        <button className='' title='My Projects'><FaProjectDiagram className='btn-hov'></FaProjectDiagram></button>
                        <button className='' title='About Me'><FaUserCog className='btn-hov'></FaUserCog></button>
                        <button className='' title='My resume'><FaFilePdf className='btn-hov'></FaFilePdf></button>
                        <button className='' title='Contact me'><FaPhone className='btn-hov'></FaPhone></button>

                    </div>

                </div>
                {/* <div><button className='text-3xl bg-primary rounded p-1 w-40'> Resume</button></div> */}
            </div>


            <div className='flex justify-center mt-36'>
                <div className='flex justify-between dev-width'>
                    <div className='first-div'>
                        <h1 className='text-3xl text-green-500 font-extrabold text-white'>
                            <TypeAnimation
                                sequence={[
                                    'Hello hiiiii',
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
                                    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
                                    1500,
                                    // 'I am react developer',
                                    // 1000
                                ]}
                                speed={10} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '1em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />

                        </p>
                    </div>
                    <div className='first-div'>
                        <h1 className='text-3xl font-bold text-green-500 text-white'>
                            <TypeAnimation
                                sequence={[
                                    'Hello hiiiii',
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
                                    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
                                    1500,
                                    // 'I am react developer',
                                    // 1000
                                ]}
                                speed={10} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '1em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />

                        </p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default NavBer;