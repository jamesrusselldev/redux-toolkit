import CakeView from "./features/cake/cakeView";
import ClickMap from "./features/clickMap/clickMap";
import CookiesView from "./features/cookies/cookiesView";
import GiftsView from "./features/gifts/gitsView";
import IceCreamView from "./features/icecream/iceCreamView";
import StockView from "./features/stock/StockView";
import UsersView from "./features/user/usersView";

function App() {
  return (
    <div className="App">
      {/* <div className="container ">
        <CakeView />
      </div>
      <div className="container ">
        <IceCreamView />
      </div>
      <div className="container ">
        <CookiesView />
      </div>
      <div className="container ">
        <GiftsView />
      </div>
      <div className="container">
        <StockView/>
      </div>
      <div className="container ">
        <UsersView />
      </div> */}
      <ClickMap/>
    </div>
  );
}

export default App;
