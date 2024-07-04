import React from 'react';
import { Link, useIntl } from 'dumi';

import styles from './index.module.less';

const Banner: React.FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.wrap}>
        <div className={styles.bannerAnimation}></div>
        <div className={styles.btn}>
          {/* <Link to={`${intl.locale === 'zh-CN' ? '/zh-CN' : ''}/components/address`}>
              {intl.formatMessage({ id: 'app.docs.site.index.banner.button-text' })}
            </Link> */}
          <Link to={`/components/address`}>Begin</Link>
          <a href="https://github.com/AElfProject/aelf-design" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
