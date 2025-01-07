import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
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

export interface CreateButton {
  text: string;
  i: number;
  buttonAnimation: gsap.core.Tween[] | undefined;
  to: string;
  className: string;
}

export type MouseEvents =
  | MouseEvent
  | React.MouseEvent

export interface IsHovering {
  state: boolean;
  center: { x: number; y: number };
}

export interface CursorAnimations {
  handleHover: (isHovering: IsHovering) => void;
  turbulence: gsap.core.Timeline | undefined;
}

export interface Cursor {
  toDefaultScale: () => void;
  scaleUp: (scale: number, animate: boolean) => void;
  handleMouseMove: (
    e: MouseEvents,
    stagger?: number,
    duration?: number,
  ) => void;
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
export interface TransitionContext {
  transition:
    | ((href: string, router: AppRouterInstance, path: string) => void)
    | undefined;
}

export const Pos = {
  left: { left: "10%" },
  right: { right: "10%" },
};

type PosType = (typeof Pos)[keyof typeof Pos];

export interface Project {
  name: string;
  src: string;
  type: string;
  age: number;
  img: string;
  href: string;
  desc: string;
  techs: string[];
  feats?: string[];
  pos?: PosType;
}

export type QuickToElement =
  | string
  | string[]
  | HTMLElement
  | HTMLElement[]
  | ChildNode
  | ChildNode[];

export interface QuickToRef {
  xTo: gsap.QuickToFunc;
  yTo: gsap.QuickToFunc;
}

export interface CarouselHandlers {
  handleMouseMove: (e: MouseEvents) => void;
  handleMouseEnter: (e: MouseEvents, project: number) => void;
  handleMouseLeave: () => void;
}
