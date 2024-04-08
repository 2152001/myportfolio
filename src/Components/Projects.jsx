import React, { useState } from 'react'

export default function Projects() {
    const [project1, setproject1] = useState(false)
    const [project2, setproject2] = useState(false)
    const [project3, setproject3] = useState(false)
    return (
        <div className='w-full h-[40rem] flex justify-center items-center bg-gradient-to-r from-black to-black'>
            <div className='w-[90%] h-[90%] gradient-border flex justify-center items-center '>
                <div className=' h-[50%] w-[60%]  flex items-center justify-center text-white '>
                    <div className='flex-row items-center justify-center w-[80%] h-[60%]'>
                        {
                            project1 ?
                                (
                                    <div>
                                        <div className=' pb-2 text-lg font-bold'> E-Commmerce</div>
                                        <div className='w-[60%] h-[60%] double-border3'>
                                            <div className='pl-3'>
                                                Led the development of an innovative e-commerce platform
                                                leveraging Node.js and MongoDB to deliver a scalable and
                                                high-performance solution. This project aimed to provide users
                                                with a seamless shopping experience while ensuring efficient
                                                management of product listings, orders, and customer data.
                                            </div>
                                        </div>
                                    </div>
                                )
                                : project2 ? (
                                    <div>
                                        <div className=' pb-2 text-lg font-bold'> Software Tool (SAST)</div>
                                        <div className='w-[60%] h-[60%] double-border3'>
                                            <div className='pl-3'>
                                                SAST tool is designed to be integrated into the software
                                                development lifecycle at the earliest stages to provide
                                                awareness and training for uneducated or unaware
                                                developers to mitigate the risk of deploying vulnerable
                                                solutions.
                                            </div>
                                        </div>
                                    </div>
                                ) : project3 ? (
                                    <div>
                                        <div className=' pb-2 text-lg font-bold'> Management System</div>
                                        <div className='w-[60%] h-[60%] double-border3'>
                                            <div className='pl-3'>
                                                system that has generic functionality to manage
                                                stores, fairs, hypermarkets or any other commercial
                                                organization. Java is the main technology to build the
                                                project .
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className=' flex flex-col animate-typing overflow-hidden whitespace-nowrap  text-[8rem] text-white font-bold pb-2'>
                                            <div> WELCOME...</div>
                                            <div className='w-[40%] h-[60%] double-border3'></div>
                                        </div>
                                    </div>
                                )

                        }
                    </div>
                </div>
                <div className=' h-[70%] w-[30%] flex justify-center items-center'>
                    <div className=' w-[80%] h-[80%] flex-row double-border2 '>
                        <div className='text-white font-extrabold text-2xl pb-2' onClick={() => {
                            console.log(project1, project2)
                        }} >
                            Projects:
                        </div>
                        <div className=' double-border w-[60%] h-[40%] flex-row items-center pl-2 pt-3'>
                            <div className='text-white  cursor-pointer underline-text pb-1 hover:bg-gray-400' on onClick={() => {
                                setproject1(true)
                                setproject2(false)
                                setproject3(false)
                            }}>E-Commmerce Website</div>
                            <div className='text-white cursor-pointer underline-text pb-1 mt-3 hover:bg-gray-400' on onClick={() => {
                                setproject2(true)
                                setproject1(false)
                                setproject3(false)
                            }}>Software tool (SAST)</div>
                            <div className='text-white  cursor-pointer underline-text pb-1 mt-3 hover:bg-gray-400' on onClick={() => {
                                setproject1(false)
                                setproject2(false)
                                setproject3(true)
                            }}>Management System</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
