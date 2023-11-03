import { Main } from "../common/components/Main.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";
import { renderBackend, renderHybrid, renderStatic } from "uix/base/render-methods.ts";

export default {
	'/': null,
	'/static': () => renderStatic(<Main/>),
	'/hybrid': () => renderHybrid(<Main/>),
} satisfies Entrypoint;