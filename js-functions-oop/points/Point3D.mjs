/* 
* Samuel Dameg
*/

import { Point2D } from './Point2D.mjs';

/**
 * Models a point in 3 dimensions
 */
class Point3D extends Point2D {
    /**
     * 
     * @param {number} x The x-coordinate of the point
     * @param {number} y The y-coordinate of the point
     * @param {number} z The z-coordinate of the point
     */
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    /**
     * 
     * @param {object} p An instance of the class Point3D
     * @returns The Euclidean distance between this point and p
     */
    distanceFrom(p) {
        // Euclidean distance in 3D: sqrt((x2-x1)² + (y2-y1)² + (z2-z1)²)
        return Math.sqrt(
            Math.pow(this.x - p.x, 2) + 
            Math.pow(this.y - p.y, 2) + 
            Math.pow(this.z - p.z, 2)
        );
    }
}

export { Point3D };
