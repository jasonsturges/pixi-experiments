import { AbstractControl } from "./AbstractControl";
import { Graphics, ILineStyleOptions, Rectangle, Text } from "pixi.js";

export class Anchor extends AbstractControl {
  private _text?: string | undefined;
  protected readonly _graphics?: Graphics | undefined;
  protected readonly _textField?: Text | undefined;

  constructor() {
    super();

    this._graphics = new Graphics();
    this._graphics.interactive = true;
    this._graphics.lineStyle(<ILineStyleOptions>{
      color: 0xffff00,
      width: 1,
    });
    this._graphics.beginFill(0xffff00, 0.25);
    this._graphics.drawCircle(0, 0, 4);
    this._graphics.endFill();
    this._graphics.hitArea = new Rectangle(-8, -8, 16, 16);
    this.addChild(this._graphics);

    this._textField = new Text("", {
      fontSize: 6,
      fill: 0x00ff33,
      align: "center",
    });
    this._textField.resolution = 8;
    this._textField.anchor.set(0.5);
    this._textField.pivot.set(0, 10);
    this.addChild(this._textField);
  }

  /**
   * Invalidation pipeline
   */
  protected override validate() {
    super.validate();

    if (this._textField) this._textField.text = this._text ?? "";
  }

  /**
   * Text
   */
  get text() {
    return this._text;
  }

  set text(value) {
    if (this._text === value) return;
    this._text = value;
    this.invalidate();
  }
}
