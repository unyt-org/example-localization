import { Logger } from "unyt_core/utils/logger.ts";
import { UIX } from "uix/uix.ts";
import { Main } from "../common/components/Main.tsx";

export default {
	'/': null,
	'/static': () => UIX.renderStatic(<Main/>),
	'/hybrid': <Main/>,
} satisfies UIX.Entrypoint;