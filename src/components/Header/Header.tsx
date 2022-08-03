import React from 'react'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import UserProfile from '../UserProfile/UserProfile'

const Header = () => {
    return (
        <header style={{ gridArea: 'main-view' }} className='w-full h-16 absolute flex justify-between px-8 py-4 bg-black z-20'>
            <div className='flex justify-between items-center gap-4'>
                <ChevronLeft size={32} />
                <ChevronRight size={32} />
            </div>
            <UserProfile />
        </header>
    )
}

export default Header