

const Product = ({ product }) => {
  const { name, description, imageUrl, price,stockQuantity } = product;

  return (
    <div className="card card-compact max-w-80  shadow-xl my-4 sm:mx-4 bg-[#A7CDCC] transition duration-900 ease-in-out hover:transform hover:-translate-y-1 hover:scale-70 ... ">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <div className="flex flex-row justify-between">
        <h2 className="card-title">{name}</h2>
        <h4 className="card-title font-light text-sm">Stock({stockQuantity})</h4>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <div className="inline-block rounded bg-red-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-red-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">${price}</div>
          <button className="inline-block rounded bg-cyan-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-cyan-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-cyan-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-cyan-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;