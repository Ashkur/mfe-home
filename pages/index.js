import { useRouter } from 'next/router'

import styles from "../styles/Home.module.css";

import { Teste } from "@evob/evob.ui.teste/dist/teste";

import Link from 'next/link'

export default function Home() {
  const router = useRouter()

  const redirectToCheckout = () => {
    router.push('/checkout')
  }

  const saveToken = () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJhdCI6IjIwMjItMDEtMzBUMTY6Mjc6MjIrMDA6MDAiLCJ1c2VyX2lkIjpudWxsLCJlbWFpbCI6InVyaWVsQGV2b2IuY29tLmJyIn0.Q9uwNDWuqwqhOA4VLdk9PhW0ePKspwHAHVtqpF8RouQ')
  }

  console.log('vercel encvironment', process.env.NEXT_PUBLIC_VERCEL_ENV)

  return (
    <div className={styles.container}>
      <h1>MICRO-FRONTEND HOME 2</h1>

      <button onClick={saveToken}>save token</button>

      <button onClick={redirectToCheckout}>Redirect to checkout</button>

      <Link href="/cra">go to cra</Link>
      
      <Teste>
        Hello World!
      </Teste>
    </div>
  );
}
