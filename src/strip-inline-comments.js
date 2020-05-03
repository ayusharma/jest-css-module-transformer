const postcss = require('postcss');

module.exports = postcss.plugin(
    'postcss-strip-inline-comments',
    () => {
        return css => {
            css.walkComments(i => {
                if (i.raws.inline) i.remove();
            });
        };
    },
);
