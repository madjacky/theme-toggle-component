'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ThemeToggleButton from '@/components/ui/theme-toggler-button';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const ariaLabel = resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <ThemeToggleButton
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      ariaLabel={ariaLabel}
      isDarkMode={resolvedTheme === 'dark'}
    />
  );
}