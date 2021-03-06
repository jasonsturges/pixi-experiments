import { Renderer, Sprite } from "pixi.js";

/**
 * Abstract control, not intended to be directly instantiated.
 */
export abstract class AbstractControl extends Sprite {
  private _invalidated = false;

  /**
   * Constructor
   */
  protected constructor() {
    super();

    this.interactive = true;
  }

  /**
   * Render override for invalidation pipeline
   */
  override render(renderer: Renderer) {
    super.render(renderer);

    if (this._invalidated) {
      this.validate();
    }
  }

  /**
   * Invalidate component, forcing validation on next render cycle.
   */
  protected invalidate() {
    this._invalidated = true;
  }

  /**
   * Validation pipeline.
   */
  protected validate() {
    this._invalidated = false;
  }
}
