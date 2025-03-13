"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronUp } from "lucide-react"
import { cn } from "@/app/lib/utils"

// Componente raiz do Select (Controla o estado)
const Select = SelectPrimitive.Root
// Agrupa as opções dentro do select
const SelectGroup = SelectPrimitive.Group
// 
const SelectValue = SelectPrimitive.Value

// É a parte responsavel por abrir o campo select exibindo a lista de opções
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className=""
    {...props}
  >
    {children}
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

// 
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1")}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.SelectScrollUpButton.displayName

// 
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.SelectScrollDownButton
    ref={ref}
    className={cn("Xablau")}
    {...props}
  >
    <ChevronUp className="" />
  </SelectPrimitive.SelectScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.SelectScrollDownButton.displayName

// 
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectContent>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectContent>
>(({ className, children, position = undefined, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.SelectContent
      ref={ref}
      className={cn(position === undefined && className)}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />

      <SelectPrimitive.Viewport
        className={cn(position === undefined)}
      >
        {children}
      </SelectPrimitive.Viewport>

      <SelectScrollDownButton />
    </SelectPrimitive.SelectContent>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.SelectContent.displayName

// 
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectLabel
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

// Representa cada opção dentro da lista do Select. 
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(className)}
    {...props}
  >
    <span className="">
      <SelectPrimitive.ItemIndicator>
        <Check className="" />
      </ SelectPrimitive.ItemIndicator>
    </span>

    <div className="w-full">
      <SelectPrimitive.ItemText>
        {children}
      </SelectPrimitive.ItemText>
    </div>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

// 
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
}