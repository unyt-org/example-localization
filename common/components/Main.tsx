import { UIX } from "uix";
// import data from "common/data.dx";
import { always, Datex } from "unyt_core/datex.ts";
const languages = {
	"en": "🇺🇸",
	"de": "🇩🇪",
	"fr": "🇫🇷"
}
@UIX.template(function(this: Main) {
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
export class Main extends UIX.BaseComponent {
	@use("../data.dx") declare strings: {[key: string]: string};
}