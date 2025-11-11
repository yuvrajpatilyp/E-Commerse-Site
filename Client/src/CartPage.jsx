import React, { useState } from "react";
import NavigationBar from "./Reusable/NavigationBar";

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, qty: 1, img: "src/assets/IPS LCD monitor.png" },
    { id: 2, name: "H1 Gamepad", price: 550, qty: 1, img: "src/assets/HAVIT HV-G92 Gamepad.png" },
  ]);

  const updateQty = (id, qty) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavigationBar />

      <div className="w-full px-10 py-10">
        <h2 className="text-xl mb-6 text-gray-600">Home / Cart</h2>

        <table className="w-full bg-white shadow mb-8 border">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="py-3 px-3">Product</th>
              <th className="py-3 px-3">Price</th>
              <th className="py-3 px-3">Quantity</th>
              <th className="py-3 px-3">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b h-20">
                <td className="flex items-center gap-4 py-3 px-3">
                  <img src={item.img} alt="" className="w-16" />
                  {item.name}
                </td>
                <td className="px-3">${item.price}</td>
                <td className="px-3">
                  <select
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                    className="border p-1 rounded w-16"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 font-semibold">${item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-wrap justify-between items-start gap-8">
          <div>
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-4 py-2 rounded"
            />
            <button className="bg-red-500 text-white px-4 py-2 ml-2 rounded">
              Apply Coupon
            </button>
          </div>

          <div className="w-80">
            <button className="border px-4 py-2 w-full rounded hover:bg-gray-100 mb-4">
              Update Cart
            </button>

            <div className="border p-6 bg-white shadow rounded space-y-3">
              <h3 className="text-lg font-semibold border-b pb-3">Cart Total</h3>

              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-medium">Free</span>
              </div>

              <div className="flex justify-between font-bold text-lg border-t pt-3">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>

              <button className="bg-red-500 text-white w-full py-2 mt-4 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 