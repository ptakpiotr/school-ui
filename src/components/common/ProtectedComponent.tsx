import axios from 'axios';
import React,{PropsWithChildren,useEffect, useState} from 'react'

function ProtectedComponent({children}:PropsWithChildren) {
    const [tokenValid,setTokenValid] = useState<boolean>(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            axios.post(`${process.env.REACT_APP_BACKEND_URL}User/verifyJWT`,{
                token
            }).then((dt)=>{
                if(dt.status === 200){
                    setTokenValid(true);
                }
            }).catch((_)=>{

            });
        }
    });
    if(tokenValid){
        return(<>{children}</>);
    }else{
        return(<>Drogi Użytkowniku, nie posiadasz wystarczających poświadczeń, aby uzyskać dostęp do tej strony.</>);
    }
}

export default ProtectedComponent