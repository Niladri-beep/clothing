"use client"
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: "Half Sleeve",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", // Replace with correct image path
    link: "/categories/half-sleeve",
    bgColor: "bg-blue-600",
  },
  {
    name: "Full Sleeves",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", 
    link: "/categories/full-sleeves",
    bgColor: "bg-indigo-600",
  },
  {
    name: "Solids",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", 
    link: "/categories/solids",
    bgColor: "bg-teal-600",
  },
  {
    name: "Oversize",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", 
    link: "/categories/oversize",
    bgColor: "bg-green-600",
  },
  {
    name: "Movie Merchandise",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", 
    link: "/categories/movie-merchandise",
    bgColor: "bg-pink-600",
  },
  {
    name: "Mobile Covers",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", 
    link: "/categories/mobile-covers",
    bgColor: "bg-brown-600",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16">
    <h2 className="text-center text-3xl font-bold mb-8">I'm Looking For..</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
      //  <Link href={category.link} key={index}>
          <a className={`relative block p-4 rounded-lg shadow-lg ${category.bgColor}`}>
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
              <span className="text-white text-lg font-semibold">{category.name}</span>
            </div>
          </a>
      //  </Link>
      ))}
    </div>
  </section>
  );
};

export default CategoryGrid;
