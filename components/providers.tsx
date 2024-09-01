'use client';

import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

export function Providers({ children }: {children: React.ReactNode}) {
  return (
    <ThemeProvider enableSystem defaultTheme = 'system'>
      {children}
    </ThemeProvider>
  )
}
