import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {
  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  const [isHover, setIsHover] = useState(false)

  const baseUrl = 'https://user-crud-app-2p8c.onrender.com'
  const [users, getUser, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUser()
  }, [])
  const handleOpenForm = () => {
    setIsFormClose(false)
  }
console.log(users);
  return (
    <div className='App'>
      <div className='App__container'>
        <h1 className='App__title'>Users</h1>
        <button className='App__btn__Create' onClick={handleOpenForm}>Create new user</button>
      </div>
      <div className={`form__container ${isFormClose && 'form__close'}`}>
        <FormUser
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setIsFormClose={setIsFormClose}
        />
      </div>
      <div className='user__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              setIsFormClose={setIsFormClose}
              setIsHover={setIsHover}
              isHover={isHover}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App