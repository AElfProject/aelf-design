import React from 'react';
import { useIntl } from 'dumi';

import Address from './Address';
// import Connect from './Connect';
// import ConnectButton from './ConnectButton';
import styles from './index.module.less';
import NFTCard from './NFTCard';

export default function ShowCase() {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerText}>Made with ❤ by</div>
        <div className={styles.footerDesc}>AELF DESIGN</div>
      </div>
    </div>
  );
}
