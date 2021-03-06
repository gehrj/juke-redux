//Action Creator

import {SET_LYRICS} from '../constants';
import axios from 'axios';
import store from 'redux'

export const setLyrics = function(text) {
    return {
        type: SET_LYRICS,
        lyric: text          //this is reffered to as the payload
    };
};

export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};
