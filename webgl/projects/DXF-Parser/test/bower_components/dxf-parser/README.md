
# Dxf-Parser

**Dxf Parser** is a javascript parser for dxf files. It reads dxf files into one large javascript object with readable properties and a more logical structure.

Also, keep an eye on [three-dxf](https://github.com/gdsestimating/three-dxf), a browser module for rendering the output of Dxf-Parser in the browser.

#### Install
```
npm install dxf-parser
# or
bower install dxf-parser
```
Browsers -- As of 0.1.3 standalone browserify version is in the dist/ folder. Copy it out of the install directory or just download it from the GitHub repo directly. We may evetually publish this to bower, but the build environment needs a little work first.

#### Usage
```
// Grab fileText in node.js or browser
var fileText = ...;

var parser = new DxfParser();
try {
    var dxf = parser.parseSync(fileText);
}catch(err) {
    return console.error(err.stack);
}
```

See the [wiki Example Output page](https://github.com/gdsestimating/dxf-parser/wiki/Example-Output) to get an idea of what the results look like.

#### Run Samples
node.js
```
node samples/parseSync
node samples/parseStream
```

browser - the [three-dxf repo](https://github.com/gdsestimating/three-dxf) has a sample for viewing dxf cad in the browser 

#### What's Supported

Support
* Header
* Most 2D entities
* Layers
* LType table
* Block table and inserts
* VPort table
* Text and some MTEXT

Does not yet support
* 3DSolids
* All types of Leaders
* other less common objects and entities.

### Contributing

See the [wiki](https://github.com/gdsestimating/dxf-parser/wiki) for info on contributing

#### Run Tests
```
npm install -g mocha
//Then
npm test
//OR
mocha test
```
