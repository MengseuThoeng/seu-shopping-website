import CreateProductForm from '@/components/dashboard/CreateProduct';
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[60%]'>
        <CreateProductForm/>
      </div>
    </div>
  )
}

export default page