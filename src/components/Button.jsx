import React from 'react'

const Button = ({variant = 'primary', children, href, className = ''}) => {

  const baseStyles = "bg-black py-2 px-3 rounded-md";

  const variantStyles = variant === "primary"
    ? "bg-gradient-to-r from-orange-500 to-orange-800"
    : variant === "secondary"
    ? "bg-green-400"
    : "bg-grey";

  return (
    <a href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </a>
  )
}

export default Button