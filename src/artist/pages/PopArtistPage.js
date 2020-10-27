import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { resetAudio, getArtist } from '../../actions/artist'
import Artist from '../components/Artist'
import TrackList from '../components/TrackList'

const PopArtistPage = () => {
  // local state
  const [artistName, setArtistName] = useState('Whitney Houston');

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
          <option value="Whitney Houston">Whitney Houston</option>
          <option value="Michael Jackson">Michael Jackson</option>

          <option value="Johnny Cash">Johnny Cash</option>
          <option value="Loretta Lynn">Loretta Lynn</option>
          <option value="Randy Travis">Randy Travis</option>

          <option value="Lady Gaga">Lady Gaga</option>
        </select>
      </div>
    </div>
  );
}

export default PopArtistPage;
