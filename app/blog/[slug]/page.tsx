import React from 'react'

export default function BlogPost({params}: {params: {slug: string}}) {
    return (
        <div>
            <h2>{params.slug}</h2>
        </div>
    )
}
