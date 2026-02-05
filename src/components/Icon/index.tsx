import React, { type CSSProperties } from "react";
import { classNames, convertPxToRem } from "@/utils";
import type { IconProps } from "./types";
import * as icons from "./icons";
import { iconSizes } from "./iconSizes";
import styles from "./Icon.module.scss";

const strokeWidthDefault = 1;

export function Icon({
  fill = "currentColor",
  strokeColor = "none",
  strokeWidth,
  name,
  size = "sm",
  rotate = 0,
  flipX = false,
  flipY = false,
  responsive = false,
  className = "",
  ...props
}: IconProps) {
  const sizeVal =
    typeof size === "number"
      ? `${convertPxToRem(size)}rem`
      : iconSizes[size as keyof typeof iconSizes] || size;

  const IconComponent = icons[name as keyof typeof icons];

  let transform = "";
  if (rotate !== 0) transform += `rotate(${rotate}deg)`;
  if (flipX) transform += ` scaleX(-1)`;
  if (flipY) transform += ` scaleY(-1)`;

  const calculatedStrokeWidth =
    strokeColor !== "none" ? (strokeWidth ?? strokeWidthDefault) : undefined;

  const iconStyles: CSSProperties = {
    fill,
    stroke: strokeColor,
    strokeWidth: calculatedStrokeWidth,
    transform: transform || undefined,

    width: responsive ? "100%" : sizeVal,
    height: responsive ? "auto" : sizeVal,
    maxWidth: responsive ? "100%" : undefined,
  };

  const wrapperStyles: CSSProperties = responsive
    ? {
        width: "100%",
        maxWidth: sizeVal,
        height: "auto",
      }
    : {
        width: sizeVal,
        height: sizeVal,
      };

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist.`);
    return null;
  }

  return (
    <figure
      className={classNames("vui_Icon", styles["icon-wrap"], className)}
      style={wrapperStyles}
      {...props}
    >
      <IconComponent className={styles["styled-icon"]} style={iconStyles} />
    </figure>
  );
}
