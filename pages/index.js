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
    <><Header />
    <Intro />
    <Print />
    <Digital />
    </>

  )
}
