'use client';

import styles from './page.module.css';
import HomeSlider from '@/Components/HomeSlider/HomeSlider';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSlider />
    </main>
  );
}
