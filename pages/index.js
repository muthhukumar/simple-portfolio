import Head from 'next/head'
import Link from 'next/link';

import Title from '../components/title';
import About from '../components/about';

export default function Home() {
  return (
    <div className="m-auto items-center justify-center h-screen flex w-9/12">
      <Head>
        <title>Muthukumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title />
        <About title="About">
          <div className="text-gray-800 my-1 tracking-wide">Hi there,
          My name is Muthukumar and I'm a MERN full stack developer.
          Love to create website and apps using React.
          Currently in love with using Nextjs and tailwindcss.</div>
        </About>
        <About title="Contact">
          <div className="text-gray-800 my-1 tracking-wide">Want to react out? Contact me by <Link href="https://twitter.com/am_muthukumar"><a className="underline">
            Twitter</a></Link> or <Link href="https://github.com/muthhukumar"><a className="underline">GitHub</a></Link></div>
        </About>
      </main>

      <footer ></footer>
    </div>
  )
}
