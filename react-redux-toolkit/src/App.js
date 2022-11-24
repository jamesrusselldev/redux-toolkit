import CakeView from "./features/cake/cakeView";
import CookiesView from "./features/cookies/cookiesView";
import GiftsView from "./features/gifts/gitsView";
import IceCreamView from "./features/icecream/iceCreamView";
import UsersView from "./features/user/usersView";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <CakeView />
      </div>
      <div className="container ">
        <IceCreamView />
      </div>
      <div className="container ">
        <CookiesView />
      </div>
      <div className="container ">
        <UsersView />
      </div>
      <div className="container ">
        <GiftsView />
      </div>
    </div>
  );
}

export default App;
