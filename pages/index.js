import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useState } from 'react';
import ketilphoto from '../public/ketilphoto.png';
import ketilhalo from '../public/ketilhalo.png';

export default function Home() {
  const [isClicked, click] = useState(false);

  const clickPhoto = () => {
    click(!isClicked);
  };

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
          content='Ketil Slagstad'
        />
        {/* <meta
          property='og:image'
          content='https://res.cloudinary.com/dixi5g16o/image/upload/v1708467126/ketilpreview_txv2y5.png'
        /> */}
        Back to Top
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      {/* <Image
        src={isClicked ? ketilphoto : ketilhalo}
        alt='ketil'
        onClick={clickPhoto}
        style={{ 'pointer-events': 'all' }}
      /> */}
      <h1>KETIL SLAGSTAD</h1>
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
