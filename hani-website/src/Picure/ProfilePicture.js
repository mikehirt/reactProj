
import React from 'react'
import Hani from './Hani.JPG';
import './ProfilePicture.css';

class ProfilePicture extends React.PureComponent
{
    render(){
        return(
            <div >
                <img src={Hani} className="image" alt="ProfilePicture" />
            </div>

        )
    }

}
export default ProfilePicture