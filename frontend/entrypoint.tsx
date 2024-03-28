import { Main } from '../common/components/Main.tsx';
import { Entrypoint } from "uix/html/entrypoints.ts";

export default {
	'/': <Main/>,
	'/backend': null,
	'/hybrid': null
} satisfies Entrypoint;