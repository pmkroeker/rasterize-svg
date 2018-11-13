# rasterize-svg
Rasterize SVG Elements for Download as PNG

[![npm](https://img.shields.io/badge/npm-v1.0.1-green.svg)](http://npm.im/rasterize-svg)

I needed an easy way to download SVG images created in [D3](https://d3js.org/) as PNG. I found that Mike Bostock made an [Observable Notebook](https://beta.observablehq.com/@mbostock/saving-svg) which solved the exact problem. the only issue was that some of the ways Observable handles DOM manipulation is not directly compatible with the browser. I modified the original code to be browser compatible.

**Below example also uses [FileSaver.js](https://github.com/eligrey/FileSaver.js) to save the blob, but it should be compatible with any blob saving library or implementation**

## Methods

rasterize - Promise

Usage Example:
```JS
import {rasterize} from './dist/rasterize.js'
const svgNode = d3.select('#myChart').node();
rasterize(svgNode)
  .then((rasta) => {
    saveAs(rasta, `myChart.png`);
  });
```

Save with FileSaver
```TS
import saveSvg from 'rasterize-svg'

const svgNode = document.querySelector('#mySVG');
saveSvg(svgNode, 'mySVG.png')
  .then(() => {
    // file saved
  });

```
