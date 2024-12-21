function Head() {
  return (
    <section id="id1">
      <div className="flex justify-between items-center text-white bg-black p-3 font-bold shadow-lg">
        
        <div className="flex items-center gap-4">
          <img
            src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?semt=ais_hybrid"
            alt="Logo"
            className="w-13 h-11 rounded-full"
          />
          <h1>Play House</h1>
        </div>


        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md text-black"
          />
          <button className="bg-red-700 px-4 py-2 text-white rounded-md hover:bg-red-700 transition-all">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Head;
