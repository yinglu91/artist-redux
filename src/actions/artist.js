import axios from 'axios';
import {
  GET_ARTIST,
  ARTIST_ERROR,
  PLAY_TRACK,
  TOGGLE_PLAY,
  RESET_AUDIO
} from './types';

export const playTrack = (trackName) => {
   return ({
    type: PLAY_TRACK,
    payload: trackName
  });
}

export const togglePlay = () => (dispatch) => {
  dispatch({
    type: TOGGLE_PLAY
  });
}

export const resetAudio = () => (dispatch) => {
  dispatch({
    type: RESET_AUDIO
  });
}

// get artist
// 'https://spotify-api-wrapper.appspot.com/artist/Maria Callas'
export const getArtist = (artistName) => async (dispatch) => {
  resetAudio()
  
  try {
    const response = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${artistName}`)

    const artist0 = response.data.artists.items[0];
    console.log('yyyyy get artist', artist0);

    const { id, images, name, followers, genres } = artist0;
    const artist = { id, images, name, followers, genres };

    // get top tracks for the artist
    const response2 = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${artist.id}/top-tracks`)
    console.log('yyyyy get top-tracks', response2.data); 

    const {tracks} = response2.data

    dispatch({
      type: GET_ARTIST,
      payload: {artist,tracks}
    });

  } catch (err) {
    console.log(err.message)
    dispatch({
      type: ARTIST_ERROR,
    });
  }
};
