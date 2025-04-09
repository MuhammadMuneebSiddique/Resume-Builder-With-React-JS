import React from "react";

export const NormalInputFields = ({ type, placeholder , name , width , label , value , setValue}) => {
    return (
    <div className={`input-fields font-Hanken_Grotesk w-[${width}] text-[10px] flex flex-col`}>
        <label className="text-[2em] pt-[1em] pb-[0.3em] font-semibold uppercase  font-Hanken_Grotesk">{label}</label>
        <input
            type={type}
            className='w-full px-[0.7em] rounded-sm bg-[#F1F5F9]  border-[#838FA0]  py-[0.7em] text-[2em]'
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e)}
            name={name}
            autoComplete="off"
        />
    </div>
    );
};

export const RequiredInputFields = ({ type, placeholder , name , width , label , value , setValue}) => {
    // console.log(name)
    return (
    <div className={`input-fields font-Hanken_Grotesk w-[${width}] text-[10px] flex flex-col`}>
        <label className="text-[2em] pt-[1em] pb-[0.3em] font-semibold uppercase  font-Hanken_Grotesk">{label}</label>
        <input
            type={type}
            className='w-full px-[0.7em] rounded-sm  outline-none border-[0.1em] border-[#838FA0]  hover:border-blue-400  py-[0.7em] text-[2em]'
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e)}
            required
            name={name}
            autoComplete="off"
        />
    </div>
    );
};

export const Date = ({ type, placeholder , name , width , label , value , setValue}) => {
    return(
        <div className={`input-fields font-Hanken_Grotesk w-[${width}] text-[10px] flex flex-col`}>
            <label className="text-[2em] pt-[1em] pb-[0.3em] font-semibold uppercase  font-Hanken_Grotesk">{label}</label>
            <input      
                type={type}
                className='w-full px-[0.7em] rounded-sm  outline-none border-[0.1em] border-[#838FA0]  hover:border-blue-400  py-[0.7em] text-[2em]'
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e)}
                required
                name={name}
                autoComplete="off"
            />
        </div>
    )
}
