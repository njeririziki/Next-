import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Success from '../../public/successful_purchase.svg'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Going Once</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Going Once
        </h1>
        <p className={styles.description}>
        <em>Set your own price</em> 
        </p>
       
        <div className={styles.grid}>
       
        
          <div   className={styles.emailcard}>
           <p className={styles.otherdescription}> <b>Bid</b></p> 
            <p> Pick an item... decide how much you want to pay for it. <br/>
             Place your bid ...<b>Highest bidder wins !!</b> </p>
            </div>
            <div   className={styles.emailcard}>
              <p className={styles.otherdescription}> <b>Pay</b></p>
              <p>We have partnered with secure payment platforms <br/>
             to ensure that all user information and transactions are secure. </p>
              </div>
              <div   className={styles.emailcard}>
              <p className={styles.otherdescription}> <b> Delivery</b></p>
              <p> Have your purchaces delivered. 
                <br/>Anywhere in the city <b>Free all day Every Day!</b></p>
          </div>
          
          <p className={styles.otherdescription}>
        <em> Free Delivery Guaranteed!!</em> 
        </p>
       
         
         
         
          <div
            className={styles.emailcard}
          >
           
            <p> <b> Further Inquiries:</b>  goingonce.gmail.com </p>
           
          </div>
        </div>
        <div className={styles.logo}>
        <Success/>
        </div>
{/* 
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
        @goingonce
      </footer>
    </div>
  )
}
