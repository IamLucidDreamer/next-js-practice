import { useRouter } from "next/router"

const Params = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params, "hii");
    return (
        <h1>Docs Home Page</h1>
    )
}

export default Params