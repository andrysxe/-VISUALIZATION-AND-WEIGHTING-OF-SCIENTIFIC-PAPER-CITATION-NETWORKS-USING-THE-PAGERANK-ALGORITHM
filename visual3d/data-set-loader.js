function getGraphDataSets() {

    const loadCitation = function(Graph) {
        Graph
          .nodeLabel('id')
          .nodeAutoColorBy('group')
          .forceEngine('ngraph')
          .jsonUrl('citation.json');
    };
    loadCitation.description = "<em>Multidimensional Visualization</em>";

    return [loadCitation];
}
