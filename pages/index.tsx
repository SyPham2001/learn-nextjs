import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';

const Home : NextPageWithLayout = () => {
  const router = useRouter();
  function goToDetailPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    });
  }
  return (
    <div>
      <Head>
        <title>My Next App By SyPham</title>
        <meta name="description" content="Learn NextJs  + Typescript with fun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <button onClick={goToDetailPage}>Go to post detail page</button>
        <div style={{marginTop : '2000px'}}></div>
        <Link href="/about">
          <p>Go to About</p>
        </Link>
      </main>
    </div>
  );
}
Home.Layout = MainLayout
export default Home