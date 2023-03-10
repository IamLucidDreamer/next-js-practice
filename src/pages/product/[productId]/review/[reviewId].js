import { useRouter } from 'next/router'
import React from 'react'

const reviewId = () => {
    const router = useRouter()
    const reviewId = router.query.reviewId
    const productId = router.query.productId

    return (
        <div>reviewId {reviewId} {productId}</div>
    )
}

export default reviewId