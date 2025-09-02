function ShoplistProduct({ product }) {

    return (
        <a className="shoplist-product" href={`/product/${product._uid}`}>
            <img src={product.image.filename} alt={product.image.title} className="mb-4 w-full aspect-square object-cover bg-white" />
            <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p>{product.gender_age}</p>
            </div>
            <p>{product.price}:-</p>
        </a>
    )
}

export default ShoplistProduct;