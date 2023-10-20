import { ShoppingCartIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cart-context'
import { CartItem } from './cart-item'
import { computeProductTotalPrice } from '@/utils'

export const Cart = () => {
  const { products } = useContext(CartContext)

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      {/* RENDERIZAR OS PRODUTOS */}
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product as any) as any}
          />
        ))}
      </div>
    </div>
  )
}
