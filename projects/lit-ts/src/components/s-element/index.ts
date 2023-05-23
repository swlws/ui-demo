import { LitElement, PropertyValueMap, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import cssIndex from "./index.scss?inline";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("s-element")
export class SElement extends LitElement {
  static styles = css`
    ${unsafeCSS(cssIndex)}
  `;

  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>

      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  connectedCallback(): void {
    super.connectedCallback();
    console.log(this.tagName, "call connectedCallback", this.isConnected);
  }

  disconnectedCallback(): void {
    super.connectedCallback();
    console.log(this.tagName, "call disconnectedCallback");
  }

  protected update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.update(changedProperties);
    console.log(this.tagName, "call update");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "s-element": SElement;
  }
}
