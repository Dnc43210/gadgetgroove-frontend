import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-2 py-2">
          <div className="px-10">
            <h1 className="text-md text-gray-600 pb-2">Go Back</h1>
            <h1 className="text-3xl font-bold pb-3">Check out</h1>
            <h1 className="text-lg font-semibold text-gray-600 pb-2">
              Contact Information
            </h1>
            <input
              type="text"
              className=" bg-transparent mb-[10px] px-4 py-2 rounded-xl w-[83%]"
              placeholder="Email"
            />
            <div className="flex text-xs text-gray-600 pb-2 space-x-2">
              <input type="checkbox" />
              <h1>Email me with news and offers.</h1>
            </div>
            <h1 className="text-lg font-semibold text-gray-600">
              Shipping Details
            </h1>
            <div className="flex flex-col justify-center items-start pt-2 text-gray-600">
              <input
                type="text"
                className="bg-transparent mb-[20px] px-4 py-2 rounded-xl w-[83%]"
                placeholder="Firstname"
              />
              <input
                type="text"
                className="bg-transparent mb-[20px] px-4 py-2 rounded-xl w-[83%]"
                placeholder="Lastname"
              />
              <input
                type="text"
                className="bg-transparent mb-[20px] px-4 py-2 rounded-xl w-[83%]"
                placeholder="Address"
              />
              <input
                type="text"
                className="bg-transparent mb-[20px] px-4 py-2 rounded-xl w-[83%]"
                placeholder="Address (line 02)"
              />
            </div>
            <div className="flex space-x-4 text-gray-600">
              <select
                className="bg-transparent mb-[20px] px-4 pb-2 rounded-xl w-[40%]"
                name=""
                id=""
              >
                <option value="">City</option>
              </select>
              <select
                className="bg-transparent mb-[20px] px-4 py-2 rounded-xl w-[40%]"
                name=""
                id=""
              >
                <option value="">Region</option>
              </select>
            </div>
            <div className="flex   space-x-4 ">
              <select
                className="bg-transparent mb-[20px] px-4 py-2 rounded-xl w-[40%]"
                name=""
                id=""
              >
                <option value="">Country</option>
              </select>
              <select
                className="bg-transparent mb-[20px] px-4 py-2 rounded-xl w-[40%]"
                name=""
                id=""
              >
                <option value="">Zip Code</option>
              </select>
            </div>
            <input
              type="text"
              className="bg-transparent mb-[10px] px-4 py-2 rounded-xl w-[83%]"
              placeholder="Phone Number"
            />
            <div className="flex text-xs text-gray-600 pt-2 space-x-2">
              <input type="checkbox" />
              <h1>Save this information for next time.</h1>
            </div>
          </div>
          <div className="a">
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Total Items</p>
                {/* <p class="text-gray-700">{cart.totalProducts}</p> */}
              </div>
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Total Quantity</p>
                {/* <p class="text-gray-700">{cart.totalQuantity}</p> */}
              </div>
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                {/* <p class="text-gray-700">${cart.total}</p> */}
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">$4.99</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  {/* <p class="mb-1 text-lg font-bold">${cart.total + 4.99} USD</p> */}
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link to="/dispatch">
                <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Payment;
