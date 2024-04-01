export default function Navbar() {
    return (
        <div className="bg-base-300">
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
                    <div className="flex-1 px-2 mx-2">MERN Store</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                            <li>
                                <details>
                                <summary>
                                    Brands
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                                </details>
                            </li>
                            <li><a>Shop</a></li>
                            <li>
                                <details>
                                <summary>
                                    Welcome!
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Login</a></li>
                                    <li><a>Sign Up</a></li>
                                </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div> 
                <div className="drawer-side">
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