// Description.jsx
import { useLocation, useParams } from "react-router-dom";

export default function Description() {
  const { id } = useParams();
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <div className="p-6 text-lg">Item not found</div>;
  }

  return (
    <div className="container p-6 mx-auto">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Image */}
        <img
          src={item.cart_image_small}
          alt={item.title}
          className="w-64 h-auto rounded-lg shadow-lg"
        />

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-3xl font-bold text-black dark:text-white">
            {item.title}
          </h1>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            <strong>Year:</strong> {item.year}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
