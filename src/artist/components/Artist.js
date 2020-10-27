import React from 'react';
import { useSelector } from 'react-redux';

const Artist = () => {
  const {artist} = useSelector(state =>state.artist )
  if (!artist) return null;

  const { images, name, followers, genres } = artist;

  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(', ')}</p>
      <img
        src={images[0] && images[0].url}
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
