# @aelf-design/nextjs-registry

This package is used for registry styles of aelf-design components for Next.js.

## Install

```
npm install @aelf-design/nextjs-registry --save
```

## Usage

Should be use in `RootLayout` of Nextjs app router.

```tsx
// app/layout.tsx

import React from 'react';
import { AelfdRegistry } from '@aelf-design/nextjs-registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AelfdRegistry>{children}</AelfdRegistry>
      </body>
    </html>
  );
}
```
