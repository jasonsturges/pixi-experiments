import { parseColor } from "./ColorUtils";

export class RandomUtils {
  static boolean = (): boolean => Math.random() >= 0.5;

  static charLower = (): string => String.fromCharCode(97 + Math.floor(Math.random() * 26));

  static charUpper = (): string => String.fromCharCode(65 + Math.floor(Math.random() * 26));

  static color = (): number => parseColor(Math.floor(Math.random() * 0xffffff));

  static enum<T>(ofEnum: T): T[keyof T] {
    const values = Object.values(ofEnum);
    const index = Math.floor(Math.random() * values.length);
    return values[index];
  }

  static integer = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
}
