import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import Link from 'next/link';
export default function SideBar() {
    return (
        <div className='flex flex-col items-start justify-between h-screen bg-slate-200 w-fit px-1'>
            <div className='flex items-center flex-col space-y-1'>
                <div className='sidebarIcons'>
                    <ChatIcon className='icon' />
                </div>
                <div className='sidebarIcons'>
                    <CallIcon className='icon' />
                </div>
                <div className='sidebarIcons'>
                    <AutoModeIcon className='icon' />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <Link href="starredMessages" className='sidebarIcons'>
                    <StarBorderIcon className='icon' />
                </Link>
                <Link href="archives" className='sidebarIcons'>
                    <ArchiveIcon className='icon' />
                </Link>
                <div className='sidebarIcons'>
                    <SettingsIcon className='icon' />
                </div>
                <div className='sidebarIcons'>
                    <AccountCircleIcon className='icon' />
                </div>
            </div>
        </div>
    )
}
