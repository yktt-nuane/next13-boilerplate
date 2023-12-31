'use client'

import { Button } from '@/components/Button/Button'

import { DateInput } from '@mantine/dates'

export default function Home() {
  const handleClick = () => {
    window.location.href = 'https://mpedia.biz'
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DateInput
        valueFormat="YYYY/MM/DD"
        label="dateが機能するかチェック"
        placeholder="クリックするとカレンダーが出る"
      />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button
          label="Storybookのボタン-個人ページへのリンク"
          primary
          size="large"
          onClick={handleClick}
        />
      </div>
    </main>
  )
}
