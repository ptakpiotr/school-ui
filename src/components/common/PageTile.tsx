import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom";
import {AiOutlineLock} from "react-icons/ai";
import { IPageTile } from '../../Types';
import { ExceptionDetailsContext } from '../../App';
import { useTokenValidation } from '../../hooks/useTokenValidation';

type IProps = IPageTile;

function PageTile({icon,polishName,href,locked,additionalStyles}:IProps) {
  const navigate = useNavigate();
  const { setMessage } = useContext(ExceptionDetailsContext);
  const tokenValid = useTokenValidation();

  return (
    <div className={`page-tile ${additionalStyles?additionalStyles:""} ${locked && !tokenValid?"locked":""}`} onClick={()=>{
      if((!locked ||tokenValid) && setMessage){
        setMessage("");
        navigate(href);
      }
    }}>
        {locked && !tokenValid?<div className="page-lock"><AiOutlineLock /></div>:<div className="no-lock"></div>}
        <span className="page-tile-icon">{icon}</span>
        <span className="page-tile-name">{polishName}</span>
    </div>
  )
}

export default PageTile