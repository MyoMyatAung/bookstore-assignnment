import BookList from "./components/Book/BookList/BookList";
import Search from "./components/Search/Search/Search";
import Sort from "./components/Search/Sort/Sort";
import Card from "./components/UI/Card/Card";
import Divider from "./components/UI/Divider/Divider";

function App() {
  return (
    <div className="container">
      <Card row>
        <Search />
        <Divider />
        <Sort />
      </Card>
      <Card>
        <BookList />
      </Card>
    </div>
  );
}

export default App;
