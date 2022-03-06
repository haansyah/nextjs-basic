import type { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <Image src='/profile.jpg' height={200} width={200} alt="Image 1"/>
      <h1 className={styles['title-homepage']}>Welcome Ari Sutarman</h1>
    </Layout>
  )
}

export default Home
