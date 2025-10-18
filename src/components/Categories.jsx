import React, { use } from "react";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
