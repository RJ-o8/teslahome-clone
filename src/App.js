import React from 'react'
import './App.css';
import Header from './Components/Header';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Items from './Components/Items';

function App() {
  return (
    <div className="App">

      <Header/>
      <div className="app__itemcontainer">
        <Items
          title = 'Model 3'
          desc = 'Money-back guarentee'
          descLinks=''
          backgroundImg = {Model3}
          leftBtnText ='Custom Order'
          rightBtnText = 'Learn More'
          twoButtons='true'
          first
        />
        <Items
          title = 'Model S'
          desc = 'Money-back guarentee'
          descLinks=''
          backgroundImg = {ModelS}
          leftBtnText ='Custom Order'
          rightBtnText = 'Learn More'
          twoButtons='true'
        />
        <Items
          title = 'Model X'
          desc = 'Money-back guarentee'
          descLinks=''
          backgroundImg = {ModelX}
          leftBtnText ='Custom Order'
          rightBtnText = 'Learn More'
          twoButtons='true'
        />
        <Items
          title = 'Model Y'
          desc = 'Money-back guarentee'
          descLinks=''
          backgroundImg = {ModelY}
          leftBtnText ='Custom Order'
          rightBtnText = 'Learn More'
          twoButtons='true'
        />
        <Items
          title = 'Solar Panels'
          desc = 'Money-back guarentee'
          descLinks=''
          backgroundImg = {SolarPanels}
          leftBtnText ='Custom Order'
          rightBtnText = 'Learn More'
          twoButtons='true'
        />
        <Items
          title = 'Solar Roof'
          desc = 'Money-back guarentee'
          descLinks=''
          backgroundImg = {SolarRoof}
          leftBtnText ='Custom Order'
          rightBtnText = 'Learn More'
          twoButtons='true'
        />
        <Items
          title = 'Accessories'
          desc = 'Money-back guarentee'
          descLinks=''
          backgroundImg = {Accessories}
          leftBtnText ='Custom Order'
          rightBtnText = 'Learn More'
          twoButtons='false'
        />
      </div>
    </div>
  );
}

export default App;
