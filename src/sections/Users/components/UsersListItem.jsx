


function UsersListItem({User}) {

    return (

        <li style ={{background: User.favouriteColour}}  >
          <img
            src={User.profileImage}
            alt = {`${User.firstName} ${User.lastName}`}
          />
        <h3>{User.firstName}{User.lastName}</h3>
        <p>Email: {User.email}</p>
        </li>
    )

}


export default UsersListItem
