import React, { useContext, useState } from "react";
import Navbar from "../homepage/Navbar";
import Input from "./Input";
import { UseCartContext } from "../homepage/CartContext";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  // DECLARING VARIALES for calculation...

  const { cartItems, calculateTotal } = UseCartContext();
  const deliveryFee = 15;
  const subtotal = calculateTotal();
  const taxRate = 0.09;
  const tax = subtotal * taxRate;
  const total = subtotal + deliveryFee + tax;

  const formattedSubtotal = Number(subtotal).toFixed(2);
  const formattedTax = Number(tax).toFixed(2);
  const formattedTotal = Number(total).toFixed(2);
  const formattedDeliveryFee = Number(deliveryFee).toFixed(2);

  const [formData, setFormData] = useState(
    Input.reduce((acc, input) => ({ ...acc, [input.name]: "" }), {})
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log("Payment complete. Reference:", reference);
    setFormData(
      Input.reduce((acc, input) => ({ ...acc, [input.name]: "" }), {})
    );
  };

  const handlePaystackCloseAction = () => {
    console.log("Transaction was not completed, window closed.");
  };

  const componentProps = {
    email: formData.email,
    amount: Math.round(total * 100),
    publicKey: "pk_test_681f15a0a42752a2684f4a16013c9a0539cf6a60",
    text: "Pay Now",
    onSuccess: handlePaystackSuccessAction,
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="mb-[5rem] lg:mb-0">
      <Navbar />
      <div className="bg-[#198057] border h-[4rem] flex items-center justify-center gap-x-4">
        <h1 className="text-[#ffffff] text-[20px] lg:text-[24px] font-bold tracking-wider">
          CHECKOUT
        </h1>
      </div>

      <div className="container lg:mx-auto mt-[2rem] lg:flex lg:space-x-10 px-10">
        {/* LEFT POSITION FORM */}

        <main className=" border max-w-[100%] lg:w-1/2 mb-[3rem]">
          <h1 className="text-[20px] lg:text-[24px] text-center lg:text-left font-bold tracking-wider mb-5 bg-slate-200 p-2">
            Billing Details
          </h1>

          <form className="grid grid-cols-2 gap-4 px-6 max-w-4xl">
            {Input.map((item, index) => {
              const isLastItem = index === Input.length - 1;
              return (
                <label
                  key={item.id}
                  className={`relative block ${isLastItem ? "col-span-2" : ""}`}
                >
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={formData[item.name]}
                    onChange={handleInputChange}
                    className="h-[50px] my-2 w-full border-2 rounded-[12px] border-[#E5E5E5] outline-none focus:border-[#198057] focus:text-[#198057] transition duration-200 text-[13px] lg:text-[16px] px-2 lg:px-4 text-black input-field"
                    onInput={(e) =>
                      e.target.value
                        ? e.target.classList.add("has-content")
                        : e.target.classList.remove("has-content")
                    }
                  />
                </label>
              );
            })}
          </form>
        </main>

        {/* RIGHT POSITION PAYMENT CALCULATION */}

        <div className="lg:w-1/2 border">
          <h1 className="bg-slate-200 text-[20px] lg:text-[24px] text-center lg:text-left font-bold p-2">
            Cart Items ({cartItems.length})
          </h1>
          <main className="p-6">
            <div className="flex justify-between items-center text-[18px] font-bold">
              <h1>Subtotal:</h1>
              <h1>${formattedSubtotal}</h1>
            </div>
            <section className="border-t border-b text-[16px] my-4">
              <div className="flex justify-between items-center my-3">
                <p>Delivery Fee:</p>
                <p>${formattedDeliveryFee}</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p>Tax (9%):</p>
                <p>${formattedTax}</p>
              </div>
            </section>
            <div className="flex justify-between items-center text-[18px] font-bold mb-5">
              <h1>Total:</h1>
              <h1>
                ${formattedTotal} {console.log(formattedTotal)}
              </h1>
            </div>

            {/* PAYSTACK BUTTON... */}

            <>
              <PaystackButton
                {...componentProps}
                className="bg-slate-200 h-[50px] w-full rounded-full text-[1rem] font-bold text-[#000] outline-none"
              />
            </>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
