import { ButtonHTMLAttributes, CSSProperties, MouseEvent, ReactNode } from "react"
import { IconPos, Shapes, Sizes, Types, } from "./utils"

export interface ButtonProps {
  type?:Types,
  insertSpace?: boolean|number
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>
  disabled?: boolean
  classNames?: string
  styles?: CSSProperties
  shape?: Shapes,
  ghost?: boolean
  size?: Sizes,
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
  icon?: ReactNode
  iconPosition?: IconPos
  loading?: boolean
  children?: ReactNode
}