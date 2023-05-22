import { loadMessage } from '$lib/server/message';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const id = parseInt(params.id);

    return json(loadMessage(id));
};