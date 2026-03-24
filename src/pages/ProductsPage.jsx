import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredProducts, setSearchTerm, setCategory, setSortBy } from '../store/productsSlice';
import ProductGrid from '../components/ProductGrid';

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const { searchTerm, category, sortBy } = useSelector(state => state.products);

  const categories = ['All', 'Electronics', 'Fashion', 'Home'];

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="page-title">
          All <span className="gradient-text">Products</span>
        </h1>
        <p className="page-subtitle">Browse our curated collection of premium products</p>
      </div>

      <div className="products-toolbar">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="search-input"
          />
          {searchTerm && (
            <button className="search-clear" onClick={() => dispatch(setSearchTerm(''))}>✕</button>
          )}
        </div>

        <div className="filter-controls">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? 'active' : ''}`}
                onClick={() => dispatch(setCategory(cat))}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          >
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="products-count">{products.length} products found</div>

      <ProductGrid products={products} />
    </div>
  );
}

export default ProductsPage;
