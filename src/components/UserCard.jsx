import './styles/UserCard.css'
const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose }) => {
const handleDelete = () => {
    deleteUser(user.id)
}

const handleEdit = () => {
    setUserUpdate(user)
    setIsFormClose(false)
}


    return (
        <article className='user'>
            <h2 className='user__title'>{user.first_name} {user.last_name}</h2>
            <hr className='user__hr'/>
            <ul className='user__list'>
                <li className='user__item'>
                    <span className='user__label'>Email</span>
                    <span className='user__value'>{user.email}</span>
                </li>
                <li className='user__item'>
                    <span className='user__label'>Birthday</span>
                    <span className='user__value'>{user.birthday}</span>
                </li>
            </ul>
            <hr className='user__hr'/>
            <footer className='user__footer'>
                <button onClick={handleDelete}><i className='bx bx-trash user__btn__delete'>delete</i></button>
                <button onClick={handleEdit}><i className='bx bx-edit-alt user__btn__update'>update</i></button>
            </footer>
        </article>
    )
}

export default UserCard