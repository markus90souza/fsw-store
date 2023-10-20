import { Badge } from '@/components/ui/badge'
import { Category } from '@prisma/client'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react'
import { FC } from 'react'

type CategoryItemProps = {
  category: Category
}

export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const categoryIcons = {
    mouses: <MouseIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    keyboards: <KeyboardIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
  }
  return (
    <Badge
      variant={'outline'}
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcons[category.slug as keyof typeof categoryIcons]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  )
}
