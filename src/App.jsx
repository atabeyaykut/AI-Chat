import { Route, Routes } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from "./components/Header"
import Login from "./components/pages/Login"
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Chat from './components/pages/Chat'
import Footer from './components/Footer'
import { UserProvider } from './contextAPI/UserContext'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <UserProvider>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
        <Footer />
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
