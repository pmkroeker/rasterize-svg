/**
 * Creates a blob from the input svg node element.
 * FROM BOSTOCK via Observable modified for use outside of Observable environment
 * @export
 * @param {HTMLElement} svg
 * @returns {Blob}
 */
export function serialize (svg: SVGElement): Blob {
    const xmlns = 'http://www.w3.org/2000/xmlns/';
    const xlinkns = 'http://www.w3.org/1999/xlink';
    const svgns = 'http://www.w3.org/2000/svg';

    svg = svg.cloneNode(true) as SVGElement;
    svg.setAttributeNS(xmlns, 'xmlns', svgns);
    svg.setAttributeNS(xmlns, 'xmlns:xlink', xlinkns);
    const serializer = new XMLSerializer();
    const string = serializer.serializeToString(svg);
    return new Blob([string], {
        type: 'image/svg+xml',
    });
}
