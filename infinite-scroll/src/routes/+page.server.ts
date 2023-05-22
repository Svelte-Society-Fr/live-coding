import { loadMessage } from '$lib/server/message';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        messages: loadMessage(0, 40)
    };
}) satisfies PageServerLoad;
