import GenreSelect from '@/components/molecules/genre-select'

export default function TopSellersHeader () {
  return (
    <div className="py-8 md:py-12">
      <h5 className="mb-8 md:mb-12 text-primary text-2xl md:text-4xl font-bold uppercase md:normal-case">
        Top Sellers
      </h5>
      <div className="flex justify-between md:justify-end">
        <GenreSelect />
      </div>
    </div>
  )
}
