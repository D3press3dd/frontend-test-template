import cx from 'classnames'

interface GamePriceProps {
  price: number
  className?: string
}

export default function GamePrice ({ price, className }: GamePriceProps) {
  return (
    <div
      className={cx(
        'text-xl font-bold text-primary tracking-[0.4px]',
        className
      )}
    >
      ${price}
    </div>
  )
}
