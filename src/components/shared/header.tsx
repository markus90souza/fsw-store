import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'

export const Header = () => {
  return (
    <Card className="flex justify-between p-6 items-center">
      <Button size="icon" variant={'outline'}>
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant={'outline'}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}
