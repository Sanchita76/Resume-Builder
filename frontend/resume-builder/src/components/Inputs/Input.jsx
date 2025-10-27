import React, { useState } from 'react';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa6';

const Input=({value,onChange,label,placeholder,type})=>{
    const [showPassword,setShowPassword]=useState(false);

    const toggleShowPassword=()=>{
        setShowPassword(!showPassword);
};

    return <div>
        <label className="text-[13px] text-slate-800">{label}</label>

        <div className="input-box bg-gray-100 p-2 rounded-md flex items-center">
           <input
            type={
               type === "password" ? (showPassword ? "text" : "password") : (type || "text")
            }
            placeholder={placeholder}
            className="w-full bg-transparent outline-none text-sm"
            value={value}
            onChange={(e) => onChange(e)}
            />

               {type === "password" && (
                <>
               {showPassword ? (
                <FaRegEye
                size={18}
                className="text-gray-500 cursor-pointer"
                onClick={() => toggleShowPassword()}
            />
          ) : (
        <FaRegEyeSlash
          size={18}
          className="text-slate-400 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </>
  )}
</div>
        </div>
};
export default Input;