import {
  GET_ARTIST,
  ARTIST_ERROR,
  PLAY_TRACK,
  TOGGLE_PLAY,
  RESET_AUDIO
} from '../actions/types';

const initialState = {
  artist: null,
  tracks: [],
  currentPreviewUrl: null,
  isPlaying: false,
  audioPlayer: new Audio(),

  error: null,
};

const artistReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTIST:
      return { ...state, ...payload};

    case ARTIST_ERROR:
      return { ...state,error: payload };
    
    case PLAY_TRACK:
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(payload);
      state.audioPlayer.play();

      return { ...state, currentPreviewUrl: payload,  isPlaying: true};

    case TOGGLE_PLAY:
      if (state.isPlaying) {
        state.audioPlayer.pause();
      } else {
        state.audioPlayer.play();
      }

      return { ...state, isPlaying: !state.isPlaying };
        
    case RESET_AUDIO:
      if (state.isPlaying) {
        state.audioPlayer.pause();
      }
      
      return { ...state, currentPreviewUrl: null, isPlaying: false };
      
    default:
      return state;
  }
};

export default artistReducer;
