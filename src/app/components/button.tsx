"use client"

import { ReactNode } from "react";

interface ButtonProps {
  icon?: ReactNode;
  loading?: boolean;
  variant?: 'outline' | 'contained';
  color?: 'info' | 'sucess' | 'warning' | 'error';
}

export const Button = ({
  icon,
  color,
  loading,
  variant
}: ButtonProps) => {

}
