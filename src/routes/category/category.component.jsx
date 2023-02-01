import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  // console.log(categoriesMap);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
