"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"
import { ref } from "yup"
import { BiChevronUp } from "react-icons/bi"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

// É a parte responsavel por abrir o campo select exibindo a lista de opções
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    classname=""
    {...props}
  >
    {children}
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectScrollUpButton>
>(({ classname, ...props }, ref) => (
  <SelectScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1")}
    {...props}
  >
    <BiChevronUp className="h-4 w-4" />
  </SelectScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.SelectScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.SelectScrollDownButton
    ref={ref}
    className={cn("Xablau")}
    {...props}
  >

  </SelectPrimitive.SelectScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.SelectScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectContent>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectContent>
>(({ classname, children, position = "proper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.SelectContent
      ref={ref}
      className={cn("" position === "popper" && classname)}
      position={position}
      {...props}
    >

    </SelectPrimitive.SelectContent>
  </SelectPrimitive.Portal>
))