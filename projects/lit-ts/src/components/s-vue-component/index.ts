import { LitElement, PropertyValueMap, css, html, unsafeCSS } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import cssIndex from "./index.scss?inline";
import { createApp, defineComponent, ref } from "vue";

@customElement("s-vue-demo")
export class SVueDemo extends LitElement {
  static styles = css`
    ${unsafeCSS(cssIndex)}
  `;

  @query(".s-vue-demo")
  root!: HTMLDivElement;

  @property({ type: Number })
  count = 10;

  vueComponent!: any;

  render() {
    return html` <div class="s-vue-demo"></div> `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    console.log(this.tagName, "call connectedCallback", this.isConnected);
    this.updateComplete.then((flag) => {
      console.log(this.tagName, "call updateComplete", flag, this.root);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
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
    if (this.root) {
      this.vueComponent?.unmount();
      this.vueComponent = null;
      this.createVueComponent();
    }
  }

  createVueComponent = () => {
    const self = this;
    const component = defineComponent({
      template: `
            <div>this is a vue component, count: {{count}}</div>
        `,

      setup() {
        const count = ref(self.count);

        return {
          count,
        };
      },
    });

    const app = createApp(component);
    app.mount(this.root);
    this.vueComponent = app;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "s-vue-demo": SVueDemo;
  }
}
