import {arrayObj} from '../../assets/registrations'

import '../../styles/account/profile.scss'

function Profile() {
    console.log(arrayObj.find(item => item.key === localStorage.getItem('authKey')))
    const userAccount = arrayObj.find(item => item.key === localStorage.getItem('authKey'))

    if (!userAccount) return
    
    return (
        <div className='profile'>
           <h1>DADOS PESSOAIS</h1>
           <div className='userDate'>
                <p className='title'>Nome</p>
                <p>{userAccount.user}</p>
           </div>
           <div className='userDate'>
                <p className='title'>Email</p>
                <p>{userAccount.email}</p>
           </div>
        </div>
    )
}

export default Profile;
