const postcss = require('postcss');
const postscss = require('postcss-scss');
const moduleTemplate = require('./template');
const removeInlineComments = require('./strip-inline-comments');
const transformNodesIntoClassNamesMap = require('./node-transformer');

// Don't change the name/signature of this function
exports.process = function (src, path) {
    let nodes = [];
    const fileExtension = path.split('.').pop();

    if (fileExtension === 'scss') {
        const scssAst = postcss([removeInlineComments]).process(src, {
            parser: postscss,
        });
        nodes = scssAst.root.nodes;
    }
    if (fileExtension === 'css') {
        const cssAst = postcss.parse(src);
        nodes = cssAst.nodes;
    }

    const cssClassNamesMap = transformNodesIntoClassNamesMap(nodes);

    return moduleTemplate.replace('%s', JSON.stringify(cssClassNamesMap));
};
