import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  size?: string;
  title?: string;
};

function Menu4Line({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  size = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  // secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={size}
      width={size}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
      </g>
    </svg>
  );
}

export default Menu4Line;
