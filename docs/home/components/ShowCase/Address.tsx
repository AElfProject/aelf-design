import React from 'react';
import { HashAddress } from 'aelf-design';
import { Space } from 'antd';

import styles from './index.module.less';

export default function Address() {
  return (
    <div className={styles.cardBg}>
      <span className={styles.title}>Address</span>
      <Space direction="vertical" size={32}>
        <HashAddress ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />
        <HashAddress
          ellipsis={{
            headClip: 4,
            tailClip: 4,
          }}
          copyable
          address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        />
        <HashAddress address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} format={true} />
      </Space>
    </div>
  );
}
