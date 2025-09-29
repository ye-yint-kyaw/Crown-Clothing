import CategoryItem from "../category-item/category-item.component"
import "./category-container.style.scss"

const CategoryContainer = ({categories}) => (
    <div className="categories-container">
      {
        categories.map((category) => (
          <CategoryItem key={category.id} category = {category}/>
        ))
      }
    </div>
)

export default CategoryContainer