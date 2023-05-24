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
      <div class="card" @click=${this._click}>
        lit component, count: ${this.count}
      </div>

      <slot></slot>
    `;
  }

  _click() {
    const options = {
      detail: { msg: "this is test" },
      bubbles: true,
      composed: false,
    };
    this.dispatchEvent(new CustomEvent("test", options));
  }

  connectedCallback(): void {
    super.connectedCallback();
    console.log(
      this.tagName,
      "call connectedCallback",
      `isConnected: ${this.isConnected}`
    );
  }

  disconnectedCallback(): void {
    super.connectedCallback();
    console.log(this.tagName, "call disconnectedCallback");
  }

  protected shouldUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): boolean {
    const rt = super.shouldUpdate(_changedProperties);
    console.log(this.tagName, "call shouldUpdate");
    return rt;
  }

  protected willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log(this.tagName, "call willUpdate");
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
