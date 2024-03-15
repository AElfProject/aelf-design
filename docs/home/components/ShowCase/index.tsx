import React from 'react';
import { useIntl } from 'dumi';

// import Connect from './Connect';
// import ConnectButton from './ConnectButton';
import styles from './index.module.less';

export default function ShowCase() {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerText}>Made with ❤ by</div>
        <div className={styles.footerDesc}>Aelf Design</div>
      </div>
    </div>
  );
}
