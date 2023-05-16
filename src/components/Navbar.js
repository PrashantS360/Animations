import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-8 px-8 bg-none sticky top-0'>
            <div className='w-12 rounded-full px-2.5'>
                <img src="/logo.png" className='invert-[1] mt-2' alt="logo" />
            </div>
            <button className='py-2 px-6 font-[600] rounded-md text-xl text-black bg-white'>
                Join Beta
            </button>
        </nav>
    )
}

export default Navbar