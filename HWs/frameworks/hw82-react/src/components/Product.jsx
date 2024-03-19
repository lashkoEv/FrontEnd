export const Product = ({ data }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center flex-col">
      <img className="rounded-t-lg" src={data.images[0]} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
      </div>

      <div className="flex items-center justify-between w-full p-5">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {data.price} $
        </span>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to cart
        </button>
      </div>
    </div>
  );
};
