import React,{ useContext } from 'react'
import ProfileContext from './ProfileContext'

const ProfilePage = () => {
    const {
        name,
        email,
        image,
    } = useContext(ProfileContext);

    
    return (
        <div>
            <div>Nama:{name}</div>
            <div>Email:{email}</div>
            <div><img src={image}alt="logoo"/></div>
        </div>
    )
}
export default ProfilePage;