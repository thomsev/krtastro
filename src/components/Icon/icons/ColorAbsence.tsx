import * as React from "react";
import type { SVGProps } from "react";
const SvgColorAbsence = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
    <path
      fill="#00acc1"
      d="M30 15c0 8.283-6.717 15-15 15S0 23.283 0 15 6.717 0 15 0s15 6.717 15 15"
    />
    <path
      fill="#eee"
      d="M27 15c0 6.628-5.372 12-12 12S3 21.628 3 15 8.372 3 15 3s12 5.372 12 12"
    />
    <path d="M14.25 5.25h1.5V15h-1.5z" />
    <path d="m14.381 15.619 1.239-1.239 4.875 4.875-1.24 1.239z" />
    <path d="M17.25 15a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0" />
    <path fill="#00acc1" d="M15.75 15a.75.75 0 0 1-1.5 0 .75.75 0 0 1 1.5 0" />
  </svg>
);
export default SvgColorAbsence;
