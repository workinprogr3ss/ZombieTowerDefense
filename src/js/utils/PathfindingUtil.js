const easystar = new EasyStar.js();

export const findPath = (grid, startX, startY, endX, endY, callback) => {
    easystar.setGrid(grid);
    easystar.setAcceptableTiles([0]);

    easystar.findPath(startX, startY, endX, endY, function(path) {
        if (path === null) {
            //console.log("Path was not found.");
            callback(null, new Error("Path was not found."))
        } else {
            //console.log("Path was found. The first Point is " + path[0].x + " " + path[0].y);
            //console.log("The last Point is " + path[path.length - 1].x + " " + path[path.length - 1].y);
            callback(path, null);
        }
    });
    easystar.calculate();
};