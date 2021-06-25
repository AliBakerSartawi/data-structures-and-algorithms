'use strict';

const { Vertex, Graph } = require('./graph');

describe(':::: GRAPH ::::', () => {
  let g, zero, one, two, twoToo, three, four, fourToo, five;
  beforeEach(() => {
    g = new Graph();

    zero = new Vertex(0);
    one = new Vertex(1);
    two = new Vertex(2);
    twoToo = new Vertex(2);
    three = new Vertex(3);
    four = new Vertex(4);
    fourToo = new Vertex(4);
    five = new Vertex(5);
  });

  test('#addVertex() adds vertex properly', () => {
    expect(g.addVertex(zero)).toEqual([]);
  });

  test('#addDirectedEdge() adds edge properly', () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addDirectedEdge(zero, one, '🦔');
    expect(g.adjacencyList.get(zero)[0].vertex.value).toEqual(1);
    expect(g.adjacencyList.get(zero)[0].weight).toEqual('🦔');
  });

  test('#addDirectedEdge() throws Error on adding edges to non-existent vertices', () => {
    g.addVertex(zero);
    g.addVertex(one);
    expect(() => g.addDirectedEdge(two, three, '🦔')).toThrow(
      'NON-EXISTENT VERTEX SITUATION 😱'
    );
  });
});
