'use client'

import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";
import  Link  from "next/link";

export default function Navbar({ loginStatus }) {
    return (
        <div className="fixed w-full bg-base-300 z-50 drop-shadow-2xl">
            <div className="drawer px-56">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link href="/">
                        MERN Store
                        </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                            <li>
                                <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content flex flex-col">
                                    <div className="flex-none">
                                        {/* Page content here */}
                                        <label htmlFor="my-drawer-4" className="m-0">
                                                <HiOutlineShoppingBag className="w-5 h-5"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="drawer-side z-50">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <div className="p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li>
                                {/* <details>
                                <summary>
                                    Brands
                                </summary>
                                <ul className="dropdown-content  p-2 bg-base-100 top-4 right-0 z-50 drop-shadow-2xl">
                                   <div className="grid grid-cols">
                                        <div className="col-span-1">
                                            SHOP BY BRAND
                                        </div>
                                        <div className="col-span-3">
                                            SEE All
                                        </div>
                                   </div>
                                </ul>
                                </details> */}
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" >
                                    <summary>
                                    Brands
                                </summary>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-50 menu p-2  shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Shop
                                </Link>
                            </li>
                            {
                                loginStatus?
                                <li>
                                    <details>
                                    <summary>
                                        Account
                                    </summary>
                                    <ul className="p-2 bg-base-100 rounded-2 z-50 top-4 drop-shadow-2xl">
                                        <li>
                                            <Link href="/login">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li><a>Sign Up</a></li>
                                    </ul>
                                    </details>
                                </li>
                                :
                                <li>
                                    <details>
                                    <summary>
                                        Welcome!
                                    </summary>
                                    <ul className="p-2 bg-base-100 rounded-2 z-50 top-4 drop-shadow-2xl">
                                        <li>
                                            <Link href="/login">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li><a>Sign Up</a></li>
                                    </ul>
                                    </details>
                                </li>
                            }

                        </ul>
                    </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <ul className="menu p-4 ps-10 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <div className="my-10 text-xl">Shop By Category</div>
                        <li><a className="text-lg">Bags</a></li>
                        <li><a className="text-lg">Men</a></li>
                        <li><a className="text-lg">Shoes</a></li>
                        <li><a className="text-lg">Perfumes</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}