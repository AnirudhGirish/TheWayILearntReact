import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentiaction=true,}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state.auth.status)

    useEffect(() => {
      if(authentiaction && authStatus !== authentiaction){
            navigate('/login')
      }
      else if(!authentiaction && authStatus !== authentiaction){
            navigate('/')
      }
      setLoader(false)
    }, [navigate,authStatus,authentiaction])
    
  return loader? <h1>Loading . . . . </h1> : <>{children}</>
}