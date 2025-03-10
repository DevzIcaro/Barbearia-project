"use client"

import { Children, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  icon?: ReactNode;
  loading?: boolean;
  variant?: 'outline' | 'contained';
  color?: 'info' | 'sucess' | 'warning' | 'error';
  children?: ReactNode;
  type: 'submit'
  label: string;
  classname: string;
}

export const getButtonStyles = ({
  icon,
  color,
  loading,
  variant
}: ButtonProps) => {
  const variantStyles: Record<string, Record<string, Record<string, string>>> = {
    info: {
      outlined: {
        base: 'h-10 w-full text-[#ee2853] border border-[#ee2853]/65 rounded-lg hover:text-[#ee2853] hover:bg-[#ee2853]',
        loadingColor: 'bg-[#210210]',
      },
      contained: {
        base: 'h-10 w-full bg-[#210210] text-white hover:bg-[#210217]',
        loadingColor: 'bg-[#210210]'
      },
    },
    sucess: {
      outlined: {
        base: 'h-10 w-full text-[#ee2853] border border-[#ee2853]/65 rounded-lg hover:text-[#ee2853] hover:bg-[#ee2853]',
        loadingColor: 'bg-blue',
      },
      contained: {
        base: 'h-10 w-full bg-[#210210] text-white hover:bg-[#210217]',
        loadingColor: 'bg-[#210210]',
      },
    },
    warning: {
      outlined: {
        base: 'h-10 w-full text-[#ee2853] border border-[#ee2853]/65 rounded-lg hover:text-[#ee2853] hover:bg-[#ee2853]',
        loadingColor: 'bg-blue',
      },
      contained: {
        base: 'h-10 w-full bg-[#210210] text-white hover:bg-[#210217]',
        loadingColor: 'bg-[#210210]',
      },
    },
    error: {
      outlined: {
        base: 'h-10 w-full text-[#ee2853] border border-[#ee2853]/65 rounded-lg hover:text-[#ee2853] hover:bg-[#ee2853]',
        loadingColor: 'bg-blue',
      },
      contained: {
        base: 'h-10 w-full bg-[#210210] text-white hover:bg-[#210217]',
        loadingColor: 'bg-[#210210]',
      },
    },
  }

  return {
    buttonStyle: `${variantStyles[color][variant].base} rounded-md text-sm font-semibold transition-all duration-500 disabled:bg-[#210210] disabled:border-[#210210] disabled:text-disabled`,
    loadingColor: `${variantStyles[color][variant].loadingColor}`
  }
}

export const Button = ({
  loading,
  children,
  variant = 'contained',
  type,
  classname,
  icon,
  color = 'info',
  ...props
}: ButtonProps) => {
  const { buttonStyle, loadingColor } = getButtonStyles({ variant, color });

  return (
    <button
      className={twMerge(buttonStyle, "")} type="submit" {...props}
    >
      <div className="w-full flex justify-center items-center">
        {loading && <span className="animate-spin"></span>}
        {children}
      </div>
    </button>
  )
}