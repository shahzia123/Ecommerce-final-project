import React,{useEffect} from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { resetCartAsync } from "../features/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/Auth/AuthSlice"
import { resetOrder } from "../features/Order/OrderSlice";
import {
  CheckBadgeIcon,
  
} from '@heroicons/react/24/outline';

export default function OredrSuccessPage({order}) {
    const params=useParams()
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);
    useEffect(()=>{
        // reset cart
        dispatch(resetCartAsync(user.id))
        // reset currentOrder
        dispatch(resetOrder())
       },[dispatch,user])
    return (
       
      <>
        {!params.id && <Navigate to ="/" replace="true"></Navigate>}
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-teal-600 ">
            <CheckBadgeIcon className="h-120 w-120 ml-8"
                            aria-hidden="true" ></CheckBadgeIcon></p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order Successfully Placed</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Order # {params.id}</p>
          <p className="mt-6 text-base leading-7 text-gray-600">
          You can check your order in My Account : My Orders
        </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Go back home
            </Link>
            {/* <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </div>
      </main>
      </>
        
    )
}
