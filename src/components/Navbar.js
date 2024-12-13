import React from "react";

export default function Navbar(){
    return(
        <div className="bg-white shadow-lg py-4 flex justify-center">
            <div className="w-4/5 flex justify-between items-center">
                {/* start */}
                <div className="text-2xl font-bold flex">
                    <span className="text-red-400">food</span>
                    <span className="text-orange-400">wagon</span>
                </div>
                {/* center */}
                <div className="flex items-center">
                    <span className="font-bold">Deliver to:</span>
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-5 text-orange-400" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                        <span>Current Location</span>
                        <span className="font-bold">Mohammadpur Bus Stand, Dhaka</span>
                    </span>
                </div>
                {/* end */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-5 text-orange-400" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <span className="text-lg">Search Food</span>
                    </div>
                    <button className="px-4 py-3 flex gap-2 font-bold text-orange-400 bg-white shadow-lg shadow-orange-300/50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-6" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}