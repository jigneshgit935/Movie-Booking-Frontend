'use client';

import MovieCarousel from '@/Components/MovieCarousel/MovieCarousel';
import styles from './page.module.css';
import HomeSlider from '@/Components/HomeSlider/HomeSlider';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSlider />
      <MovieCarousel />
    </main>
  );
}
