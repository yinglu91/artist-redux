import axios from 'axios';
import {
  GET_ARTIST,
  ARTIST_ERROR,

  PLAY_TRACK,
  TOGGLE_PLAY,
  RESET_AUDIO
} from './types';

export const playTrack = (previewUrl) => {
   return {
    type: PLAY_TRACK,
    payload: previewUrl
  };
}

export const togglePlay = () => {
  return {
    type: TOGGLE_PLAY
  };
}

export const resetAudio = () => {
  return {
    type: RESET_AUDIO
  };
}

// https://spotify-api-wrapper.appspot.com/artist/Maria Callas
// https://spotify-api-wrapper.appspot.com/artist/0bjdfjE8XbLa2Odstu6E1E/top-tracks

export const getArtist = (artistName) => async (dispatch) => {
  resetAudio()
  
  try {
    const response = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${artistName}`)

    const artist0 = response.data.artists.items[0];

    const { id, images, name, followers, genres } = artist0;
    const artist = { id, imageUrl: images[0].url, name, followers, genres };

    // get top tracks for the artist
    const response2 = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${artist.id}/top-tracks`)

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
