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
  onPageOpen: () => void;
  scaleDefault: () => void;
  scaleUp: (scale: number) => void;
  handleMouseMove: (e: MouseEvents) => void;
  turbulence: gsap.core.Timeline | null;
}

export interface Cursor
  extends Omit<CursorAnimations, "onPageOpen" | "turbulence"> {
  size: number;
}

export interface CursorContext {
  cursor: Cursor;
  setIsHovering: React.Dispatch<
    React.SetStateAction<{
      state: boolean;
      center: {
        x: number;
        y: number;
      };
    }>
  >;
}
