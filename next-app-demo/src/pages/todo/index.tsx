import Head from 'next/head'
import Image from 'next/image'

import request from '@/utils/request'
import { useEffect } from 'react'

const fetchTodos = async () => {
  return request.get('/todo')
}

export default function Todo({data}: any) {

  return (
    <>
      <main>
        {
          data.map((item: any) => (<div key={item.id}>{item.name}</div>))
        }
      </main>
    </>
  )
}

export async function getServerSideProps() {
  // const res = await fetch(`http://localhost:8081/todo`)
  // const data = await res.json()
  // console.log(data)
  // const data = await fetchTodos()
  // console.log(data)
  const {data} = await fetchTodos()
  console.log(data.data)
  return {
    props: {
      data: data.data
    }
  }
}
