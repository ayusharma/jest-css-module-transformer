/**
 * Convert nodes into css class names map
 * @param nodes
 * @returns {*} {searchIcon: 'searchIcon'}
 */
module.exports = function transformNodesIntoClassNamesMap(nodes = []) {
    return nodes
        .filter((node) => node.type === 'rule')
        .map((node) => node.selector)
        .flatMap((classNames) => classNames.split(','))
        .map((className) => className.trim())
        .filter((className) => className.startsWith('.'))
        .map((className) => className.substring(1))
        .reduce((acc, className) => {
            acc[className] = className;
            return acc;
        }, {});
};
