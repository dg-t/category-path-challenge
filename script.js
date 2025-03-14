const categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: [],
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: 'category5',
    subcategories: [],
  },
];

const getCategoryPath = (categories, categoryName) => {
  for (const category of categories) {
    if (category.name === categoryName) return `/${categoryName}`;

    if (category.subcategories.length) {
      const subcategory = getCategoryPath(category.subcategories, categoryName);
      if (subcategory) return `/${category.name}${subcategory}`;
    }
  }

  return null;
};

// // OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'
