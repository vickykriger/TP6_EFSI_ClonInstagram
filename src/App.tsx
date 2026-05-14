import SideBar from './components/SideBar';
import StoriesBar from './components/StoriesBar';
import PostCard from './components/PostCard';
import SuggestionsBar from './components/SuggestionsBar';
function App() {

  return (
    <>
      <div className="app">
        <SideBar />
        <main className="main">
          <div className="feed">
            <StoriesBar />
            <PostCard />
            <PostCard />
          </div>

          <aside className="suggestions">
            <SuggestionsBar />
          </aside>
        </main>
      </div>
    </>
  )
}

export default App
