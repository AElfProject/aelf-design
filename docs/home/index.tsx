import React, { useEffect } from 'react';
import { usePrefersColor } from 'dumi';

import HomeBanner from './components/Banner';
import Features from './components/Features';
import ShowCase from './components/ShowCase';
// import Theme from './components/Theme';
import styles from './index.module.less';

export default () => {
  const [, prefersColor] = usePrefersColor();

  useEffect(() => {
    // en-US: Temporarily fix the problem that the theme follows the system and switch to the light theme first,
    // and then delete it after fixing it in dumi
    if (prefersColor === 'auto') {
      document.documentElement.setAttribute(
        'data-prefers-color',
        window.matchMedia(`(prefers-color-scheme: dark)`).matches ? 'dark' : 'light',
      );
    }
  }, [prefersColor]);

  return (
    <div className={styles.container}>
      <HomeBanner />
      <div className={styles.centerbg}>
        <Features />
        {/* <Theme /> */}
        {/* <div className={styles.rightTopImage} />
        <div className={styles.leftBottomImage} /> */}
      </div>
      <ShowCase />
    </div>
  );
};
