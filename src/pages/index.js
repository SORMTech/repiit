import { useGlobalContext } from "../Layout/context";
import Head from "./../Layout/head";
import Hero from "../components/home/hero";

export default function Home() {
  const { name } = useGlobalContext();
  return (
    <>
      <Head />
      <Hero />
    </>
  );
}
