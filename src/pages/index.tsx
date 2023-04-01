import Head from 'next/head'
import NavBar from '@/components/shared/NavBar'
import Hero from '@/components/home/Hero'
import Footer from '@/components/shared/Footer'
import Specialty from '@/components/home/Specialty'
import Packages from '@/components/home/Packages'
import About from '@/components/home/About'
import Blogs from '@/components/home/Blogs'
import Faq from '@/components/home/Faq'
import Slider from '@/components/home/Slider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
      </Head>
      <main>
        <NavBar />
        <Hero />
        <Slider />
        <Specialty />
        <About />
        <Faq />
        <Packages />
        <Blogs />
        <Footer />
      </main>
    </>
  )
}
