import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Print from '../components/Print'
import Intro from '../components/Intro'
import Digital from '../components/Digital'

const unit = 0.1;

export default function Home() {

  return (

    <><Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head><>
    
    <Header />

        <main>
          <Intro />
          <Print />
          <Digital />
        </main>
      </></>

  )
}
