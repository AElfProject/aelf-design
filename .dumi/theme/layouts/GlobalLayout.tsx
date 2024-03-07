import React from 'react';
import { useIntl, useLocation, useOutlet, usePrefersColor } from 'dumi';

import SiteThemeProvider from '../SiteThemeProvider';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [color] = usePrefersColor();
  console.log('color----', color);
  const { locale } = useIntl();

  return (
    <>
      <SiteThemeProvider appearance={color}>
        <div className={pathname === '/' || pathname === '/zh-CN' ? 'home' : ''}>{outlet}</div>
      </SiteThemeProvider>
    </>
  );
};

export default GlobalLayout;
