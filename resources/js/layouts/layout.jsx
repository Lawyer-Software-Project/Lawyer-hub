import { Head } from '@inertiajs/react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function Layout({ children, title, fixedStatus }) {
  return (
    <main className="font-['CrimsonText-Regular',serif] bg-[#f8f8f8] min-h-screen">
      <Head title={title} />
      <Header/>
      <article>{children}</article>
      <Footer fixedStatus={fixedStatus}/>
    </main>
  )
}