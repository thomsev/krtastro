import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 88" {...props}>
    <path d="M8 0C3.588 0 0 3.588 0 8v64c0 4.412 3.588 8 8 8h25.039a27.8 27.8 0 0 1-3.859-8H8V8h28v20h20v8c2.78 0 5.464.424 8 1.18V24L40 0zm48 44c-11.2 0-20 8.8-20 20s8.8 20 20 20c4 0 8.003-1.203 11.203-3.203L74.398 88 80 82.398l-7.203-7.195C74.797 72.003 76 68 76 64c0-11.2-8.8-20-20-20m0 8c6.8 0 12 5.2 12 12s-5.2 12-12 12-12-5.2-12-12 5.2-12 12-12" />
  </svg>
);
export default SvgDocumentView;
