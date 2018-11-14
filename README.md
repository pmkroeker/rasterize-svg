# rasterize-svg
Rasterize SVG Elements for Download as PNG

[![npm](https://img.shields.io/npm/v/rasterize-svg.svg)](https://www.npmjs.com/package/rasterize-svg)

I needed an easy way to download SVG images created in [D3](https://d3js.org/) as PNG. I found that Mike Bostock made an [Observable Notebook](https://beta.observablehq.com/@mbostock/saving-svg) which solved the exact problem. the only issue was that some of the ways Observable handles DOM manipulation is not directly compatible with the browser. I modified the original code to be browser compatible.

## Methods

rasterize-svg exports a default function which returns a promise once the file has been saved.

```TS
import saveSvg from 'rasterize-svg'

const svgNode = document.querySelector('#mySVG') as SVGElement;
saveSvg(svgNode, 'mySVG.png')
  .then(() => {
    // file saved
  });

```
