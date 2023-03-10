import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div>
            <Link href="/product/1">
                <h1>Product 1</h1>
            </Link>
            <h1>Product 2</h1>
            <h1>Product 3</h1>
            <Link href="/">
                Home
            </Link>
        </div>
    )
}

export default index