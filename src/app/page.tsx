import Link from "next/link";

const Homepage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc')",
          zIndex: 0,
        }}
      ></div>

      {/* Softer overlay */}
      <div className="absolute inset-0 bg-gray-100 bg-opacity-70 z-10 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-6"
          style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          Welcome to the School Management Portal
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl text-gray-700 mb-10 font-medium">
          A unified dashboard for students, teachers, and administrators.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6">
          <Link href="/admin">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white text-lg font-semibold py-3 px-8 rounded-2xl shadow-md transition duration-200">
              Admin Dashboard
            </button>
          </Link>
          <Link href="/student">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white text-lg font-semibold py-3 px-8 rounded-2xl shadow-md transition duration-200">
              Student Dashboard
            </button>
          </Link>
          <Link href="/teacher">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white text-lg font-semibold py-3 px-8 rounded-2xl shadow-md transition duration-200">
              Teacher Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
