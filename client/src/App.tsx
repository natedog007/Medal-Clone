import NavBar from "./components/NavBar"
import Video from "./components/Video"

function App() {


  return (
    <>

      <div className="min-h-screen bg-gray-600 text-white">
        <NavBar/>
        <div className="flex justify-center items-center text-5xl font-bold p-20">
          YOUR CLIPS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>

    </>
  )
}

export default App
