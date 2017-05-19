//Action Creator

import {SET_LYRICS} from '../constants';

export const setLyrics = function(text) {
    return {
        type: SET_LYRICS,
        lyric: text          //this is reffered to as the payload
    };
};