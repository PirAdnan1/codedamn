import * as React from "react"
const Bell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#71717A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.269 9.75A6.74 6.74 0 0 1 12.047 3c3.713.028 6.684 3.113 6.684 6.834v.666c0 3.356.704 5.306 1.322 6.375A.75.75 0 0 1 19.407 18H4.594a.749.749 0 0 1-.647-1.125c.619-1.069 1.322-3.019 1.322-6.375v-.75ZM9 18v.75a3 3 0 0 0 6 0V18"
    />
  </svg>
)
export default Bell
