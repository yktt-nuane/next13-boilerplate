"use client"

import {Button} from '@/components/Button/Button'

export default function Home() {
  const handleClick = () => {
    window.location.href = 'https://mpedia.biz';
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button label='test' primary size="large" onClick={handleClick} />
      </div>
    </main>
  )
}
