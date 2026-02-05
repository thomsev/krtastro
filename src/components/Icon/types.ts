export interface IconProps {
  name: string;
  fill?: string;
  strokeColor?: string;
  strokeWidth?: number;
  size?: "sm" | "md" | "lg" | string | number;
  rotate?: number;
  flipX?: boolean;
  flipY?: boolean;
  className?: string;
  [key: string]: any;
  responsive?: boolean;
}

export type IconSize = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
