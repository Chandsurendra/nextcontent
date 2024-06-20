'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/app/components/ui/dropdown-menu';

const Theme = () => {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" varient="outline">
          <Sun />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {options?.map((opt) => (
            <div key={opt.text}>
              <DropdownMenuItem
                className={`${theme === opt.text && 'text-primary'}`}
                onClick={() => setTheme(opt.text)}
              >
                {opt.icon}
                <p className="pl-2">{opt.text}</p>
              </DropdownMenuItem>
            </div>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Theme;
