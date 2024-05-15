"use client";
import { Button } from "@/components/Button";
import { useState } from "react";
export default function Signin() {
    const [username, setUsername] = useState("");
    return (
        <div className='h-screen flex justify-center flex-col'>
            <div className='flex justify-center'>
                <a
                    href='#'
                    className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '
                >
                    <div>
                        <div className='px-10'>
                            <div className='text-3xl font-extrabold'>
                                Sign in
                            </div>
                        </div>
                        <div className='pt-2'>
                            <label className='block mb-2 text-sm text-black font-semibold pt-4'>
                                PSID
                            </label>
                            <input
                                type={"text"}
                                id='first_name'
                                className='bg-gray-50 border border-[#ff0006]-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                placeholder={"PSID"}
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label className='block mb-2 text-sm text-black font-semibold pt-4'>
                                Password
                            </label>
                            <input
                                type={"password"}
                                id='first_name'
                                className='bg-gray-50 border border-[#ff0006]-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                placeholder={"******"}
                                required
                            />
                            <Button data={username} />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
