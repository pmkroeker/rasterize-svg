import { serialize } from './serialize';
/**
 * Creates a rasterized image from the input svg.
 * FROM BOSTOCK via Observable modified for use outside of Observable environment
 * @export
 * @param {HTMLElement} svg
 * @returns {Promise<{}}>}
 */
export function rasterize(svg) {
    let resolve;
    let reject;
    const promise = new Promise((y, n) => (resolve = y, reject = n));
    const image = new Image();
    image.onerror = reject;
    image.onload = () => {
        const rect = svg.getBoundingClientRect();
        const context = d3.create('canvas')
            .attr('height', rect.height)
            .attr('width', rect.width)
            .node().getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, rect.width, rect.height);
        context.drawImage(image, 0, 0, rect.width, rect.height);
        context.canvas.toBlob(resolve);
    };
    image.src = URL.createObjectURL(serialize(svg));
    return promise;
}
//# sourceMappingURL=rasterize.js.map