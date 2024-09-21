import Link from 'next/link'
import React from 'react'

const Display = () => {
  return (
    <>
   <main className=''>
   <ol className='flex justify-evenly mt-10 '>
        <li className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-800'> <Link href="/DesignTwo">Layout 1</Link></li>
        <li className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-800'> <Link href="/DesignOne">Layout 2</Link></li>
        <li className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-800'> <Link href="/TailwindCSS">StyledWithTailwindCss</Link></li>
        <li className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-800'> <Link href="/VanillaCSS">StyledWithVanillaCss</Link></li>
     
    </ol>
   </main>
    </>
  )
}

export default Display