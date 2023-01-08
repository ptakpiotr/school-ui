import React from 'react'
import {useNavigate} from "react-router-dom";
import {AiOutlineLock} from "react-icons/ai";
import { IPageTile } from '../../Types';

type IProps = IPageTile;

function PageTile({icon,name,href,locked,additionalStyles}:IProps) {
  const navigate = useNavigate();
  return (
    <div className={`page-tile ${additionalStyles?additionalStyles:""} ${locked?"locked":""}`} onClick={()=>{
      if(!locked){
        navigate(href);
      }
    }}>
        {locked?<div className="page-lock"><AiOutlineLock /></div>:<div className="no-lock"></div>}
        <span className="page-tile-icon">{icon}</span>
        <span className="page-tile-name">{name}</span>
    </div>
  )
}

export default PageTile