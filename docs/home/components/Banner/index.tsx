import React from 'react';
// @ts-ignore
import { Link, useIntl } from 'dumi';

import bannerLogo from './banner-logo';
import styles from './index.module.less';

const Banner: React.FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.bannerContainer}>
      <img draggable={false} className={styles.bgImg} src={bannerLogo} alt="banner" />
      <div className={styles.wrap}>
        <div>
          <img
            draggable={false}
            className={styles.titleImg}
            src="https://img2.imgtp.com/2024/03/01/EXKVhuMo.svg"
            alt="title"
          />
          <div className={styles.btn}>
            <Link to={`${intl.locale === 'zh-CN' ? '/zh-CN' : ''}/components/address`}>
              {intl.formatMessage({ id: 'app.docs.site.index.banner.button-text' })}
            </Link>
            <a href="https://github.com/AElf-devops/aelf-design" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
