import React, { useEffect, useState } from 'react';

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

    return (
        <div>
            <div className='flex justify-center mt-8 mb-5'>
                <h1 className='text-3xl font-bold'>My Projects</h1>
            </div>

            <div className='flex justify-center'>
                <div className="btn-group">
                    <input type="radio" onClick={AddHidden1} name="options" data-title="All Projects" className="btn" />
                    <input type="radio" onClick={AddHidden2} name="options" data-title="Full-Stack Projects" className="btn" />
                    <input type="radio" name="options" data-title="Front-end Projects" className="btn" />
                </div>
            </div>
            {/* for all data load  */}
            <div className='flex justify-center mt-10 mb-12'>
                <div className={giveClass}>
                    {
                        allData.map(all => <div className='shadow-xl rounded-lg'>

                            <img className='w-36 ml-20' src={all.image} alt="" />
                            <h2>{all.name}</h2>
                        </div>)
                    }
                </div>
            </div>
            {/* just react data load */} 
            <div className='flex justify-center mt-10 mb-12'>
                <div className={giveClass2}>
                    {
                        reactData.map(react => <div className='shadow-xl rounded-lg'>

                            <img className='w-36 ml-20' src={react.image} alt="" />
                            <h2>{react.name}</h2>
                        </div>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Projects;