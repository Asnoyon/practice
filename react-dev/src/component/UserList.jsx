
const UserList = ({users}) => {
   if(!users) return null;
   if(!users.length) return <p>No user Found</p>

    return(
        <ul>
            {
                users.map(user=>{
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
    )
}

export default UserList