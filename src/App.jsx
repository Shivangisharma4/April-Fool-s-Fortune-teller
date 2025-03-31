import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [fortune, setFortune] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fortunes = [
    `You’ll land a hot date with confidence, then trip and eat dirt calling it swagger—April Fool’s says you’re just clumsy`,
    `Your cooking wins a contest for effort, but it’s so nasty your mom stops visiting—April Fool’s exposes the stench`,
    `You’ll flex charm like a star, but your face makes mirrors crack in shame—April Fool’s caught you slipping`,
    `A clown hires you for the circus, then says you’re too pathetic to juggle failure—April Fool’s hands you the tiny hat`,
    `Your outfit gets likes online, but it’s so trash Goodwill bans you for life—April Fool’s trashes your drip`,
    `You’ll win a tug-of-war with grit, then lose to your blanket that’s got more spine—April Fool’s picks the real champ`,
    `Your dancing heats up nights at the club, but it’s so bad the place empties when you show—April Fool’s clears the floor`,
    `You’ll flirt with rizz on lock, but even your dog swipes left on that mess—April Fool’s barks the truth`,
    `Your hair gets praise for style, but it’s such a wreck barbers charge triple—April Fool’s cuts you down`,
    `Your shadow pulls off cool vibes, but you’re just the loser tagging along—April Fool’s leaves you in the dark`,
    `You’ll act smart with answers ready, but your brain’s on life support and flatlining—April Fool’s pulls the plug`,
    `Your toast earns chef points, then burns so bad smoke alarms sue for trauma—April Fool’s smells the fail`,
    `Your jokes land big at first, but they’re so dead your friends fake their laughs—April Fool’s kills the punchline`,
    `You’ll strut like a boss with swagger, but you’re the punchline nobody hired—April Fool’s steals the show`,
    `Your singing hits high notes, but it’s so awful the neighbors move away—April Fool’s mutes the mic`,
    `You’ll score a win in a game, then slip on your shoelace in front of the crowd—April Fool’s trips you up`,
    `Your selfie gets tons of hype, but your grin scares kids at the park—April Fool’s flips the filter`,
    `You’ll nail a cool trick on your bike, then crash into a bush full of bees—April Fool’s stings the win`,
    `Your new shoes turn heads, but they squeak so loud dogs chase you home—April Fool’s walks it back`,
    `You’ll ace a quiz with smarts, then spill ketchup all over your notes—April Fool’s stains the glory`,
  ];

  const getFortune = () => {
    if (!username.trim()) {
      setFortune('Enter a username, or are you too clumsy already');
      return;
    }
    setIsLoading(true);
    setFortune('');
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const newFortune = fortunes[randomIndex].replace('@USER', username);
      setFortune(newFortune);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="app">
      <div className="fortune-box">
        <h1>April Fool's Fortune Teller</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your X username"
        />
        <button onClick={getFortune} disabled={isLoading}>
          {isLoading ? 'Foretelling...' : 'Get Your Fortune'}
        </button>
        {isLoading && <div className="loading">Loading your fate...</div>}
        {fortune && !isLoading && <div className="result">{fortune}</div>}
      </div>
    </div>
  );
}

export default App;