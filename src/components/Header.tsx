import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineCreditCard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";


const Header = () => {
  return (
    <div className='flex bg-white justify-between items-center rounded-2xl mt-3 px-4 w-300 mx-auto'>
        <div>
            <img src="../../Images/logo.png" alt="logo image" />
        </div>
        <div>
            <ul className='p-0 flex gap-2'>
                <li className='flex items-center gap-1 '><GrHomeRounded /> Home</li>
                <li className='flex items-center gap-1 '><HiOutlineUsers /> Patients</li>
                <li className='flex items-center gap-1 '><MdOutlineCalendarToday /> Schedule</li>
                <li className='flex items-center gap-1 '><FiMessageSquare /> Message</li>
                <li className='flex items-center gap-1 '><MdOutlineCreditCard /> Transactions</li>
            </ul>
        </div>

        <div className='flex items-center'>
            <div>
                <img src="../../Images/avatar.png" className='w-10' alt="" />
            </div>
            <div className="">
                <p>Dr. Jones Simons</p>
                <p>General Practinioners</p>
            </div>
            <p>|</p>
            <IoSettingsOutline />
            <BsThreeDotsVertical />

        </div>
    </div>
  )
}

export default Header