import React from 'react';
import { CopyIcon } from '@aelf-design/internal-icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';

export default function Copy({ value, className }: { value: string; className?: string }) {
  const handleCopy = () => {
    try {
      copy(value);
      message.success('Copied Successfully');
    } catch (e) {
      message.error('Copy failed, please copy by yourself.');
    }
  };
  return <CopyIcon className={className} onClick={handleCopy} />;
}
