

import React from 'react';
import './artist.css';

import { useSelector, useDispatch } from 'react-redux';
import { playTrack, togglePlay } from '../../actions/artist'

const TrackList = () => {
  const dispatch = useDispatch()
  const {tracks, currentPreviewUrl, isPlaying} = useSelector(state =>state.artist )

  if (!tracks || tracks.length === 0 ) return null;

  const trackIcon = track => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }

    if (currentPreviewUrl === track.preview_url && isPlaying) {
      return <span onClick={() => dispatch(togglePlay())}>| |</span>;
    } else {
      return <span onClick={() => dispatch(playTrack(track.preview_url))}>&#9654;</span>;
    }
  };

  return (
    <div>
      {tracks.map(track => {
        const { id, name, album } = track;

        return (
          <div key={id} className="track">
            <img
              src={album.images[0].url}
              alt="track"
              className="track-image"
            />
            <p className="track-text">{name}</p>
            <p className="track-icon">{trackIcon(track)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TrackList;
