function Users({ user }) {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    )
}

export default Users