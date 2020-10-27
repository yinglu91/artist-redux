import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { resetAudio, getArtist } from '../../actions/artist'
import Artist from '../components/Artist'
import TrackList from '../components/TrackList'

const ArtistPage = () => {
  // local state
  const [artistName, setArtistName] = useState('Maria Callas');

  // global state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAudio());

    dispatch(getArtist(artistName))
  }, [artistName, dispatch]);

  return (
    <div>
      <Artist />
      <TrackList />

      <h1>Select Artist</h1>
      <div className="form">
        <select
          onChange={event => setArtistName(event.target.value)}
          value={artistName}
        >
          <option value="Maria Callas">Maria Callas</option>
          <option value="Luciano Pavarotti">Luciano Pavarotti</option>
          <option value="Joan Sutherland">Joan Sutherland</option>
          <option value="Renata Tebaldi">Renata Tebaldi</option>
          <option value="Montserrat Caballe">Montserrat Caballé</option>
        </select>
      </div>
    </div>
  );
}

export default ArtistPage;
