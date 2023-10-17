import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import {
  HomeIcon,
  ListOrdered,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'

export const Header = () => {
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

          <div className="mt-2 flex flex-col gap-3">
            <Button variant={'outline'} className="w-full justify-start gap-2">
              <LogInIcon size={16} />
              Acessar conta
            </Button>

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
