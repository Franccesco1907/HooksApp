import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
          <h1>MainApp</h1>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a> */}
          {/* <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link> */}
          <NavBar />
          <hr />

          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='login' element={<LoginPage />}/>
            <Route path='about' element={<AboutPage />}/>
            
            {/* <Route path='/*' element={<LoginPage />}/> */}
            <Route path='/*' element={<Navigate to='login'/>}/>
          </Routes>
        </UserProvider>
    )
}