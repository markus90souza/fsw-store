import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
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
