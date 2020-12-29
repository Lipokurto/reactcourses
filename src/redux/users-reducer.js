const FOLLOW = 'FALLOW'
const UNFOLLOW = 'UNFALLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
     
    users: [
 
     ]
}

const usersReducer =(state = initialState,action)=> {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {...u,followed:true}
                    }
                    return u
                })
            }
        
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(m=> {
                    if (m.id === action.userId) {
                        return {...m,followed:false}
                    }
                    return m
                })
            }
        case SET_USERS:
            return  {
                ...state, 
                users: [...state.users, ...action.users]

            }
        default:
            return state;
    }
}
export const followAC =(userId)=> ({type:FOLLOW,userId})
export const unfollowAC =(userId)=> ({type:UNFOLLOW,userId})
export const setUsersAC =(users)=> ({type:SET_USERS,users})
export default usersReducer