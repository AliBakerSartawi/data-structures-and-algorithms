'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // createVertex(value) {
  //   const vertex = new Vertex(value);
  //   this.adjacencyList.set(vertex, []);
  // }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    return this.adjacencyList.get(vertex);
  }

  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      throw new Error('NON-EXISTENT VERTEX SITUATION 😱');
    }

    const edge = new Edge(end, weight || null);
    this.adjacencyList.get(start).push(edge);
  }

  getVertices() {
    if (!this.size()) throw new Error('GRAPH IS EMPTY 😱');

    const collection = [];
    for (let k of this.adjacencyList.keys()) {
      // console.log(k.value);
      collection.push(k.value);
    }
    return collection;
  }

  getUniqueVertices() {
    if (!this.size()) throw new Error('GRAPH IS EMPTY 😱');

    const collection = new Set();
    for (let k of this.adjacencyList.keys()) {
      // console.log(k);
      collection.add(k.value);
    }
    return collection;
  }

  getNeighbors(vertex) {
    // console.log(vertex);
    return this.adjacencyList.get(vertex).length
      ? this.adjacencyList.get(vertex)
      : null;
  }

  size() {
    return this.adjacencyList.size;
  }

  bfs(start) {
    // to prevent an infinite loop
    const visited = new Set();

    const queue = [start];

    while (queue.length) {
      const vertex = queue.shift();

      const neighbors = this.adjacencyList.get(vertex);
      console.log(neighbors);

      for (const neighbor of neighbors) {
        console.log(neighbor.vertex);
        if (!visited.has(neighbor.vertex)) {
          visited.add(neighbor.vertex);
          queue.push(neighbor.vertex);
        }
      }
    }

    return [...visited];
  }
}

const g = new Graph();

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const twoToo = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const fourToo = new Vertex(4);
const five = new Vertex(5);

g.addVertex(zero);
g.addVertex(one);
g.addVertex(two);
g.addVertex(twoToo);
g.addVertex(three);
g.addVertex(four);
g.addVertex(fourToo);
g.addVertex(five);

g.addDirectedEdge(zero, two);
g.addDirectedEdge(two, three);
g.addDirectedEdge(two, four);
g.addDirectedEdge(three, five);
g.addDirectedEdge(four, five);
g.addDirectedEdge(one, three);

console.log(g.size());
console.log(g.getVertices());
console.log(g.getUniqueVertices());
console.log(g.getNeighbors(three));

console.log(g.bfs(zero));

module.exports = {
  Graph,
  Vertex,
  Edge
};
