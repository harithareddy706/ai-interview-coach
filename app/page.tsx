export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">

        <h1 className="text-6xl font-bold text-blue-600">
          AI Interview Coach
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          Practice interviews, analyze your resume,
          improve your ATS score, and receive AI-powered
          feedback to land your dream job.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Upload Resume
          </button>

          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-black">
            Start Interview
          </button>

        </div>

      </div>
    </main>
  );
}