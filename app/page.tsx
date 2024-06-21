"use client";
import Image from "next/image";

const pizzaIngredients = [
  { name: "Pizza 1", ingredients: "Tomato, cheese, mozzarella, basil" },
  { name: "Pizza 2", ingredients: "Tomato, cheese, pepperoni, onions" },
  { name: "Pizza 3", ingredients: "Tomato, cheese, jambon, olives" },
  { name: "Pizza 4", ingredients: "Tomato, cheese, bacon, ham" },
  // Add more pizzas as needed
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Bienvenue chez Pizza Paradise</h1>
      <div className="grid grid-cols-4 gap-4">
        {pizzaIngredients.map((pizza) => (
          <div
            key={pizza.name}
            className="card p-4 border border-gray-200 rounded-lg"
          >
            <Image
              src="/pizza.jpg"
              alt={pizza.name}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h2 className="mt-2 text-lg font-semibold">{pizza.name}</h2>
            <p className="mt-1 text-sm">{pizza.ingredients}</p>
          </div>
        ))}
      </div>
      <button
        className="button-custom"
        onClick={() => (window.location.href = "/contact")}
      >
        Commander maintenant
      </button>
    </main>
  );
}
