import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom";
import {AiOutlineLock} from "react-icons/ai";
import { IPageTile } from '../../Types';
import { ExceptionDetailsContext } from '../../App';

type IProps = IPageTile;

function PageTile({icon,name,href,locked,additionalStyles}:IProps) {
  const navigate = useNavigate();
  const { setMessage } = useContext(ExceptionDetailsContext);

  return (
    <div className={`page-tile ${additionalStyles?additionalStyles:""} ${locked?"locked":""}`} onClick={()=>{
      if(!locked && setMessage){
        setMessage("");
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