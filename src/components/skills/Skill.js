import React from 'react';
import pic1 from '../../images/pngwing.com.png'
import pic2 from '../../images/css.png'
import pic3 from '../../images/js.png'
import pic4 from '../../images/boot.png'
import pic5 from '../../images/Tailwind-img.png'
import pic6 from '../../images/react.png'
import pic7 from '../../images/mongodb-logo.png'
import pic8 from '../../images/fire.png'
import pic9 from '../../images/mode.png'
import pic10 from '../../images/express.png'
import './Skill.css'

const Skill = () => {


    return (
        <div className='mb-10'>
            <div className='flex justify-center mt-8 mb-5'>
                <h1 className='text-3xl font-bold'>My Skills</h1>
            </div>
            <div className='flex justify-evenly'>
                <div className='grid grid-cols-3 gap-4'>
                    <div>
                        <img className='w-36 ml-20 image-container1' src={pic1} alt="" />
                        <div class="skill_bar w-80  p-3 shadow-xl rounded-md">


                            <div class="info flex justify-between">
                                <p className='font-bold'>HTML</p>
                                <p className='font-bold'>98%</p>
                            </div>
                            <div class="bar">
                                <span class="html"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='w-36 ml-20 image-container2' src={pic2} alt="" />

                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>CSS</p>
                                <p className='font-bold'>90%</p>
                            </div>
                            <div class="bar">
                                <span class="css"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='w-36 ml-20 image-container3 bottom-' src={pic3} alt="" />
                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>Java-Script</p>
                                <p className='font-bold'>85%</p>
                            </div>
                            <div class="bar">
                                <span class="js"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='w-36 ml-20 image-container4' src={pic5} alt="" />
                        <div class="skill_bar w-80  p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between ">
                                <p className='font-bold'>TailWind</p>
                                <p className='font-bold'>90%</p>
                            </div>
                            <div class="bar">
                                <span class="tail"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='w-36 ml-20 image-container5' src={pic4} alt="" />
                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>Bootstrap</p>
                                <p className='font-bold'>90%</p>
                            </div>
                            <div class="bar">
                                <span class="boot"></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-36 ml-20 image-container-degree' src={pic6} alt="" />
                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>React</p>
                                <p className='font-bold'>92%</p>
                            </div>
                            <div class="bar">
                                <span class="react"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='w-36 ml-20 image-container3' src={pic7} alt="" />
                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>MongoDB</p>
                                <p className='font-bold'>85%</p>
                            </div>
                            <div class="bar">
                                <span class="mongo"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className=' w-60  h-40 ml-10 image-container2 mt-2' src={pic8} alt="" />
                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>Firebase</p>
                                <p className='font-bold'>90%</p>
                            </div>
                            <div class="bar">
                                <span class="fire"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className=' w-36 ml-20 image-container1 mt-6' src={pic9} alt="" />
                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>Node.js</p>
                                <p className='font-bold'>85%</p>
                            </div>
                            <div class="bar">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className=' w-36 ml-20 image-container3 mt-6' src={pic10} alt="" />
                        <div class="skill_bar w-80  p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>Daisy UI</p>
                                <p className='font-bold'>95%</p>
                            </div>
                            <div class="bar">
                                <span class="ui"></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className=' w-36 ml-20 image-container2 mt-6' src={pic10} alt="" />
                        <div class="skill_bar w-80 p-3 shadow-xl rounded-md">
                            <div class="info flex justify-between">
                                <p className='font-bold'>Express.js</p>
                                <p className='font-bold'>85%</p>
                            </div>
                            <div class="bar">
                                <span class="express"></span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Skill;