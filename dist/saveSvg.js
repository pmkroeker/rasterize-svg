import { rasterize } from './rasterize';
import { saveAs } from 'file-saver';
/**
 * Saves SVG DOM node as a raster image using FileSaver
 * @export
 * @param {SVGElement} svgNode SVG Node to be saved
 * @param {string} imgName Desired file name
 * @returns {Promise<{}>}
 */
export default function saveSvg(svgNode, imgName) {
    return rasterize(svgNode)
        .then((rasta) => {
        saveAs(rasta, imgName);
    });
}
//# sourceMappingURL=saveSvg.js.map