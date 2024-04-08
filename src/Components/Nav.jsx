import React from 'react'


export default function Nav() {
    return (
        <div className='flex flex-row justify-between items-center bg-black h-[5rem] w-full  text-white cursor-pointer '>
            <div className='ml-[15rem]'>Devfolio</div>
            <div className='flex flex-row'>
                <div className='mr-[3rem] hover:bg-gray-400'>Home</div>
                <div className='mr-[3rem] hover:bg-gray-400'>About</div>
                <div className='mr-[3rem] hover:bg-gray-400'>Projects</div>
                <div className='mr-[15rem] hover:bg-gray-400'>Contact</div>
            </div>
        </div>
    )
}
