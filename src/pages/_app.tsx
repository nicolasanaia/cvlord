import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'

import '../styles/globals.css'
import { useEffect, useState } from 'react';

const modes = ['dark', 'light'];

function useStickyState(defaultValue: string | undefined, key: string): [string | undefined, (v: string) => void] {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
      const stickyValue = localStorage.getItem(key)
      if (stickyValue !== null) {
          setValue(stickyValue)
      }
  }, [key, setValue])

  return [value, (v) => {
      localStorage.setItem(key, v)
      setValue(v)
  }]
}

export default function App({ Component, pageProps }: AppProps) {  
  const [mode, setMode] = useStickyState(modes[0], 'mode-theme');

  const handleChangeTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={[
      'bg-backgroundPrimary text-fontPrimary h-screen',
      mode && `${mode}-theme`
    ].filter(Boolean).join(' ')}>
      <Header mode={mode} handleChangeTheme={handleChangeTheme} />
      <Component {...pageProps} />
    </div>
  ) 
}
