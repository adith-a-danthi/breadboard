import './CategoryFilter.css';

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const isActive = (category) => (selectedCategory === category ? 'active' : '');

  return (
    <div className="flex gap-1 flex-wrap ma-4">
      <div className={`chip ${isActive('')}`} onClick={() => setSelectedCategory('')}>
        <span className="chip-bg"></span>
        <div className="chip-content">
          <input
            type="radio"
            name="category"
            id="all"
            value="all"
            checked={selectedCategory === ''}
            onChange={() => setSelectedCategory('')}
          />
          <label htmlFor="all">All</label>
        </div>
      </div>
      {categories?.map(({ _id, categoryName, categoryIcon }) => (
        <div
          key={_id}
          className={`chip ${isActive(categoryName)}`}
          onClick={() => setSelectedCategory(categoryName)}
        >
          <span className="chip-bg"></span>
          <div className="chip-content">
            <input
              type="radio"
              name="category"
              id={categoryName}
              value={categoryName}
              checked={categoryName === selectedCategory}
              onChange={() => setSelectedCategory(categoryName)}
            />
            <label htmlFor={categoryName}>
              <i className={`${categoryIcon} mr-2`}></i>
              {categoryName}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
