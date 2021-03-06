import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

function App() {
  return <div className="App"><Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Launch"> Launch</Link>

    </nav>

    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="launch" element={<Launch />} >
        <Route path="/" element={<LaunchIndex />} />
        <Route path=":slug" element={<LaunchShoe />} />
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </Router>
  </div>
}

function NotFound () {
  return(
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return <div>
    <h1>Welcome Home!</h1>
  </div>
}

function Launch() {
  return <div>
    <h1>Launch</h1>
    <Outlet />
  </div>
}

function LaunchIndex() {
  return <ul >
    {Object.entries(shoes).map(([slug, { name, img }]) => (
      <li key={slug}>
        <Link to={`/launch/${slug}`}>
          <h2>{name}</h2>
          <img src={img} alt={name} height={200} />
        </Link>
      </li>))}
  </ul>
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}


const shoes = {
  "air-jordon-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordon-mars-270-london": {
    name: "JORDON MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordon-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};


export default App;