import './styles/UserCard.css'
const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose, setIsHover, isHover}) => {

    const handleDelete = () => {
        deleteUser(user.id)
    }

    const handleEdit = () => {
        setUserUpdate(user)
        setIsFormClose(false)
    }
   
    const handleHover = () => {
        setIsHover(user.id)
        
    }
    // console.log(user.id);  
    // console.log(isHover);
    
    const handleNoHover = () => {
        setIsHover(false)
    }

    return (
        <article className='user'>
            <h2 className='user__title'>{user.first_name} {user.last_name}</h2>
            <hr className='user__hr' />
            <ul className='user__list'>
                <li className='user__item'>
                    <span className='user__label'>Email</span>
                    <span className='user__value'>{user.email}</span>
                </li>
                <li className='user__item'>
                    <span className='user__label'>Birthday</span>
                    <span className='user__value'><i className='bx bx-gift user__value__icon'></i> {user.birthday}</span>
                </li>
            </ul>
            <hr className='user__hr' />
            <footer className='user__footer'>
                <button className='user__btn user__btn--delete' onClick={handleDelete} onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
                    <i className={`bx bx-trash ${user.id === isHover? 'bx-tada' : ''} user__btn__icon`}></i>
                </button>
                <button className='user__btn user__btn--update' onClick={handleEdit} >
                    <i className='bx bx-edit-alt user__btn__icon'></i>
                </button>
            </footer>
        </article>
    )
}

export default UserCard