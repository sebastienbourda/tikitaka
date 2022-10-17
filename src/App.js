import logo from './logo.svg';
import './App.scss';

const products = [
  {
    "id": 1,
    "name": "Argentine 2010",
    "imageUrl": "https://raw.githubusercontent.com/sebastienbourda/tikitaka-api/main/images/argentine.jpeg",
    "price": 164,
    "priceCurrency": "EUR"
  },
  {
    "id": 2,
    "name": "Messi 2020",
    "imageUrl": "https://raw.githubusercontent.com/sebastienbourda/tikitaka-api/main/images/messi.jpeg",
    "price": 200,
    "priceCurrency": "EUR"
  }
]

function App(props) {
  const listProducts = products.map((product) =>
    <li>
      {product}
    </li>
  );
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>Accueil</li>
          <li>Recherche</li>
          <li>
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li>Centre d'aide</li>
          <li>Vendre</li>
        </ul>
      </header>
      <section>
        <h2><span className="red-word">Achetes</span> et <span className="red-word">Vends</span> des maillots de football authentiques.</h2>
        <div className="products">
          { listProducts }
          <div className="product">
            <img src="" alt="" />
            <div className="title"></div>
            { products[0].name }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
