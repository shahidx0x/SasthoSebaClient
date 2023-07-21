/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import {HiOutlineCurrencyBangladeshi} from "react-icons/hi"



const UserCarts = () => {
  const [userCarts] = useCarts();
  const { user } = useAuth();
  const total = userCarts
    ?.filter((prod) => prod.payload.email === user.email)
    .map((prod) => (prod.payload.price = +prod.payload.price))
    .reduce((a, b) => a + b, 0);
  const RedirectPage = (cus_name, ammount, cus_mail) => {
    window.location.replace(
      `https://api-sastho-seba.onrender.com/payment/1/${ammount}/${cus_name}/${cus_mail}/ssl`
    );
  };

  return (
    <div class="mt-8">
      <div class="mx-10 flex w-full">
        <div class="w-full bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">
              {
                userCarts?.filter((prod) => prod.payload.email === user.email)
                  .length
              }{" "}
              Items
            </h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {userCarts
            ?.filter((e) => e.payload.email === user.email)
            .map((cart) => (
              <CartsCard key={cart._id} props={cart} />
            ))}

          <Link
            to="/medicine-shop"
            class="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" class="w-3/4 py-10 px-10 -mr-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">
              Items{" "}
              {
                userCarts?.filter((prod) => prod.payload.email === user.email)
                  .length
              }
            </span>
            <span class="font-semibold text-md flex items-center">
              <HiOutlineCurrencyBangladeshi />
              {total}
            </span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Inside Dhaka - 50 Tk</option>
              <option>OutSide Dhaka - 100 Tk</option>
            </select>
          </div>
          <div class="py-3">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Shiping Address
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter Shiping Address"
              class="p-2 text-sm w-full"
            />
          </div>
         
          <div class="py-3">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div>
          <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span className="flex items-center">
                <HiOutlineCurrencyBangladeshi />
                {total}
              </span>
            </div>
            <button
              onClick={() => RedirectPage(user.displayName, total, user.email)}
              class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCarts;

const CartsCard = ({ props }) => {
  const removeCart = (id) => {
    axios.delete(`https://api-sastho-seba.onrender.com/carts/${id}`);
  };
  return (
    <>
      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="flex w-2/5">
          <div class="w-20">
            <img class="h-24" src={props.payload.med_img} alt="" />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-sm">{props.payload.med}</span>
            <span class="text-red-500 text-xs">{props.payload.med_d}</span>
            <a
              href="#"
              class="font-semibold hover:text-red-500 text-gray-500 text-xs"
              alt=""
              onClick={() => removeCart(props._id)}
            >
              Remove
            </a>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <span class="text-center  font-semibold text-sm">{"1"}</span>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm flex items-center">
          <HiOutlineCurrencyBangladeshi />
          {props.payload.price}
        </span>
        <span class="text-center w-1/5 font-semibold text-sm flex items-center">
          <HiOutlineCurrencyBangladeshi />
          {props.payload.price}
        </span>
      </div>
    </>
  );
};
