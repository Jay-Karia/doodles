import { ComponentProps } from "react"

type TextProps = ComponentProps<"p">

export function Text ({children} : TextProps)  {
  return <p>
    {children}
  </p>
}