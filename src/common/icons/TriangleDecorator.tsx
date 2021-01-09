import * as React from 'react'

function TriangleDecorator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={74}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.01 64.99L0 80l5.673-40 5.673-40 31.317 24.947L74 49.895 37.01 64.99z"
        fill={props.color || '#EC9B3B'}
      />
    </svg>
  )
}

export {TriangleDecorator}
