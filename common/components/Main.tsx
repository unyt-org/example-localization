import { include } from "uix/base/decorators.ts";
import { Component } from "uix/components/Component.ts";
import { template } from "uix/html/template.ts";
import { Datex } from "datex-core-legacy/datex.ts";

const languages = {
  "en": "🇺🇸",
  "de": "🇩🇪",
  "fr": "🇫🇷",
};

@template(function (this) {
  return (
    <div class="main">
      <h1>{this.strings.title}</h1>
      <div class="flags">
        {Object.entries(languages).map(([lang, flag]) => (
          <div
            data-active={Datex.Runtime.ENV.LANG === lang}
            onclick:frontend={() =>
              use("standalone", lang) &&
              console.log(Datex.Runtime.ENV.LANG = lang)}
            class="toggle"
          >
            {flag}
          </div>
        ))}
      </div>
    </div>
  );
})
export class Main extends Component {
  @include("../data.dx")
  strings!: { [key: string]: string };
  @standalone
  override async onDisplay() {
    await import("datex-core-legacy");
  }
}
