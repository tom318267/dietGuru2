import Head from "next/head";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/apple.png" />
        <title>DietGuru</title>
      </Head>
      <Navbar />
      <Homepage />
    </div>
  );
}
