import Navbar from '../components/organisms/Navbar'
import ProductGallery from '../components/organisms/ProductGallery'
import useProductStore from '../store/productStore'
import categories from '../mockdata/categories'

const Home = () => {
  const { search, category, currentPage, setSearch, setCategory, setPage,
          getPaginated, getTotalPages } = useProductStore()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar searchValue={search} onSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Filtros por posición */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1 rounded-full border transition font-medium text-sm
                ${category === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Galería de productos */}
        <ProductGallery products={getPaginated()} />

        {/* Paginación */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: getTotalPages() }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded border transition
                ${currentPage === i + 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home