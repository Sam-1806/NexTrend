import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/types/brand";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Shoes",
    competitorsRange: "₹1000 - ₹3000", // Example competitors price range
    category: "Footwear",
    stock: 120,
    supplier: "Nike",
    rating: 4.5,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Water Bottle",
    competitorsRange: "₹500 - ₹1000", // Example competitors price range
    category: "Accessories",
    stock: 200,
    supplier: "Hydro Flask",
    rating: 4.2,
  },
  // Other brand data entries...
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Top Products
      </h4>

      <div>
        {brandData.map((brand, key) => (
          <Link
            href="/"
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={brand.logo}
                alt={brand.name}
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {brand.name}
                </h5>
                <p className="text-sm text-black dark:text-white">
                  Category: {brand.category}
                </p>
                <p className="text-sm text-black dark:text-white">
                  Stock: {brand.stock}
                </p>
                <p className="text-sm text-black dark:text-white">
                  Supplier: {brand.supplier}
                </p>
                <p className="text-sm text-black dark:text-white">
                  Rating: {brand.rating}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-medium text-black dark:text-white">
                  Competitors Price Range: {brand.competitorsRange}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
