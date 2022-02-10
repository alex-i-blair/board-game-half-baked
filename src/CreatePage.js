import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);

  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  // here's the state you'll need:
  // title;
  // genre;
  // designer;
  // description;
  // minPlayers;
  // maxPlayers;

  async function handleSubmit(e) {
    e.preventDefault();
    await createGame({
      title,
      genre,
      designer,
      description,
      min_players: minPlayers,
      max_players: maxPlayers,
    });
    history.push('/board-games');
    // create a game

    // use history.push to send the user to the list page
  }

  return (
    <div className="create">
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
          Title
          {/* on change, set the title in state */}
          <input onChange={(e) => setTitle(e.target.value)} required name="title" />
        </label>
        <label>
          Genre
          {/* on change, set the genre in state */}
          <select onChange={(e) => setGenre(e.target.value)} required>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
          Designer
          {/* on change, set the designer in state */}
          <input onChange={(e) => setDesigner(e.target.value)} required name="designer" />
        </label>
        <label>
          Min Players
          {/* on change, set the min players in state */}
          <input onChange={(e) => setMinPlayers(e.target.value)} required name="min_players" />
        </label>
        <label>
          Max Players
          {/* on change, set the max players in state */}
          <input onChange={(e) => setMaxPlayers(e.target.value)} required name="max_players" />
        </label>
        <label>
          Description
          {/* on change, set the description in state */}
          <textarea onChange={(e) => setDescription(e.target.value)} required name="max_players" />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
