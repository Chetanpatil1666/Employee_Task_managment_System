import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if (loggedInUser) {
        const stored = JSON.parse(loggedInUser)
        setUser(stored.role)
        setLoggedInUserData(stored.data)
      }
    } catch {
      localStorage.removeItem('loggedInUser')
    }
  }, [])

  useEffect(() => {
    if (user === 'employee' && loggedInUserData && userData) {
      const current = userData.find((e) => e.email === loggedInUserData.email)
      if (current) {
        setLoggedInUserData(current)
      }
    }
  }, [userData, user])

  const handleLogin = (email, password) => {
    if ((email === 'admin@me.com' || email === 'admin@example.com') && password === '123') {
      setUser('admin')
      setLoggedInUserData(null)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App