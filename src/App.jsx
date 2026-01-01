function App() {
  return (
    <div className="p-6 space-y-10">

      {/* 1 Button */}
      <section>
        <h2 className="font-bold text-xl mb-2">Tailwind Button</h2>
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 active:bg-gray-400">
          Click Me
        </button>
      </section>

      {/* 2 Image with Hover */}
      <section>
        <h2 className="font-bold text-xl mb-2">Image Hover Effect</h2>
        <div className="w-60 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
          <img src="https://via.placeholder.com/300" />
        </div>
      </section>

      {/* 3 Responsive Text */}
      <section>
        <h2 className="font-bold text-xl mb-2">Responsive Text</h2>
        <p className="text-lg md:text-2xl lg:text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Tailwind Responsive Text Example
        </p>
      </section>

      {/* 4 List */}
      <section>
        <h2 className="font-bold text-xl mb-2">Styled List</h2>
        <ul className="list-disc pl-6">
          <li className="hover:text-blue-600">List Item 1</li>
          <li className="hover:text-blue-600">List Item 2</li>
          <li className="hover:text-blue-600">List Item 3</li>
        </ul>
      </section>

      {/* 5 Card */}
      <section>
        <h2 className="font-bold text-xl mb-2">Tailwind Card</h2>
        <div className="bg-white shadow-lg rounded-lg p-4 w-64">
          <img src="https://via.placeholder.com/300" className="rounded" />
          <h3 className="font-bold mt-2 text-lg">Card Title</h3>
          <p className="text-gray-600 text-sm">Card description here...</p>
          <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded">
            Learn More
          </button>
        </div>
      </section>

      {/* 6 Table */}
      <section>
        <h2 className="font-bold text-xl mb-2">Styled Table</h2>
        <table className="border border-gray-300 min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-1">Name</th>
              <th className="border px-4 py-1">Email</th>
              <th className="border px-4 py-1">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-1">User A</td>
              <td className="border px-4 py-1">a@mail.com</td>
              <td className="border px-4 py-1">Admin</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 7 Form */}
      <section>
        <h2 className="font-bold text-xl mb-2">Input Form</h2>
        <form className="flex flex-col gap-3 w-64">
          <input placeholder="Name" className="border rounded px-2 py-1 focus:outline-blue-500" />
          <input placeholder="Email" className="border rounded px-2 py-1 focus:outline-blue-500" />
          <input placeholder="Password" className="border rounded px-2 py-1 focus:outline-blue-500" />
          <button className="bg-blue-600 text-white py-1 rounded">Submit</button>
        </form>
      </section>

      {/* 8 Navbar */}
      <section>
        <h2 className="font-bold text-xl mb-2">Navbar</h2>
        <nav className="flex flex-col md:flex-row gap-4 p-3 bg-gray-200">
          <a className="text-blue-700 font-semibold" href="#">Home</a>
          <a className="text-blue-700 font-semibold" href="#">Features</a>
          <a className="text-blue-700 font-semibold" href="#">Contact</a>
        </nav>
      </section>

      {/* 9 Grid */}
      <section>
        <h2 className="font-bold text-xl mb-2">Grid Layout</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white shadow rounded p-4">
              Card {i}
            </div>
          ))}
        </div>

      </section>
      
      {/* 10 Responsive Design */}
      <div>
        <nav className="flex flex-col md:flex-row gap-4 p-4 bg-gray-200">
          <a className="text-blue-700 font-bold" href="#">Home</a>
          <a className="text-blue-700 font-bold" href="#">Features</a>
          <a className="text-blue-700 font-bold" href="#">Contact</a>
        </nav>

        <section className="p-6 flex flex-col gap-10">

          <h1 className="text-3xl md:text-5xl font-bold text-center">Mini Responsive Website</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white shadow rounded p-4">
                Mini Card {i}
              </div>
            ))}
          </div>

          <form className="flex flex-col gap-3 w-60 mx-auto">
            <input placeholder="Email" className="border rounded px-2 py-1" />
            <button className="bg-blue-600 text-white py-2 rounded">
              Subscribe
            </button>
          </form>

        </section>  

      </div>

    </div>
  );
}

export default App;