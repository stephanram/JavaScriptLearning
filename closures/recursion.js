let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' },
    { id: 'birds', parent: null },
    { id: 'swan', parent: 'birds' }
];

var makeTree = function (categories, parent) {
    var filteredCategories = categories.filter(x => x.parent === parent);
    var node = {};
    filteredCategories.forEach(function (n, i) {
        node[n.id] = makeTree(categories, n.id);
        console.log(JSON.stringify(node[n.id], null, 2));
    });
    return node;
};

var makeTreeSimplified = (categories, parent) => {
    var simplifiedNode = {};
    categories.filter(c => c.parent === parent)
        .forEach(c => simplifiedNode[c.id] = makeTreeSimplified(categories, c.id));

    return simplifiedNode;
}

console.log(JSON.stringify(makeTree(categories, null), null, 2));
//console.log(JSON.stringify(makeTreeSimplified(categories, null), null, 2));
