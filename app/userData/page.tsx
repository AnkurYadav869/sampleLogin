"use client";

import LabelledInput from "@/components/LabelledInput";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function UserData() {
    const router = useRouter();

    const [username, setUsername] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [branch, setBranch] = useState("");
    const [cardType, setCardType] = useState("");
    const [token, setToken] = useState("");
    const searchParams = useSearchParams();

    const saveToExcel = async () => {
        let code = Math.ceil(Math.random() * 100000);
        let xtoken = `CAR/${branch}/PRM/${code}`;
        setToken(xtoken);
        let data = {
            psid: searchParams.get("psid"),
            branch,
            date: dob,
            cardtype: cardType,
            token: xtoken,
        };
        const fileName = "data.xlsx";
        const response = await fetch("/api/excel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data, fileName }),
        });

        if (response.ok) {
            console.log("Data appended to Excel file");
        } else {
            console.error("Error appending data to Excel file");
        }
    };
    return (
        <>
            <div className='flex justify-between px-5 items-center'>
                <div className='text-3xl' onClick={() => router.push("/")}>
                    HSBC
                </div>
                <div className='flex'>
                    <button
                        className='mt-8 w-full text-white bg-[#ff0006] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
                        onClick={() => router.push("/")}
                    >
                        Logout
                    </button>
                    <a
                        download={true}
                        href={"./data.xlsx"}
                        className='mt-8 w-full text-white bg-[#ff0006] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
                    >
                        Download
                    </a>
                </div>
            </div>
            <div className=' flex justify-center'>
                <div>
                    <LabelledInput
                        label='UserName'
                        placeholder='Customer Name'
                        type='text'
                        setChange={setUsername}
                    />
                    <label className='block mb-2 text-sm text-black font-semibold pt-4'>
                        Branch
                    </label>
                    <select
                        className='border w-full p-2.5'
                        onChange={(e) => {
                            setBranch(e.target.value);
                        }}
                    >
                        <option defaultValue={""}>Select Branch</option>
                        <option value={"ADH"}>ADH</option>
                        <option value={"AHD"}>AHD</option>
                        <option value={"BDR"}>BDR</option>
                        <option value={"BOM"}>BOM</option>
                        <option value={"BVL"}>BVL</option>
                        <option value={"CHB"}>CHB</option>
                        <option value={"JVP"}>JVP</option>
                        <option value={"PBH"}>PBH</option>
                        <option value={"PDR"}>PDR</option>
                    </select>
                    <LabelledInput
                        label='Date'
                        placeholder='date of birth'
                        type='date'
                        setChange={setDob}
                    />
                    <label className='block mb-2 text-sm text-black font-semibold pt-4'>
                        Card Type
                    </label>
                    <select
                        className='border w-full p-2.5'
                        onChange={(e) => {
                            setCardType(e.target.value);
                        }}
                    >
                        <option defaultValue={""}>Select Card Type</option>
                        <option value='premier'>Premier</option>
                        <option value='cashback'>Cash Back</option>
                        <option value={"visaPlatinum"}>Visa Platinum</option>
                    </select>
                    <button
                        className='mt-8 w-full text-white bg-[#ff0006]  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
                        onClick={saveToExcel}
                    >
                        Submit
                    </button>
                    Token :<p>{token}</p>
                </div>
            </div>
        </>
    );
}
