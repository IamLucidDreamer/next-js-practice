import User from "../components/user"

function UsersList(props) {
    const { users } = props

    return (
        <div>Users list Function
            {
                users.map((val, index) => {
                    return (
                        <User user={val} />
                    )
                }
                )}
        </div>
    )
}

export default UsersList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: {
            users: data,
        }
    }
}