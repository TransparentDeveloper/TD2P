'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  const test = 'test'
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
}
