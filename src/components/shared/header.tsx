'use client'
import { FC } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  HomeIcon,
  ListOrdered,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'

export const Header: FC = () => {
  const handleSignIn = async () => {
    await signIn()
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const { status, data } = useSession()
  return (
    <Card className="flex items-center justify-between p-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant={'outline'}>
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side={'left'}>
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === 'authenticated' && data.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <span className="font-medium capitalize">{data.user.name}</span>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-2 flex flex-col gap-3">
            {status === 'authenticated' && (
              <Button
                onClick={handleSignOut}
                variant={'outline'}
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Sair conta
              </Button>
            )}

            {status === 'unauthenticated' && (
              <Button
                onClick={handleSignIn}
                variant={'outline'}
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Acessar conta
              </Button>
            )}
            <Button variant={'outline'} className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Inicio
            </Button>

            <Button variant={'outline'} className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant={'outline'} className="w-full justify-start gap-2">
              <ListOrdered size={16} />
              Catalogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant={'outline'}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}
