let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

export let followAC = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
}

export let unfollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export let setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

let initialState = {
    users: [
       /* {id: 1, photoURL: 'https://lolfilter.com/files/thumbnails/6084168923139678.png', followed: true, name: "Julia", status: "I'm here", location: {city: "Lida", country: "Belarus"}},
        {id: 2, photoURL: 'https://lolfilter.com/files/thumbnails/6084168923139678.png', followed: true, name: "Marina", status: "I'm here too", location: {city: "Brest", country: "Belarus"}},
        {id: 3, photoURL: 'https://lolfilter.com/files/thumbnails/6084168923139678.png', followed: false, name: "Kate", status: "I'm cool", location: {city: "Kiev", country: "Ukraine"}}
    */
    ]
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }   
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            } 
            case SET_USERS:
                return {
                    ...state, users: [...state.users, ...action.users]
                }
        default:
            return state;
    }

}

export default usersReducer;