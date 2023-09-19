import { UIX } from 'uix/uix.ts';
import { Main } from '../common/components/Main.tsx';

export default {
	'/': <Main/>,
	'/static': null,
	'/hybrid': null
} satisfies UIX.Entrypoint;