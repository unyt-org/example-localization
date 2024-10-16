import { Main } from 'common/components/Main.tsx';
import { Entrypoint } from "uix/providers/entrypoints.ts";

export default {
	'/': <Main/>,
	'/backend': null,
	'/hybrid': null
} satisfies Entrypoint;