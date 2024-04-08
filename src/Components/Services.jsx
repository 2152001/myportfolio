import React from 'react'

export default function Services() {
    return (
        <div className=' w-full h-[50rem] flex flex-col justify-center items-center'>
            <div className='font-bold text-[5rem]'>Services...</div>
            <div className='flex flex-row justify-between items-center h-[80%] w-[70%]'>
                <div className='border w-[25%] h-[50%] flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center w-full h-full box'>
                        <img src='../../public/digital-services.png' className='w-[7rem] h-[7rem] mb-[1rem]'></img>
                        <div className='font-bold text-xl'>End-to-End <br></br> development</div>
                    </div>
                </div>
                <div className='border w-[25%] h-[50%] flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center w-full h-full box'>
                        <img src='../../public/coding.png' className='w-[7rem] h-[7rem] mb-[1rem]'></img>
                        <div className='font-bold text-xl text-center'>API development<br></br> & <br></br> Integration</div>
                    </div>
                </div>
                <div className='border w-[25%] h-[50%] flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center w-full h-full box'>
                        <img src='../../public/web-services.png' className='w-[7rem] h-[7rem] mb-[1rem]'></img>
                        <div className='font-bold text-xl text-center'>Depolyment<br></br>  & <br></br>Maintenance</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
