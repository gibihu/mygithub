import react from "react";

export default function Hero(){
    return(
        <section className="bg-gradient-to-b from-yellow-400 to-yellow-500 flex justify-center">
            <div className="flex justify-center w-4/5 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                    {/* items 1 */}
                    <div className="order-2 md:order-1 flex flex-col gap-4 ">
                        <span className="text-7xl text-white font-bold">Are you starving?</span>
                        <span className="text-xl text-start">Within a few clicks, find meals that are accessible near you</span>

                        <div className="bg-white rounded-lg shadow-md shadow-orange-400/40 flex flex-col p-4 gap-4">

                            <div className="flex gap-4">
                                <div className="bg-orange-300/40 font-bold text-orange-400 flex gap-2 px-2 py-1 rounded text-sm items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5" fill="none">
                                        <circle cx="19.5" cy="16.5" r="2.5" stroke="currentColor" stroke-width="1.5" />
                                        <circle cx="4.5" cy="16.5" r="2.5" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M20.2348 7.86957C21.5163 9.42897 21.9615 10.9117 21.9994 11.6957C21.3294 11.3893 20.5771 11.2174 19.7821 11.2174C17.3369 11.2174 15.1419 12.8433 14.6177 15.0092C14.4924 15.527 14.4298 15.7859 14.2937 15.8929C14.1577 16 13.9382 16 13.4994 16H10.6206C10.1784 16 9.95733 16 9.82074 15.8915C9.68414 15.7829 9.62431 15.5249 9.50465 15.0088C9.00893 12.8708 6.99671 11.0124 4.90197 11.1698C4.69089 11.1857 4.58535 11.1936 4.51294 11.1775C4.44054 11.1613 4.36764 11.1202 4.22185 11.0378C3.80097 10.8001 3.37061 10.5744 2.95793 10.3227C2.38299 9.97198 2.02315 9.35549 2.00053 8.68241C1.98766 8.29933 2.20797 7.91865 2.65301 8.02338L9.07369 9.53435C9.55601 9.64785 9.79717 9.70461 10.0044 9.66597C10.2116 9.62734 10.4656 9.4536 10.9737 9.10614C12.262 8.22518 14.3037 7.39305 16.339 8.12822C16.8961 8.32947 17.1747 8.4301 17.3334 8.43513C17.4921 8.44016 17.7247 8.37247 18.1899 8.23707C18.9431 8.01785 19.6521 7.90409 20.2348 7.86957ZM20.2348 7.86957C19.4316 6.89211 18.2997 5.88452 16.7336 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="">Delivery</span>
                                </div>
                                <div className="bg-zinc-300/40 font-bold text-zinc-500 flex gap-2 px-2 py-1 rounded text-sm items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5" fill="none">
                                        <path d="M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C20.9033 11.0876 20.4982 11.6081 20.3919 12.2134L19.7993 15.5878C19.5386 17.0725 19.4495 19.1943 18.1484 20.2402C17.1938 21 15.8184 21 13.0675 21H10.9325C8.18162 21 6.8062 21 5.8516 20.2402C4.55052 19.1942 4.46138 17.0725 4.20066 15.5878L3.60807 12.2134C3.50177 11.6081 3.09673 11.0876 2.51841 10.8132C2.37896 10.747 2.27952 10.6235 2.24894 10.4784C2.07874 9.67075 1.6264 8.5469 2.63812 8.10084C2.86684 8 3.17922 8 3.80397 8H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M14 12L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.5 11L10 3M15 3L17.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <span className="">Pickup</span>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="flex items-center gap-2">
                                <div className="bg-zinc-100 flex px-4 py-2 w-full rounded gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-5 text-red-400" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                    <span className="text-zinc-400">Enter Your Address</span>
                                </div>
                                <button className="bg-red-500 py-4 px-6 rounded-lg text-white flex text-sm text-nowrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                    Find Food
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* items 2 */}
                    <div className="order-1 md:order-2">
                        <img src="https://www.pngkey.com/png/full/340-3400429_italian-food-top-view-png.png" className="-mb-32 ml-20"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}