import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/types/brand";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Shoes",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
    category: "Footwear",
    stock: 120,
    supplier: "Nike",
    rating: 4.5,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Water Bottle",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
    category: "Accessories",
    stock: 200,
    supplier: "Hydro Flask",
    rating: 4.2,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Washing Powder",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
    category: "Household",
    stock: 150,
    supplier: "Tide",
    rating: 4.0,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Dry Fruits",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
    category: "Food",
    stock: 80,
    supplier: "Sunkist",
    rating: 4.3,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Quick Snacks",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
    category: "Food",
    stock: 60,
    supplier: "Nestle",
    rating: 4.1,
  },
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
                ₹{brand.revenues}
                </p>
                <p className="text-xs text-black dark:text-white">
                  Sales: {brand.sales}
                </p>
                <p className="text-xs text-black dark:text-white">
                  Visitors: {brand.visitors}
                </p>
                <p className="text-xs text-black dark:text-white">
                  Conversion: {brand.conversion}%
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
