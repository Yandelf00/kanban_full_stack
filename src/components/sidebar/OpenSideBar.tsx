import React from 'react'
import Switch from './Switch'
import ControlSidebar from './ControlSidebar'
export default function OpenSideBar() {
  return (
    <>
        <div className='h-full w-[270px]'></div>
        <div className='bg-whiteprime dark:bg-blackprime fixed bottom-0
        left-0 top-[85px] w-[270px] flex flex-col justify-between'>
            <div className='w-[270px] h-[100px] mt-7'>
                ALL BOARDS
            </div>



            <div className='w-[270px] space-y-4 h-[100px] mb-10 '>
                <Switch/>
                <ControlSidebar/>
            </div>
        </div>
    </>
  )
}
