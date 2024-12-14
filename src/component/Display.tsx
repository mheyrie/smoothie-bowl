import React, { useState } from "react";
import Header from "./Header";

type Fruit = {
  name: string;
  color: string;
  description: string;
  image: string; // New property for image path
};

const fruits: Fruit[] = [
  {
    name: "Banana",
    color: "bg-[#FFF7CF]",
    description: "Bananas are soft and rich in potassium.",
    image: "/images/banana.png",
  },
  {
    name: "Strawberry",
    color: "bg-[#FFE1E2]",
    description: "Strawberries are juicy and sweet.",
    image: "/images/strawberry.png",
  },
  {
    name: "Blueberry",
    color: "bg-[#ECFFCC]",
    description: "Blueberries are juicy and high in antioxidants.",
    image: "/images/Bluberry.png",
  },
  {
    name: "Banana",
    color: "bg-[#FFCBEA]",
    description: "Oranges are high in vitamin C.",
    image: "/images/Banana.png",
  },
];

export default function FruitDisplay() {
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);

  return (
    <>
      <div
        className={`${
          selectedFruit ? selectedFruit.color : "bg-PrimaryY"
        } min-h-screen flex flex-col items-center transition-colors duration-300`}
      >
        <Header />
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <h1 className="text-4xl font-bold mb-6">Sip Your Way to Bliss Taste</h1>
          <div className="flex space-x-4">
            {fruits.map((fruit) => (
              <button
                key={fruit.name}
                onClick={() => setSelectedFruit(fruit)}
                className="px-4 py-2 rounded-lg font-semibold flex items-center justify-center"
                style={{ backgroundColor: fruit.color }}
              >
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="h-12 w-12 object-contain"
                />
              </button>
            ))}
          </div>
          {selectedFruit && (
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-semibold">{selectedFruit.name}</h2>
              <p className="text-lg mt-2">{selectedFruit.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
