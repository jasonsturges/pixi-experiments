export class GeometryUtils {
  /**
   * Convert radians to degrees.
   */
  public static deg2rad(angle: number): number {
    angle = !isNaN(angle) ? angle : 0;

    return (angle * Math.PI) / 180;
  }

  /**
   * Convert degrees to radians.
   */
  public static rad2deg(angle: number): number {
    angle = !isNaN(angle) ? angle : 0;

    return (angle * 180) / Math.PI;
  }
}
