import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import ketil from '../public/ketilhalo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ketil Slagstad</title>
        <meta
          name='description'
          content='Ketil Slagstad'
        />
        <meta
          property='og:title'
          content='iPhone'
        />
        <meta
          property='og:image'
          content='https://asset.cloudinary.com/dixi5g16o/a483aeb8e405d600893bcce810373c92'
        />
        Back to Top
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <Image src={ketil} />
      {/* <video
          className='video'
          autoplay
          muted
          loop
          preload='auto'
        >
          <source
            src='/ketil.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video> */}
    </div>
  );
}
