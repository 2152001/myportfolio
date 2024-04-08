import React from 'react'
import Nav from './Nav'

export default function Home() {
    return (
        <div style={{ backgroundImage: `url('../../public/Home.jpg')` }} className="flex flex-col justify-start  items-end  h-[50rem] w-full text-white bg-cover bg-center ">
            <div className='w-full h-[30%] flex flex-col justify-center items-center'>
                <div className='text-[3rem] font-bold mt-[2rem]'>I'm Toka Abdelgawad</div>
                <div className=' flex flex-col justify-center items-center w-[16rem] h-[100%] '>
                    <div className=' flex flex-col animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl text-white font-bold'>
                        <div> Web developer...</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
