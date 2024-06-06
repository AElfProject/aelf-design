'use client';

import React, { PropsWithChildren, useRef } from 'react';
import { extractStaticStyle, StyleProvider } from 'antd-style';
import { useServerInsertedHTML } from 'next/navigation';

const StyleRegistry = ({ children }: PropsWithChildren) => {
  const isInsert = useRef(false);

  useServerInsertedHTML(() => {
    if (isInsert.current) return;

    isInsert.current = true;

    const styles = extractStaticStyle().map((item) => item.style);

    return <>{styles}</>;
  });

  return <StyleProvider cache={extractStaticStyle.cache}>{children}</StyleProvider>;
};

export default StyleRegistry;
