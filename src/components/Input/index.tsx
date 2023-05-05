import React from 'react'
import { InputProps } from './interface'

export default function Input({id, onChange, value, label, type}: InputProps): JSX.Element {
    return (
        <div className='relative'>
            <input
                id={id}
                value={value}
                type={type}
                onChange={onChange}
                autoComplete={id}
                className='
                    block
                    rounded-lg
                    border-2
                    border-fontPrimary
                    px-6
                    pt-6
                    pb-2
                    w-full
                    text-md
                    text-fontPrimary
                    bg-transparent
                    transition-all 
                    duration-200
                    appearance-none
                    focus:border-highlightPrimary
                    focus:outline-none
                    focus:ring-0
                    peer
                '
                placeholder=' '
            />
            <label
                className='
                    absolute
                    text-md
                    text-fontPrimary
                    duration-200
                    -translate-y-3
                    scale-75
                    top-4
                    z-10
                    origin-[0]
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                    peer-focus:text-highlightPrimary
                    peer-focus:bg-transparent
                '
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}