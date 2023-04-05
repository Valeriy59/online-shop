import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './CustomButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
type DefaultAnchorPropsType = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

type CustomButtonPropsType = DefaultButtonPropsType &
  DefaultAnchorPropsType & {
    xType?: 'danger' | 'success'
    size?: 'standard' | 'large'
    variant?: 'block' | 'line'
  }

export const CustomButton = ({
  xType,
  size,
  variant,
  className,
  disabled,
  href,
  ...restProps
}: CustomButtonPropsType) => {
  const classNameXtype =
    (disabled
      ? s.disabled
      : xType === 'danger'
      ? s.danger
      : xType === 'success'
      ? s.success
      : s.default) + (className ? ' ' + className : '')

  const classNameSize =
    (size === 'standard' ? s.standard : size === 'large' ? s.large : s.default) +
    (className ? ' ' + className : '')

  const classNameVariant =
    (variant === 'line' ? s.line : variant === 'block' ? s.block : s.default) +
    (className ? ' ' + className : '')

  const finalClassName =
    s.button + ' ' + classNameXtype + ' ' + classNameSize + ' ' + classNameVariant

  return <button disabled={disabled} className={finalClassName} {...restProps} />
}
