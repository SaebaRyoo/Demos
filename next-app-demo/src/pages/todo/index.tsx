import Head from 'next/head'
import Image from 'next/image'

import request from '@/utils/request'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchTodos = async () => {
  return request.get('/todo')
}


// 使用客户端 + useQuery请求
// export default function Todo() {

//   const { isLoading, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () => request.get('/todo'),
//   })

//   console.log(data)

//   if (isLoading) return 'Loading...'

//   if (error) return 'An error has occurred: ' + error.message
//   return (
//     <>
//       <main>
//         {
//           data.data.data.map((item: any) => (<div key={item.id}>{item.name}</div>))
//         }
//       </main>
//     </>
//   )
// }


// 使用服务端渲染
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
  const {data} = await fetchTodos()
  console.log(data.data)
  return {
    props: {
      data: data.data
    }
  }
}
