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

  test('#addVertex() adds 🟢 vertex properly', () => {
    expect(g.addVertex(zero)).toEqual([]);
  });

  test('#addDirectedEdge() adds 🟢 edge properly', () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addDirectedEdge(zero, one, '🦔');
    expect(g.adjacencyList.get(zero)[0].vertex.value).toEqual(1);
    expect(g.adjacencyList.get(zero)[0].weight).toEqual('🦔');
  });

  test('#addDirectedEdge() throws 🔴 Error on adding edges to non-existent vertices', () => {
    g.addVertex(zero);
    g.addVertex(one);
    expect(() => g.addDirectedEdge(two, three, '🦔')).toThrow(
      'NON-EXISTENT VERTEX SITUATION 😱'
    );
  });

  test('#getVertices() returns 🟢 collection of all vertices', () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addVertex(two);
    g.addVertex(twoToo);
    g.addVertex(three);
    expect(g.getVertices()).toEqual([0, 1, 2, 2, 3]);
  });

  test('#getVertices() returns 🟢 properly a graph with one vertex and an edge', () => {
    g.addVertex(zero);
    g.addDirectedEdge(zero, zero, `It's getting cyclic in here 🔄`);
    expect(g.getVertices(zero)).toEqual([0]);
  });

  test('#getVertices() throws 🔴 if graph is empty', () => {
    expect(() => g.getVertices()).toThrow('GRAPH IS EMPTY 😱');
  });

  test('#getUniqueVertices() returns 🟢 collection of unique vertices', () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addVertex(two);
    g.addVertex(twoToo);
    g.addVertex(three);
    g.addVertex(four);
    g.addVertex(fourToo);

    // two smart ways to convert a Set to an Array
    // spreading
    expect([...g.getUniqueVertices()]).toEqual([0, 1, 2, 3, 4]);
    // Array.from()
    expect(Array.from(g.getUniqueVertices())).toEqual([0, 1, 2, 3, 4]);
  });

  test('#getUniqueVertices() throws 🔴 if graph is empty', () => {
    expect(() => g.getUniqueVertices()).toThrow('GRAPH IS EMPTY 😱');
  });

  test('#getNeighbors() returns 🟢 the happy neighbors with weight', () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addVertex(two);
    g.addVertex(twoToo);
    g.addVertex(three);

    g.addDirectedEdge(zero, one);
    g.addDirectedEdge(zero, two);
    expect(g.getNeighbors(zero).length).toEqual(2);
    expect(g.getNeighbors(zero)[0].vertex.value).toEqual(1);
    expect(g.getNeighbors(zero)[0].weight).toEqual(null);
    expect(g.getNeighbors(zero)[1].vertex.value).toEqual(2);
    expect(g.getNeighbors(zero)[1].weight).toEqual(null);
  });

  test(`#getNeighbors() returns 🔴 null if there ain't none`, () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addVertex(two);
    g.addVertex(twoToo);
    g.addVertex(three);

    g.addDirectedEdge(zero, one);
    g.addDirectedEdge(zero, two);
    expect(g.getNeighbors(two)).toEqual(null);
  });

  test('#size() returns 🟢 the correct size of the respected establishment', () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addVertex(two);
    g.addVertex(twoToo);
    g.addVertex(three);

    expect(g.size()).toEqual(5);
  });

  test('#size() returns 🔴 a big fat zero if the graph is lonely', () => {
    expect(g.size()).toEqual(0);
  });

  test('#bfs() returns 🟢 collection of visited vertices (maintains order)', () => {
    g.addVertex(zero);
    g.addVertex(one);
    g.addVertex(two);
    g.addVertex(three);
    g.addVertex(four);
    g.addVertex(five);

    g.addDirectedEdge(zero, two);
    g.addDirectedEdge(two, three);
    g.addDirectedEdge(two, four);
    g.addDirectedEdge(three, five);
    g.addDirectedEdge(four, five);
    g.addDirectedEdge(one, three);

    expect(g.bfs(zero)).toEqual([
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 }
    ]);
    expect(g.bfs(zero)[0].value).toEqual(2);
  });
});
