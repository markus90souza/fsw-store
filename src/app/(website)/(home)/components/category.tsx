import { prisma } from '@/lib/prisma'
import { CategoryItem } from './category-item'

export const Category = async () => {
  const categories = await prisma.category.findMany()
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
