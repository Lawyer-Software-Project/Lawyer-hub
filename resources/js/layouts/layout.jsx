import { Head } from '@inertiajs/react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function Layout({ children, title }) {
  return (
    <main className="font-['CrimsonText-Regular',serif] bg-[#f8f8f8]">
      <Head title={title} />
      <Header/>
      <article >{children}</article>
      <Footer/>
    </main>
  )
}