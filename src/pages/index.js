import { useGlobalContext } from "../Layout/context";
import Layout from "./../Layout/layout";
import Head from "./../Layout/head";
import Hero from "../components/home/hero";
import Main from "../components/home/main";
import { useEffect } from "react";
import { getProductsByPropty } from "../utils/getData";
import { useAuth } from "../context/AuthContext";

export default function Home({ featuredProducts, trendingProducts }) {
  const { user } = useAuth()
  const { name } = useGlobalContext();

  useEffect(() => {
    // console.log(featuredProducts, trendingProducts)
  }, [featuredProducts, trendingProducts])

  return (
    <>
      <Layout user={user} >
        <Head />
        <Hero />
        <Main featuredProducts={featuredProducts} trendingProducts={trendingProducts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getProductsByPropty('featured', 4)
  const trendingProducts = await getProductsByPropty('trending', 4)

  return {
    props: { featuredProducts, trendingProducts },
    revalidate: 1
  }
}
