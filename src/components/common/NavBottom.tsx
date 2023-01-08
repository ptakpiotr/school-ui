import React, { useState } from 'react'
import PageTile from './PageTile'
import {AiFillHome,AiFillContacts,AiFillAccountBook,AiOutlineDesktop,AiOutlineNumber,AiFillTool,AiFillCreditCard,AiFillSchedule,AiOutlineLaptop,AiFillBook} from "react-icons/ai"
import {BsPersonCircle} from "react-icons/bs";
import { IPageTile } from '../../Types'
function NavBottom() {
    const [pages,setPages] = useState<IPageTile[]>([
        {
            href:"/",
            icon:<AiFillHome />,
            name:"Home",
            locked:false
        },
        {
            href:"/about",
            icon:<AiFillContacts />,
            name:"About",
            locked:false
        },
        {
            href:"/attendance",
            icon:<AiFillAccountBook />,
            name:"Attendance",
            locked:false
        },
        {
            href:"/class",
            icon:<AiOutlineDesktop />,
            name:"Class",
            locked:false
        },
        {
            href:"/grade",
            icon:<AiOutlineNumber />,
            name:"Grade",
            locked:false
        },
        {
            href:"/misc",
            icon:<AiFillTool />,
            name:"Misc",
            locked:false
        },
        {
            href:"/payment",
            icon:<AiFillCreditCard />,
            name:"Payment",
            locked:false
        },
        {
            href:"/schedule",
            icon:<AiFillSchedule />,
            name:"Schedule",
            locked:false
        },
        {
            href:"/student",
            icon:<AiFillBook />,
            name:"Student",
            locked:false
        },
        {
            href:"/subject",
            icon:<AiOutlineLaptop />,
            name:"Subject",
            locked:false
        },
        {
            href:"/teacher",
            icon:<BsPersonCircle />,
            name:"Teacher",
            locked:false
        }
    ]);
  return (
    <nav>
        {pages.map(p=>(<PageTile key={`page-tile-${p.name}`} {...p} />))}
    </nav>
  )
}

export default NavBottom