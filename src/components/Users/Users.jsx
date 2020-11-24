import React from 'react';
import u from './Users.module.css';

const Users = (props) => {
    
    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoURL: 'https://lolfilter.com/files/thumbnails/6084168923139678.png', followed: true, name: "Julia", status: "I'm here", location: {city: "Lida", country: "Belarus"}},
            {id: 2, photoURL: 'https://lolfilter.com/files/thumbnails/6084168923139678.png', followed: true, name: "Marina", status: "I'm here too", location: {city: "Brest", country: "Belarus"}},
            {id: 3, photoURL: 'https://lolfilter.com/files/thumbnails/6084168923139678.png', followed: false, name: "Kate", status: "I'm cool", location: {city: "Kiev", country: "Ukraine"}}
        ] )
    }


    return (
            <div>        
                {
                    props.users.map(user => <div key = {user.id}>
                        
                            <div>
                                <img src={user.photoURL} className={u.userPhoto}></img>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick = {() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button> 
                                    : <button onClick = {() => {
                                        props.follow(user.id)
                                    }}>Follow</button>}
                            </div>               
                            
                                <div>{user.name}</div>
                                <div>{user.status}</div>

                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>

                    </div>
                )
                }

            </div>
        )
    
}

export default Users;