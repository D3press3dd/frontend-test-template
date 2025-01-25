'use client'

import CartItem from '@/components/molecules/cart-item'
import cx from 'classnames'
import { useCart } from '@/contexts/cart-context'

interface CartItemsListProps {
  className?: string
}

export default function CartItemsList ({ className }: CartItemsListProps) {
  const { items, removeItem } = useCart()
  return (
    <div className={className}>
      {items.map((item, index) => (
        <CartItem
          key={item.id}
          game={item}
          onRemove={removeItem}
          className={cx(index > 0 && 'border-t border-primary')}
        />
      ))}
    </div>
  )
}
