"use client"

interface DefaultDivisionProps {
  classname: string;
}

export const DefaultDivision = ({
  classname,
}: DefaultDivisionProps) => {
  return (
    <hr className="p-0.5 w- rounded-3xl m-2 bg-[#2b0215] outline-none border-none" />
  );
};