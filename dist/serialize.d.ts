/**
 * Creates a blob from the input svg node element.
 * FROM BOSTOCK via Observable modified for use outside of Observable environment
 * @export
 * @param {HTMLElement} svg
 * @returns {Blob}
 */
export declare function serialize(svg: SVGElement): Blob;
