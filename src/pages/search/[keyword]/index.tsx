import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${ctx.params.keyword}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

const KeywordSearch: NextPage = ({ data }: any) => {
    useEffect(() => {
        console.log(data);
    }, [data])


    return (
        <div>KeywordSearch</div>
    )
}

export default KeywordSearch