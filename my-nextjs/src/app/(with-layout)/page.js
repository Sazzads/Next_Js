import Image from 'next/image'
import image1 from "@/assets/flowers-276014_1280.jpg"
import image2 from "@/assets/tree-736885_1280.jpg"
export default function HomePage() {
  return (
    <main className="">
      <h2 className='text-lg text-red-700'>Home</h2>
      <Image width={600} height={391} src={image1} placeholder='blur' alt=''/>
      {/* <Image width={600} height={391} src="https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=''/> */}

    </main>
  )
}
