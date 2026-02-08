/* 
* Samuel Dameg
*/

/**
 * Models a point in 2 dimensions
 */
class Point2D {
    /**
     * 
     * @param {number} x The x-coordinate of the point
     * @param {number} y The y-coordinate of the point
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {object} p An instance of the class Point2D
     * @returns The Euclidean distance between this point and p
     */
    distanceFrom(p) {
        // Euclidean distance: sqrt((x2-x1)² + (y2-y1)²)
        return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
    }
}

export {Point2D}
