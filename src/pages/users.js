function Users(props) {
    const { users } = props

    return (
        <div>Users list Function
            {
                users.map((val, index) => {
                    return <h1 key={index}>{val?.name}</h1>
                }
                )}
        </div>
    )
}

export default Users

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: {
            users: data,
        }
    }
}