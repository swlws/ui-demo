import { LitElement, PropertyValueMap, css, html, unsafeCSS } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import cssIndex from "./index.scss?inline";
import { createApp, defineComponent, ref } from "vue";

function unmountInstance(component: any) {
  try {
    component.componentInstance?.unmount();
    component.componentInstance = null;
  } catch (error) {
    console.log(error);
  }
}

@customElement("s-vue-demo")
export class SVueDemo extends LitElement {
  static styles = css`
    ${unsafeCSS(cssIndex)}
  `;

  @query(".s-vue-demo")
  container!: HTMLDivElement;

  @property({ type: Number })
  count = 10;

  componentInstance!: any;

  render() {
    return html` <div class="s-vue-demo"></div> `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    console.log(
      this.tagName,
      "call connectedCallback",
      `isConnected: ${this.isConnected}`,
      `lock: ${window.lock}`,
      this.container
    );

    // 第一次触发connectedCallback时, this.root是不存在的
    // 之后,this.root才存在
    if (!this.componentInstance && this.container) {
      console.log("---------------- emit createVueComponent");
      this.createVueComponent();
    }

    // this.updateComplete.then((flag) => {
    //   console.log(this.tagName, "call updateComplete", flag, this.container);
    // });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    console.log(
      this.tagName,
      "call disconnectedCallback",
      `lock: ${window.lock}`
    );

    if (window.lock) return;

    if (!this.isConnected) {
      unmountInstance(this);
    }
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

    console.log(this.tagName, "call update", `lock: ${window.lock}`);

    if (window.lock) {
      unmountInstance(this);
      return;
    }

    // 更新阶段, this.container 是一定存在
    if (this.container) {
      unmountInstance(this);
      this.createVueComponent();
    }
  }

  createVueComponent = () => {
    console.log(this.tagName, "createVueComponent");
    const self = this;
    const component = defineComponent({
      template: `
            <div>vue component, count: {{count}}</div>
        `,

      setup() {
        const count = ref(self.count);

        return {
          count,
        };
      },
    });

    const app = createApp(component);
    app.mount(this.container);
    this.componentInstance = app;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "s-vue-demo": SVueDemo;
  }
}
