export const hasClasslistMethod = (
  element: HTMLElement | unknown,
): element is HTMLElement => {
  const isHTMLElement = (element as HTMLElement).classList !== undefined;
  if (!isHTMLElement) console.error(`${element} not have classlist method`);
  return isHTMLElement;
};
