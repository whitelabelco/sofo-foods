import React from 'react';

import ProductCard from './ProductCard';

interface ProductsGridProps {
    full?: boolean;
  }

const ProductsGrid: React.FC<ProductsGridProps> = ({ full = false }) => {

    const products = [
        {name: "Dairy", background: "bg-[url('/products/dairy.webp')]", route: "/products/dairy"},
        {name: "Meat (Excludes Poultry)", background: "bg-[url('/products/meat.webp')]", route: "/products/meat"},
        {name: "Tomato Products", background: "bg-[url('/products/tomato.webp')]", route: "/products/tomatoproducts"},
        {name: "Produce", background: "bg-[url('/products/produce.webp')]", route: "/products/produce"},
        {name: "Dry Goods", background: "bg-[url('/products/dry-goods.webp')]", route: "/products/drygoods"},
        {name: "Bread & Dough", background: "bg-[url('/products/bread-dough.webp')]", route: "/products/breadanddough"},
        {name: "Flour & Mixes", background: "bg-[url('/products/flour-mixes.webp')]", route: "/products/flourandmixes"},
        {name: "Frozen / Fresh Refrigerated", background: "bg-[url('/products/frozen-fresh-refrigerated.webp')]", route: "/products/frozenfreshrefrigerated"},
        {name: "Poultry", background: "bg-[url('/products/poultry.webp')]", route: "/products/poultry"},
        {name: "Pizza Boxes", background: "bg-[url('/products/pizza-boxes.webp')]", route: "/products/pizzaboxes"},
        {name: "Disposables", background: "bg-[url('/products/disposables.webp')]", route: "/products/disposables"},
        {name: "Cleaning", background: "bg-[url('/products/cleaning.webp')]", route: "/products/cleaning"},
        {name: "Equipment", background: "bg-[url('/products/equipment.webp')]", route: "/products/equipment"},
        {name: "Miscellaneous", background: "bg-[url('/products/miscellaneous.webp')]", route: "/products/miscellaneous"},
        {name: "Proprietary Items", background: "bg-[url('/products/proprietary-items.webp')]", route: "/products/proprietaryitems"}
    ];

    const displayedProducts = full ? products : products.slice(0, 8);

    return (
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 max-w-screen-xl">
        {displayedProducts.map((product, index) => (
          <div key={index} className="flex justify-center items-center">
            <ProductCard className={`${product.background} w-[180px] md:w-[300px]`} name={product.name} route={product.route} />
          </div>
        ))}
      </div>
    );
  };

export default ProductsGrid;