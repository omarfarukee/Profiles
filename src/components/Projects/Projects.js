import React, { useEffect, useState } from 'react';
import './Projects.css'
import { FaEye, FaGithub } from 'react-icons/fa';
const Projects = () => {

    const [giveClass, setGiveClass] = useState('mt-10 grid grid-cols-3 gap-4 w-4/5')
    const [giveClass2, setGiveClass2] = useState('hidden mt-10 grid grid-cols-3 gap-4 w-4/5')
    const [giveClass3, setGiveClass3] = useState('hidden mt-10 grid grid-cols-3 gap-4 w-4/5')

    const AddHidden1 = () => {
        setGiveClass('mt-10 grid grid-cols-3 gap-4 w-4/5')
        setGiveClass2('hidden')
        setGiveClass3('hidden')

    }
    const AddHidden2 = () => {
        setGiveClass('hidden')
        setGiveClass2('mt-10 grid grid-cols-3 gap-4 w-4/5')
        setGiveClass3('hidden')
    }
    const AddHidden3 = () => {
        setGiveClass('hidden')
        setGiveClass2('hidden')
        setGiveClass3('mt-10 grid grid-cols-3 gap-4 w-4/5')
    }

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('allData.json')
            .then(response => response.json())
            .then(data => setAllData(data))
            .catch(error => console.error(error));
    }, []);
    const [reactData, setReactData] = useState([]);

    useEffect(() => {
        fetch('reactData.json')
            .then(response => response.json())
            .then(data => setReactData(data))
            .catch(error => console.error(error));
    }, []);
    const [frontendData, setFrontendData] = useState([]);

    useEffect(() => {
        fetch('frontend.json')
            .then(response => response.json())
            .then(data => setFrontendData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='project-contain p-10' id='project' data-background='red'>
            <div className='flex justify-center mt-8 mb-5'>
                <h1 className='text-3xl font-bold'>My Projects</h1>
            </div>

            <div className='flex justify-center'>
                <div className="btn-group">
                    <input type="radio" onClick={AddHidden1} name="options" data-title="All Projects" className="btn" />
                    <input type="radio" onClick={AddHidden2} name="options" data-title="Full-Stack " className="btn" />
                    <input type="radio" onClick={AddHidden3} name="options" data-title="Front-end " className="btn" />
                </div>
            </div>
            {/* for all data load  */}
            <div className='flex justify-center'>
                <div className={giveClass}>
                    {
                        allData.map(all =>
                            <div className='border rounded-2xl shadow-2xl'>
                                <div class="card ">
                                    <div class="card-image">
                                        <img src={all.image} alt="Card Image" />
                                        <img src={all.image2} alt="Card Image" />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='font-bold text-green-400 text-2xl '><h1>{all.name}</h1></div>
                                </div>
                                <div className='flex justify-around p-3'>
                                    <button className="btn btn-secondary"><a href={all.liveSite} target='_'><span className='flex'><FaEye className='mr-2'></FaEye> Click here</span> </a></button>
                                    <button className="btn btn-secondary"><a href={all.client} target='_'><span className='flex'><FaGithub className='mr-2'></FaGithub> Click here</span> </a></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* just react data load */}
            <div className='flex justify-center'>
                <div className={giveClass2}>
                {
                        reactData.map(reacts =>
                            <div className='border rounded-2xl shadow-2xl'>
                                <div class="card ">
                                    <div class="card-image">
                                        <img src={reacts.image} alt="Card Image" />
                                        <img src={reacts.image2} alt="Card Image" />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='font-bold text-green-400 text-2xl '><h1>{reacts.name}</h1></div>
                                </div>
                                <div className='flex justify-around p-3'>
                                    <button className="btn btn-secondary"><a href={reacts.liveSite} target='_'><span className='flex'><FaEye className='mr-2'></FaEye> Click here</span> </a></button>
                                    <button className="btn btn-secondary"><a href={reacts.client} target='_'><span className='flex'><FaGithub className='mr-2'></FaGithub> Click here</span> </a></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* just frontend data load */}
            <div className='flex justify-center  mb-12'>
                <div className={giveClass3}>
                {
                        frontendData.map(frontend =>
                            <div className='border rounded-2xl shadow-2xl'>
                                <div class="card ">
                                    <div class="card-image">
                                        <img src={frontend.image} alt="Card Image" />
                                        <img src={frontend.image2} alt="Card Image" />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='font-bold text-green-400 text-2xl '><h1>{frontend.name}</h1></div>
                                </div>
                                <div className='flex justify-around p-3'>
                                    <button className="btn btn-secondary"><a href={frontend.liveSite} target='_'><span className='flex'><FaEye className='mr-2'></FaEye> Click here</span> </a></button>
                                    <button className="btn btn-secondary"><a href={frontend.client} target='_'><span className='flex'><FaGithub className='mr-2'></FaGithub> Click here</span> </a></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;