export const STORYBOOK = false;
export const FIRST_BOOT = 'FIRST_BOOT';
export const TOKEN = 'TOKEN';
export const DISCOVERY_CAT_SELECTED = 'DISCOVERY_CAT_SELECTED';
export const MIN_LIST_ITEM = 25;

const ADDR = '192.168.0.102:4000/graphql';
export const HTTP_LINK = `http://${ADDR}`;
export const WS_LINK = `ws://${ADDR}`;

const EDAMAM_APP_ID = '8a1f0339';
const EDAMAM_APP_KEY = 'ca79e1ec692659d6989dba256d458f64';
export const EDAMAM_URL = `https://api.edamam.com/search?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`;

export const ANILIST_URL = 'https://graphql.anilist.co';

export type DISCOVERY_CATEGORIES = 'recipe' | 'anime';
