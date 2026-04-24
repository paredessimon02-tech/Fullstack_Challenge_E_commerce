import ProductCard from '../molecules/ProductCard'

const ProductGallery = ({ products }) => (
  <>
    {products.length === 0
      ? (
        <div className="col-span-4 text-center py-12 text-gray-400">
           No se encontraron jerseys
        </div>
      )
      : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )
    }
  </>
)

export default ProductGallery