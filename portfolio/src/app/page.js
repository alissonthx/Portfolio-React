import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>Alisson's Portfolio</title>
        <meta name="description" content="Alisson's Portfolio - Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow w-full">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Alisson's Portfolio</h1>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        <p className="mt-3 text-2xl">
          Hi, I'm Alisson. A passionate Web Developer.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a href="#projects" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Projects &rarr;</h3>
            <p className="mt-4 text-xl">
              Check out some of my latest work and projects.
            </p>
          </a>

          <a href="#about" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">About Me &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about my background and skills.
            </p>
          </a>

          <a href="#contact" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Contact &rarr;</h3>
            <p className="mt-4 text-xl">
              Get in touch with me for collaborations or inquiries.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  );
}
