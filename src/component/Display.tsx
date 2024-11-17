import React, { useState } from "react";
import Header from "./Header";

type Fruit = {
  name: string;
  color: string;
  description: string;
};

const fruits: Fruit[] = [
  {
    name: "Apple",
    color: "bg-red-500",
    description: "Apples are sweet and crisp.",
  },
  {
    name: "Banana",
    color: "bg-yellow-400",
    description: "Bananas are soft and rich in potassium.",
  },
  {
    name: "Orange",
    color: "bg-orange-500",
    description: "Oranges are juicy and high in vitamin C.",
  },
  {
    name: "Blueberry",
    color: "bg-PrimaryY",
    description: "Berries are juicy and high in vitamin C.",
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
        <h1 className="text-4xl font-bold mb-6">Choose a Fruit</h1>
        <div className="flex space-x-4">
          {fruits.map((fruit) => (
            <button
              key={fruit.name}
              onClick={() => setSelectedFruit(fruit)}
              className="px-4 py-2 rounded-lg font-semibold"
              style={{ backgroundColor: fruit.color }}
            >
              {fruit.name}
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
    </>
  );
}
