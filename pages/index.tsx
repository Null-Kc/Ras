import Head from "next/head"

import Header from "../components/Header";
import Footer from "../components/Footer";
import Members from "./Members";
import Contato from "./Contato"
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Ras</title>
      </Head>
      <Header/>
      <div id="Membros">
        <Members/>
      </div>
      <div id="Contato">
       <Contato/>
      </div>
      <Footer />
    </div>
  );
}
