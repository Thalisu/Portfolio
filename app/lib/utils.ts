export const setSvgAnimation = (
  path: Element,
  animation: string,
  property?: string
) => {
  if (path instanceof SVGPathElement) {
    const totalLength = path.getTotalLength().toString();

    path.style.strokeDasharray = totalLength;
    path.style.strokeDashoffset = totalLength;
    property && path.style.setProperty(`--${property}`, totalLength);
    path.style.animation = animation;

    return totalLength;
  } else {
    console.log("not a SVGPathElement");
  }
};
