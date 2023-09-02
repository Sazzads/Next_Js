import Categories from '@/Components/HomePage/Categories'
import Popularproducts from '@/Components/Popularproducts';
import Image from 'next/image'
import { Suspense } from 'react';
// import image1 from "@/assets/flowers-276014_1280.jpg"
// import image2 from "@/assets/tree-736885_1280.jpg"
export const revalidate = 5;
export default function HomePage() {
  return (
    <main className="container mx-auto">
      <h2 className='text-lg text-red-700'>Home</h2>
      <Categories></Categories>
      <Suspense fallback={ <h1 className="text-center font-semibold text-2xl ">Loading...</h1>}>
      <Popularproducts></Popularproducts>

      </Suspense>

    </main>
  )
}
