import { useEffect, useState } from 'react'
import {login,logout} from './store/authSlice'
import {useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import authService from './appwrite/auth'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-zinc-600'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):(null)
}

export default App
