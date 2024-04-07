import { useUserContext } from "../context/UserContext";
import "../../src/App.css";
import AddTransaction from "../components/Client/AddTransaction";
import { Link } from "react-router-dom";

export default function Home() {
    const context = useUserContext();
    return (
        <>
            <div className="flex">
                <div className="w-[24em]">
                    <div className="flex relative m-12 mt-16">
                        <div className="rounded-xl overflow-hidden relative bg-white text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-md transition-all duration-500 shadow-sm">
                            <div className="text-indigo-800 group-hover:scale-105 transition-all">
                                <svg
                                    className="w-16 h-16"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="group-hover:pb-10 transition-all duration-500 delay-200">
                                <h1 className="font-semibold text-indigo-800">
                                    {context.user.firstname}{" "}
                                    {context.user.lastname}
                                </h1>
                                <p className="text-indigo-800 text-sm">
                                    MemberShip:{" "}
                                    <span className="font-semibold">GOLD</span>{" "}
                                </p>
                            </div>
                            <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                                <div className="flex gap-3 text-2xl bg-white text-indigo-800 p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
                                    <a className="hover:scale-110 transition-all duration-500 delay-200">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 1024 1024"
                                        >
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                                        </svg>
                                    </a>
                                     
                                    <Link to={"/updateprofile"} className="hover:scale-110 transition-all duration-500 delay-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="28"
                                            height="28"
                                            viewBox="0,0,256,256"
                                            style={{ fill: "#000000" }}
                                        >
                                            <g
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="none"
                                                strokeWidth="1"
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit="10"
                                                strokeDasharray=""
                                                strokeDashoffset="0"
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{
                                                    mixBlendMode: "normal",
                                                }}
                                            >
                                                <g transform="scale(5.33333,5.33333)">
                                                    <path
                                                        d="M5.034,43.754l2.928,-11.7c0.044,-0.175 0.135,-0.336 0.263,-0.464l23.39,-23.395c1.599,-1.599 4.196,-1.599 5.795,0l4.392,4.392c1.601,1.603 1.604,4.2 -0.001,5.799l-23.39,23.395c-0.128,0.128 -0.289,0.219 -0.465,0.263l-11.7,2.924c-0.731,0.182 -1.395,-0.482 -1.212,-1.214z"
                                                        fill="#01009f"
                                                    ></path>
                                                    <path
                                                        d="M5.001,41.985v2.001h1.001v-2.001z"
                                                        fill="#01009f"
                                                    ></path>
                                                    <path
                                                        d="M42.001,13.539v2.001h1.001v-2.001z"
                                                        fill="#01009f"
                                                    ></path>
                                                    <path
                                                        d="M6.005,41.997l2.928,-11.7l23.39,-23.395c1.208,-1.208 3.172,-1.208 4.38,0l4.392,4.392c1.212,1.212 1.212,3.176 0,4.384l-23.39,23.395z"
                                                        fill="#ffffff"
                                                    ></path>
                                                    <path
                                                        d="M6.005,41.997l1.756,-7.015l5.259,5.259z"
                                                        fill="#01009f"
                                                    ></path>
                                                    <path
                                                        d="M5.034,41.754l2.928,-11.7c0.044,-0.175 0.135,-0.336 0.263,-0.464l23.39,-23.395c1.599,-1.599 4.196,-1.599 5.795,0l4.392,4.392c1.601,1.603 1.604,4.2 -0.001,5.799l-23.39,23.395c-0.128,0.128 -0.289,0.219 -0.465,0.263l-11.7,2.924c-0.731,0.182 -1.395,-0.482 -1.212,-1.214zM7.379,40.623l9.813,-2.453l23.196,-23.199c0.819,-0.817 0.821,-2.148 -0.001,-2.969l-4.392,-4.392c-0.817,-0.817 -2.148,-0.817 -2.965,0l-23.195,23.199z"
                                                        fill="#01009f"
                                                    ></path>
                                                    <path
                                                        d="M33.807,21.506l-7.312,-7.312c-0.391,-0.391 -0.391,-1.024 0,-1.415c0.391,-0.391 1.024,-0.391 1.415,0l7.312,7.312c0.391,0.391 0.391,1.024 0,1.415c-0.391,0.391 -1.024,0.391 -1.415,0z"
                                                        fill="#01009f"
                                                    ></path>
                                                    <path
                                                        d="M36.731,18.582l-7.312,-7.312c-0.391,-0.391 -0.391,-1.024 0,-1.415c0.391,-0.391 1.024,-0.391 1.415,0l7.312,7.312c0.391,0.391 0.391,1.024 0,1.415c-0.391,0.391 -1.024,0.391 -1.415,0z"
                                                        fill="#01009f"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                    <a className="hover:scale-110 transition-all duration-500 delay-200">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 960 1000"
                                        >
                                            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <AddTransaction />
                </div>
                <div>
                    <h1 className="text-2xl mt-12 mx-16">My wallet</h1>

                    <div className="visa-card">
                        <div className="logoContainer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="23"
                                height="23"
                                viewBox="0 0 48 48"
                                className="svgLogo"
                            >
                                <path
                                    fill="#ff9800"
                                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                                ></path>
                                <path
                                    fill="#d50000"
                                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                                ></path>
                                <path
                                    fill="#ff3d00"
                                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                                ></path>
                            </svg>
                        </div>
                        <div className="number-container">
                            <label className="input-label" for="cardNumber">
                                WALLET NUMBER
                            </label>
                            <input
                                className="inputstyle"
                                id="cardNumber"
                                placeholder={
                                    context.user.wallet
                                        ? context.user.wallet.id
                                        : "No wallet ID"
                                }
                                name="cardNumber"
                                type="text"
                            />
                        </div>

                        <div className="name-date-cvv-container">
                            <div className="name-wrapper">
                                <label
                                    className="input-label flex"
                                    for="holderName"
                                >
                                    YOUR CURRENT BALANCE
                                </label>
                                <input
                                    className="inputstyle font-semibold text-xl"
                                    id="holderName"
                                    placeholder={
                                        context.user.wallet
                                            ? context.user.wallet.balance
                                            : "No wallet"
                                    }
                                    type="text"
                                />
                            </div>

                            <div className="expiry-wrapper">
                                <label className="input-label" for="expiry">
                                    VALID THRU
                                </label>
                                <input
                                    className="inputstyle"
                                    id="expiry"
                                    placeholder="MM/YY"
                                    type="text"
                                />
                            </div>
                            <div className="cvv-wrapper">
                                <label className="input-label" for="cvv">
                                    CVV
                                </label>
                                <input
                                    className="inputstyle"
                                    placeholder="***"
                                    maxlength="3"
                                    id="cvv"
                                    type="password"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="crd work ml-[120px]">
                        <div class="img-section">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="77"
                                width="76"
                            >
                                <path
                                    fill-rule="nonzero"
                                    fill="#3F9CBB"
                                    d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"
                                ></path>
                            </svg>{" "}
                        </div>
                        <div class="crd-desc">
                            <div class="crd-header">
                                <div class="crd-title">Google Pay</div>
                                <div class="crd-menu">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                            </div>
                            <div class="crd-time">32hrs</div>
                            <p class="recent">Last Week-36hrs</p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 w-[500px] h-[500px]">
                    <div class="relative flex max-w-[500px] h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                        <div class="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
                            <h4 class="text-lg font-bold text-navy-700 dark:text-white">
                                Top Transactions This Month
                            </h4>
                            <button class="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                                See all
                            </button>
                        </div>
                        <div class="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
                            <table
                                role="table"
                                class="w-full min-w-[500px] overflow-x-scroll"
                            >
                                <thead>
                                    <tr role="row">
                                        <th
                                            colspan="1"
                                            role="columnheader"
                                            title="Toggle SortBy"
                                        >
                                            <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                                Name
                                            </div>
                                        </th>
                                        <th
                                            colspan="1"
                                            role="columnheader"
                                            title="Toggle SortBy"
                                        >
                                            <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                                Cost
                                            </div>
                                        </th>
                                        <th
                                            colspan="1"
                                            role="columnheader"
                                            title="Toggle SortBy"
                                        >
                                            <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                                Rating
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody role="rowgroup" class="px-4">
                                    <tr role="row">
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="flex items-center gap-2">
                                                <div class="h-[30px] w-[30px] rounded-full">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
                                                        class="h-full w-full rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <p class="text-sm font-medium text-navy-700 dark:text-white">
                                                    Transport
                                                </p>
                                            </div>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <p class="text-md font-medium text-gray-600 dark:text-white">
                                                10.00
                                            </p>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="mx-2 flex font-bold">
                                                <div class="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                                                    <div class="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-1/3"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role="row">
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="flex items-center gap-2">
                                                <div class="h-[30px] w-[30px] rounded-full">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1780&amp;q=80"
                                                        class="h-full w-full rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <p class="text-sm font-medium text-navy-700 dark:text-white">
                                                    Netflix
                                                </p>
                                            </div>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <p class="text-md font-medium text-red-600 dark:text-white">
                                                -120.00
                                            </p>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="mx-2 flex font-bold">
                                                <div class="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                                                    <div class="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-1/3"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role="row">
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="flex items-center gap-2">
                                                <div class="h-[30px] w-[30px] rounded-full">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1573766064535-6d5d4e62bf9d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1315&amp;q=80"
                                                        class="h-full w-full rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <p class="text-sm font-medium text-navy-700 dark:text-white">
                                                    Bilal EZZAIM
                                                </p>
                                            </div>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <p class="text-md font-medium text-green-600 dark:text-white">
                                                +100.00
                                            </p>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="mx-2 flex font-bold">
                                                <div class="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                                                    <div class="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-1/3"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role="row">
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="flex items-center gap-2">
                                                <div class="h-[30px] w-[30px] rounded-full">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1780&amp;q=80"
                                                        class="h-full w-full rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <p class="text-sm font-medium text-navy-700 dark:text-white">
                                                    Gas Station
                                                </p>
                                            </div>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <p class="text-md font-medium text-red-600 dark:text-white">
                                                -200.00
                                            </p>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="mx-2 flex font-bold">
                                                <div class="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                                                    <div class="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-1/3"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role="row">
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="flex items-center gap-2">
                                                <div class="h-[30px] w-[30px] rounded-full">
                                                    <img
                                                        src="https://i.ibb.co/7p0d1Cd/Frame-24.png"
                                                        class="h-full w-full rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <p class="text-sm font-medium text-navy-700 dark:text-white">
                                                    ATM
                                                </p>
                                            </div>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <p class="text-md font-medium text-red-600 dark:text-white">
                                                -387.00
                                            </p>
                                        </td>
                                        <td class="py-3 text-sm" role="cell">
                                            <div class="mx-2 flex font-bold">
                                                <div class="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                                                    <div class="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-1/3"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
