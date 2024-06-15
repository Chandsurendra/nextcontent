'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const options = [
    { icon: <Sun />, text: 'light' },
    { icon: <Moon />, text: 'dark' },
    { icon: <Monitor />, text: 'system' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {options?.map((opt) => (
        <Button
          type="button"
          title={opt.text}
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`m-1 rounded-full bg-background p-2 text-secondary-foreground duration-500 ${theme === opt.text && 'text-primary'} `}
        >
          {opt.icon}
        </Button>
      ))}
    </div>
  );
};
export default ThemeSwitcher;
