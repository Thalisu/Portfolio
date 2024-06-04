export const isHTMLElement = (
  element: HTMLElement | unknown,
): element is HTMLElement => {
  const isHTMLElement =
    element instanceof HTMLElement || element instanceof SVGElement;
  if (!isHTMLElement) console.error(`${element} not have classlist method`);
  return isHTMLElement;
};
