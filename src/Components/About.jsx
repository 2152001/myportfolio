import React from 'react'
import Progressbar from './Progressbar'

export default function About() {
    return (
        <div className=' flex justify-center items-center w-full h-[60rem]'>
            <div className=' flex flex-row justify-between items-center w-[70%] h-[70%] border rounded-3xl border-slate-400'>
                <div className=' h-full w-[50%] flex flex-col justify-center items-center'>
                    <div className=' h-[50%] w-[100%] flex flex-row items-center justify-center '>
                        <div style={{ backgroundImage: `url('../../Toka.jpg')` }} className='border rounded-lg  w-[25%] h-[50%] bg-cover bg-center'>
                        </div>
                        <div className='flex flex-col  w-[40%] h-[50%] ml-[3rem] justify-center text-black '>
                            <div className='flex flex-row'>
                                <div className='font-bold mb-[1rem]'>Name:</div>
                                <div className='mb-[1rem] ml-[0.3rem]'>Toka Abdelgawad</div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='font-bold mb-[1rem]'>Profile:</div>
                                <div className='mb-[1rem] ml-[0.3rem]'>FullStack developer</div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='font-bold mb-[1rem]'>Email:</div>
                                <div className='mb-[1rem] ml-[0.3rem]'>tokaabdelgawad60@gmail.com</div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='font-bold mb-[1rem]'>Phone:</div>
                                <div className='mb-[1rem] ml-[0.3rem]'>01140219810</div>
                            </div>

                        </div>
                    </div>
                    <div className='h-[50%] w-[100%] flex flex-col ml-[12rem]'>
                        <div className='font-bold text-black'> My Skills:</div>
                        <div className='flex flex-col '>
                            <div className='text-black mt-[2rem] mb-[0.5rem]'>JAVASCRIPT</div>
                            <Progressbar bgcolor={"#4F4F4F"} completed={95}></Progressbar>
                            <div className='text-black mt-[2rem] mb-[0.5rem]'>React</div>
                            <Progressbar bgcolor={"#4F4F4F"} completed={80}></Progressbar>
                        </div>
                    </div>
                </div>
                <div className=' h-full w-[50%] flex justify-center items-center'>
                    <div className='w-[80%] h-[80%] justify-start flex flex-col'>
                        <div className='text-3xl font-bold underline mb-[2rem]'>About me</div>
                        <div className='text-xl mb-[2rem] overflow-hidden'>
                            As  backend developer, I provide significant experience and skill in developing robust and efficient solutions that serve as the foundation for online applications.
                            With an excellent background in programming languages like  Java and Node.js,
                            I focus on designing scalable and dependable systems that are suited to the specific requirements of each project.
                        </div>
                        <div className='text-xl mb-[2rem] overflow-hidden'>
                            Driven by my passion for software development,
                            I am dedicated to remaining current on cutting-edge technologies and best practices in the ever-changing field of backend development.
                            I am continually looking for ways to extend my learning and perfect my abilities,
                            ensuring that I am prepared to face the difficulties of tomorrow's initiatives.
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
