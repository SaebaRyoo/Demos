// Example test:   ([3, 1, 2], [2, 3, 1])
// OK

// Example test:   ([1, 2, 1], [2, 3, 3])
// OK

// Example test:   ([1, 2, 3, 4], [2, 1, 4, 4])
// WRONG ANSWER (got True expected False)

// Example test:   ([1, 2, 3, 4], [2, 1, 4, 3])
// WRONG ANSWER (got True expected False)

// Example test:   ([1, 2, 2, 3, 3], [2, 3, 3, 4, 5])

function solution(A, B) {
  const n = A.length;
  const graph = new Map(); // Create an empty graph

  // Build the graph
  for (let i = 0; i < n; i++) {
    const from = A[i];
    const to = B[i];
    if (!graph.has(from)) {
      graph.set(from, new Set());
    }
    if (!graph.has(to)) {
      graph.set(to, new Set());
    }
    graph.get(from).add(to); // Add the edge to the "from" vertex's adjacency set
  }

  const visited = new Set();
  const stack = new Set();

  const dfs = (node) => {
    visited.add(node);
    stack.add(node);

    const neighbors = graph.get(node);
    for (const neighbor of neighbors) {
      if (stack.has(neighbor)) {
        // Found a cycle
        return true;
      }
      if (!visited.has(neighbor)) {
        // Continue the DFS if not visited yet
        if (dfs(neighbor)) {
          return true;
        }
      }
    }

    stack.delete(node);
    return false;
  };

  // Try DFS from every unvisited node
  for (const [node] of graph) {
    if (!visited.has(node)) {
      if (dfs(node)) {
        return true;
      }
    }
  }

  return false;
}
