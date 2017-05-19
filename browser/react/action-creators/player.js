//Action Creator

import {START_PLAYING} from '../constants';
import axios from 'axios';
import store from 'redux'

export const startPlaying = function(blnIsPlaying) {
    return {
        type: START_PLAYING,
        isPlaying: blnIsPlaying          //this is reffered to as the payload
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
