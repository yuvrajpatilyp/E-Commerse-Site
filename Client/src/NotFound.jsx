import NavigationBar from "./Reusable/NavigationBar";
import Footer from "./Reusable/Footer"; 

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white text-black">
      <NavigationBar/>

      <div className="flex flex-col items-center mt-24 mb-32">
        <h1 className="text-6xl font-semibold">404 Not Found</h1>
        <p className="text-gray-500 mt-4">
          Your visited page not found. You may go home page.
        </p>
        <a href="/" className="mt-8">
          <button className="bg-red-500 text-white px-6 py-3 rounded">
            Back to home page
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
