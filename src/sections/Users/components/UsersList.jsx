import UsersListItem from "./UsersListItem.jsx";



function UsersList ({data}) {

    return (

        <ul className = "users-list" >

            {data.map((User) => (

                <UsersListItem key={User.id} User={User} />
            ))}

        </ul>

    )

}

export default UsersList