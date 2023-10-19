'use client'
import { FC } from 'react'
import { SessionProvider, SessionProviderProps } from 'next-auth/react'

type AuthProviderProps = SessionProviderProps

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
