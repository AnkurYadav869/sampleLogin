"use client";
interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    setChange?: any;
}

export default function LabelledInput({
    label,
    placeholder,
    type,
    setChange,
}: LabelledInputType) {
    return (
        <div>
            <label className='block mb-2 text-sm text-black font-semibold pt-4'>
                {label}
            </label>
            <input
                type={type || "text"}
                id='first_name'
                className='bg-gray-50 border border-[#ff0006]-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder={placeholder}
                required
                onChange={(e) => setChange(e.target.value)}
            />
        </div>
    );
}
