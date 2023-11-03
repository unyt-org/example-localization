import { Main } from '../common/components/Main.tsx';
import { Entrypoint } from "uix/html/entrypoints.ts";

export default {
	'/': <Main/>,
	'/static': null,
	'/hybrid': null
} satisfies Entrypoint;