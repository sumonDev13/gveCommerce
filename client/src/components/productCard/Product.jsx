

const Product = ({ product }) => {
  const { name, description, imageUrl, price } = product;

  return (
    <div className="card card-compact max-w-80  shadow-xl my-4 sm:mx-4 bg-[#A7CDCC] ">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary ">Buy Now (${price})</button>
        </div>
      </div>
    </div>
  );
};

export default Product;