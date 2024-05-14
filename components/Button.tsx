"use client";
import { useRouter } from "next/navigation";
export const Button = ({ data }: any) => {
    const router = useRouter();
    const handler = () => {
        router.push("/userData?psid=" + data);
    };
    return (
        <button
            className='mt-8 w-full text-white bg-[#ff0006] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
            onClick={handler}
        >
            Sign in
        </button>
    );
};
