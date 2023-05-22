import { fakeData } from "$lib/data/fakeData";

export function loadMessage(id: number = 0, perPage = 10) {
    return fakeData.slice(id, id + perPage);
}