import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div>Review {productId}</div>
    )
}

export default index