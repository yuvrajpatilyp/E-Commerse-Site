import React from "react";

const CheckoutPage = () => {
  return (
   <div className="flex justify-start pl-50 pr-10 py-36 gap-36 ">

      {/* Left Side - Billing Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name*
            </label>
            <input
              type="text"
              className="w-[470px] h-[50px] bg-gray-100 rounded-md p-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              className="w-[470px] h-[50px] bg-gray-100 rounded-md p-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Street Address*
            </label>
            <input
              type="text"
              className="w-[470px] h-[50px] bg-gray-100 rounded-md p-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              className="w-[470px] h-[50px] bg-gray-100 rounded-md p-2 outline-none"
            />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700">
              Town/City*
            </label>
            <input
              type="text"
              className="w-[470px] h-[50px] bg-gray-100 rounded-md p-2 outline-none"
            />
            </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="text"
              className="w-[470px] h-[50px] bg-gray-100 rounded-md p-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              className="w-[470px] h-[50px] bg-gray-100 rounded-md p-2 outline-none"
            />
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="saveInfo"
              className="w-4 h-4 accent-red-500 rounded"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-600">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

      {/* Right Side - Order */}
      
      <div className="w-[400px] space-y-4 py-24">
        {/* Product */}
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-2">
           
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
           
            <p>H1 Gamepad</p>
          </div>
          <p>$1100</p>
        </div>

        <hr />

        {/* Subtotal and Shipping */}

        <div className="flex justify-between text-sm">
          <p>Subtotal:</p>
          <p>$1750</p>
        </div>

        <div className="flex justify-between text-sm">
          <p>Shipping:</p>
          <p>Free</p>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <p>Total:</p>
          <p>$1750</p>
        </div>

        {/* Payment Options */}

        <div className="pt-2">

          <div className="flex items-center justify-between py-2 mb-2">
          <div className="flex items-center space-x-2 mb-2">
            <input type="radio" name="payment" id="bank" />
            <label htmlFor="bank" className="text-sm font-medium">
              Bank
            </label>
            </div>

            <div className="flex items-center space-x-2">
              <img className="h-6"
              src="/src/assets/Bkash.png" />

              <img className="h-6"
              src="src/assets/Visa.png" alt="Visa"  />

              <img className="h-6"
              src="src/assets/Mastercard.png" alt="MasterCard" />
              <img className="h-6"
              src="src/assets/Nagad.png" alt="Nagad"  />

            </div>

            </div>



          <div className="flex items-center space-x-2">
            <input type="radio" name="payment" id="cod"  />
            <label htmlFor="cod" className="text-sm font-medium">
              Cash on delivery
            </label>
          </div>
         </div>

        {/* Coupon Section */}
         <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border border-gray-300 rounded-md p-2 w-[300px] h-14 outline-none"
          />
          <button className="bg-red-500 text-white px-4 rounded-md hover:bg-red-600 w-[180px] h-14 font-bold">
            Apply Coupon
          </button>
        </div>

        {/* Place Order Button */}
        <button className="bg-red-500 text-white rounded-md hover:bg-red-600 w-[180px] h-14 font-bold mt-4">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
