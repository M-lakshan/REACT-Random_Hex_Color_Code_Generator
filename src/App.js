import './App.css';

const hexcode_arr = [];

const random_hexcode_generator = () => {
  let hex_alphabet = ['A','B','C','D','E','F'];
  let hexcode = [];
  let hex_index = (min,max) => parseInt(Math.random() * (max - min) + min);

  while(hexcode.length<=5) {
    if(parseInt((Math.random()*10))%2===0) {
      hexcode.push(hex_index(0,9))
    } else {
      hexcode.push(hex_alphabet[hex_index(0,5)])
    }
  }
  return '#'+hexcode.join('');
}

const ColorTile = ({code}) => <div className="tile" style={{background: code}}>{code}</div>

const Container = ({ arr, count }) => {
  let tile_count = count;

  while(tile_count>=1 && arr.length<count) {
    let char_set = random_hexcode_generator();
    
    if(!(arr.includes(char_set))) {
      arr.push(char_set);
      tile_count--;
    } else {
      continue;
    }
  }

  return (
    <div className="container">
      {arr.map((elm,index) => <ColorTile code={elm} key={index} />)}
    </div>
  );
}

const Footer = () => <p>reload the page to generate colors</p>

function App() {
  return (
    <div className="App">
      <Container arr={hexcode_arr} count={5} />
      <Footer />
    </div>
  );
}

export default App;
