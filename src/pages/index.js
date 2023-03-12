import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const index = () => {
    const router =useRouter()

    const handleClick = () => {
        console.log("placing your order");
        router.push('/product')
    }

    return (
        <>
            <div>Hello world</div>
            <Link href="/blog">
                Blog
            </Link>
            <Link href="/product">
                product
            </Link>
            <Link href="/users">
                Users
            </Link>
            <button onClick={handleClick}>
                PLace Order
            </button>
        </>
    )
}

export default index