import { type Game } from '@/types'

interface OrderTotalProps {
  items: Game[]
}

function getTotalPrice ({ items }: OrderTotalProps) {
  return items.reduce((prev, current) => prev + current.price, 0)
}
export default function OrderTotal ({ items }: OrderTotalProps) {
  const totalPrice = getTotalPrice({ items }).toFixed(2)

  return (
    <div className="flex justify-between items-center text-xl font-bold text-primary">
      <span>Order Total</span>
      <span>${totalPrice}</span>
    </div>
  )
}
