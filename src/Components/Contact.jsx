import React from 'react'

export default function Contact() {
    const phoneNumber = '01140219810'
    const message = 'Hello!'
    return (
        <div className='w-full h-[50rem] flex justify-center items-center'>
            <div className='w-[70%] h-[60%] bg-white border rounded-xl gradient-border2 '>
                <div className='flex flex-col justify-center items-center h-[40%] '>
                    <div className='text-black text-3xl font-bold underline-text mt-4'>Get in touch</div>
                    <div className='flex mt-[2rem] justify-between items-center  w-[30rem] h-[15rem]'>
                        <div className='flex '>
                            <img src='google-contacts.png' className='w-[1.5rem] h-[1.5rem]'></img>
                            <div className='text-black ml-[0.5rem]'>+021143004036</div>
                        </div>
                        <a href='mailto:tokaabdelgawad60@gmail.com?subject=Subject%20Here&body=Body%20Here' className='flex'>
                            <img src='gmail.png' className='w-[1.5rem] h-[1.5rem]'></img>
                            <div className='text-black ml-[0.5rem]'>tokaabdelgawad0@gmail.com</div>
                        </a>
                    </div>
                    <div className=' w-[30rem] h-[15rem] flex justify-between items-center mt-4 '>
                        <a href='https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}' className='flex'>
                            <img src='whatsapp.png' className='w-[1.5rem] h-[1.5rem]'></img>
                            <div className='text-black ml-[0.5rem]'>+021140219810</div>
                        </a>
                        <a href='https://drive.google.com/file/d/1LIfkYYa-LO3jhITxga4phJ8JknQNSiLO/view?usp=sharing' className='flex w-[15.5rem]'>
                            <img src='resume.png' className='w-[1.5rem] h-[1.5rem]'></img>
                            <div className='text-black ml-[0.5rem]'>My Resume</div>
                        </a>
                    </div>
                    <div className=' w-[30rem] h-[15rem] flex justify-start items-center  mt-4'>
                        <div className='flex '>
                            <img src='location.png' className='w-[1.5rem] h-[1.5rem]'></img>
                            <div className='text-black ml-[0.5rem]'>Giza</div>
                        </div>
                    </div>
                </div>
                <div className=' h-[60%] w-full flex justify-center items-center '>
                    <a href='https://github.com/2152001'>
                        <img src='github.png' className='w-[5rem] h-[5rem]'></img>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100005282657952&mibextid=ZbWKwL'>
                        <img src='facebook.png' className='w-[5.3rem] h-[5.3rem] ml-[2rem]'></img>
                    </a>
                    <a href='https://www.instagram.com/toka_abdelgawad?igsh=ZHVhZTNzbnlvYmNq'>
                        <img src='instagram.png' className='w-[5.3rem] h-[5.3rem] ml-[2rem]'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/toka-abdelgawad-b3b389200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                        <img src='linkedin.png' className='w-[5.3rem] h-[5.3rem] ml-[2rem]'></img>
                    </a>
                </div>


            </div>

        </div>
    )
}
