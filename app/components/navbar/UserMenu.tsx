"use client";
import { useState } from 'react'
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi"
import UserMenuItem from './UserMenuItem';


const UserMenu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div onClick={() => setOpenMenu(!openMenu)} className='relative flex items-center gap-2 cursor-pointer'>
            <GiHamburgerMenu size={25} />
            <Image
                src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
                alt=''
                width={40}
                height={40}
                className='rounded-full'
            />
            {
                openMenu && (

                    <div className='absolute bg-white shadow-lg shadow-gray-500 w-[150px] top-16 right-0'>
                        {

                            <>
                                <UserMenuItem
                                    name="Sign In"
                                    onClick={() => { }}
                                />
                                <UserMenuItem
                                    name="Sign Up"
                                    onClick={() => { }}
                                />
                            </>


                        }
                    </div>
                )
            }
        </div>
    )
}

export default UserMenu