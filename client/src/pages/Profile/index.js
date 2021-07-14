import React, { useEffect, useState } from "react";
import API from '../../utils/API'


function Profile() {
    const [username, setUserName] = useState();
    const [pkamount, setPkAmount] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function UserInfo() {
        API.getUserInfo()
            .then(data => {
                console.log(data)
                setUserName(data.data.username)
                setPkAmount(data.data.pokemon_amount)
                setEmail(data.data.email)
            })
            .catch(err => {
                return err
            });
    }
    useEffect(() => {
        UserInfo();
    }, []);

    return (
        <div>
            <p>Profile</p>
        </div>
    )
}


export default Profile;
