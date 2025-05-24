
const ProductSection = ({products}) => {

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6"> Our Products </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white group rounded-lg shadow-md overflow-hidden p-4"
            >
              <div className='aspect-square w-full h-52 relative overflow-hidden rounded-xl'>
                <img
                  className='object-cover h-full w-full group-hover:scale-110 transition'
                  src={product.image}
                />
                <div className='absolute top-3 right-3'></div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-orange-600 mt-4">
                    ${product.price}
                  </p>
                  <button className="mt-4 bg-orange-600 text-white py-2 px-3 rounded hover:bg-orange-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;