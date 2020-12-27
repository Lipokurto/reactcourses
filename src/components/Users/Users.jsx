import react from 'react'
import cla from './Users.module.css'

const Users =(props)=> {

    if (props.users.length === 0) {
        props.setUsers( [
            {id:1,followed:false,photoUrl:'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',fullName:'Dmitri',ava:'img1',status:'ffff',location:{city:'Minsk',country:'Belarus'}},
            {id:2,followed:false,photoUrl:'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',fullName:'Frosya',ava:'img2',status:'dddd',location:{city:'MSK',country:'Russia'}},
            {id:3,followed:true,photoUrl:'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',fullName:'Pisaka',ava:'img3',status:'zzzz',location:{city:'Loboda-city',country:'Minsa'}},
            {id:4,followed:true,photoUrl:'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',fullName:'Volodi',ava:'img4',status:'qqqq',location:{city:'city',country:'KIV'}},
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key ={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={cla.usersPhoto}/>
                        </div>
                        </span>
                        <div>
                                { u.followed 
                                    ? <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> 
                                    : <button onClick={() => (props.follow(u.id))}>Follow</button> }
                        </div>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
        )
}
export default Users;