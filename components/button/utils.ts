export const types = ['danger', 'warning', 'normal', 'default'] as const
export type Types =  typeof types[number]
const buttonPadding = 'px-[15px] py-[4px]'
export const typeMapClassName: Record<Types, string> = {
  danger: `bg-[#ff4d4f] text-[#fff] ${buttonPadding}`,
  warning: `bg-[#FFD700] text-[#fff] ${buttonPadding}`,
  normal: `${buttonPadding} border border-solid border-[#000]`,
  default: `bg-[#1677ff] text-[#fff] ${buttonPadding}`
}

export const shapes = ['default', 'circle', 'round'] as const
export type Shapes = typeof shapes[number]
export const shapeMapClassName: Record<Shapes, string> = {
  circle: 'rounded-[50%]',
  default: '',
  round: 'rounded-[5px]'
}

export const sizes = ['small', 'middle', 'large'] as const
export type Sizes = typeof sizes[number]
export const sizeMapClassName: Record<Sizes, string> = {
  small: 'text-sm py-0 px-[7px]',
  middle: '',
  large: 'text-lg py-[7px] px-[15px]'
}

export const iconPos = ['start', 'end'] as const
export type IconPos = typeof iconPos[number]