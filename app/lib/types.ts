import React from "react";

export type SVGType = HTMLElement & SVGElement;
export interface SplitedElement {
  chars: NodeList;
  spaces: NodeList;
  splited: HTMLElement;
  words: NodeList;
}

export interface SkillSection {
  label: string;
  description: string;
  bulletPoints: string[];
  z: number;
}

export interface RelativeToSelfContainer {
  children: React.ReactNode;
  additionalPx: number;
  classNames: string;
}

export interface ProjectsButtonFilter {
  text: string;
  i: number;
  buttonAnimation: gsap.core.Tween[] | undefined;
}

export type MouseEvents = MouseEvent | React.MouseEvent;

export interface CursorAnimations {
  move: (e: MouseEvents) => void;
  scaleUp: (scale: number | undefined) => void;
  scaleDown: () => void;
}

export interface CursorContext {
  setIsHoveringFunc: (
    isHovering: boolean,
    center?: {
      x: number;
      y: number;
    },
    scale?: number
  ) => void;
}
