export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          AI Interview Coach
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Upload your resume and practice AI-powered interviews.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </main>
  );
}