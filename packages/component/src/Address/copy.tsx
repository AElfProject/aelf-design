import React from 'react';
import { CopyOutlined } from '@aelf-design/internal-icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';

export default function Copy({ value, className }: { value: string; className?: string }) {
  const handleCopy = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      copy(value);
      message.success('Copied Successfully');
    } catch (e) {
      message.error('Copy failed, please copy by yourself.');
    }
  };
  return <CopyOutlined className={className} onClick={handleCopy} />;
}
