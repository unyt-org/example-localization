import { Component } from "uix/components/Component.ts";
import { template } from "uix/html/template.ts";
import { always, Datex } from "unyt_core/datex.ts";
import { use } from "uix/base/decorators.ts";

const languages = {
	"en": "🇺🇸",
	"de": "🇩🇪",
	"fr": "🇫🇷"
}
@template(function(this: Main) {
	const ENV = Datex.Runtime.ENV;
	return <div class="main">
		<h1>{this.strings.title}</h1>
		<div class="flags">
			{
				Object.entries(languages).map(([lang, flag]) => 
					<div 
						data-active={always(() => ENV.LANG === lang)}
						onclick={() => ENV.LANG = lang} class="toggle">
						{flag}
					</div>
				)
			}
		</div>
	</div>
})
export class Main extends Component {
	@use("../data.dx") declare strings: {[key: string]: string};
}