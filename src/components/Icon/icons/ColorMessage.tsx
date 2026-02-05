import * as React from "react";
import type { SVGProps } from "react";
const SvgColorMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 25" {...props}>
    <path
      fill="#cfd8dc"
      d="M32.4 0H3.6C1.612 0 0 1.599 0 3.571v17.857c0 1.972 1.612 3.571 3.6 3.571h28.8c1.988 0 3.6-1.599 3.6-3.571V3.571C36 1.599 34.388 0 32.4 0"
    />
    <path
      fill="#97aab3"
      d="M36 3.679c0-.415-.085-.808-.216-1.179L18 15.293.217 2.5A3.5 3.5 0 0 0 0 3.679v.871L18 17.5 36 4.55z"
    />
  </svg>
);
export default SvgColorMessage;
