import { UIX } from "uix";
import { include } from "uix/base/decorators.ts";
import { Component } from "uix/components/Component.ts";
import { template } from "uix/html/template.ts";
import { always, Datex } from "unyt_core/datex.ts";

const languages = {
	"en": "🇺🇸",
	"de": "🇩🇪",
	"fr": "🇫🇷"
}
@template(function(this: Main) {
	return <div class="main">
		<h1>{this.strings.title}</h1>
		<div class="flags">
			{
				Object.entries(languages).map(([lang, flag]) => 
					<div 
						data-active={always(() => Datex.Runtime.ENV.LANG === lang)}
						onclick:frontend={() => use(lang) && (Datex.Runtime.ENV.LANG = lang)} class="toggle">
						{flag}
					</div>
				)
			}
		</div>
	</div>
})
export class Main extends Component {
	@include("../data.dx") declare strings: {[key: string]: string};
}