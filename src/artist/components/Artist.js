import React from 'react';
import { useSelector } from 'react-redux';

const Artist = () => {
  const {artist} = useSelector(state =>state.artist )
  if (!artist) return null;

  const { imageUrl, name, followers, genres } = artist;

  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(', ')}</p>
      <img
        src={imageUrl}
        alt="artist-profile"
        style={{
          width: 350,
          height: 350,
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default Artist;
