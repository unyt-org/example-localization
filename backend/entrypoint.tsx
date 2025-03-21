import { Main } from "common/components/Main.tsx";
import { Entrypoint } from "uix/providers/entrypoints.ts";
import { renderBackend } from "uix/base/render-methods.ts";

export default {
  "/": null,
  "/backend": () => renderBackend(<Main />), // Uses backend language
  "/hybrid": () => <Main />,
} satisfies Entrypoint;
