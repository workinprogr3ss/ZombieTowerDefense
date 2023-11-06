export default class GridService {
  constructor(scene, layer, nonWalkableTileIndex) {
    this.scene = scene;
    this.walkableLayer = layer;
    this.nonWalkableTileIndex = nonWalkableTileIndex;
    this.grid = this.createGrid();
  }

// Create the grid for A* pathfinding
  createGrid() {
    let grid = [];

    this.walkableLayer.forEachTile((tile) => {
      const x = tile.x;
      const y = tile.y;

      if (!grid[y]) {
        grid[y] = [];
      }

      grid[y][x] = tile.index === this.nonWalkableTileIndex ? 1 : 0; // 1 is non-walkable, 0 is walkable, 634 is the index of the non-walkable tile
    });
    
    console.log("Grid:", grid);  // Debugging line
    return grid;
  }

  getGrid() {
    return this.grid;
  }
}
