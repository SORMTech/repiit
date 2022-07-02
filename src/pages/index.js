import { useGlobalContext } from "../Layout/context";
import Layout from "./../Layout/layout";
import Head from "./../Layout/head";
import Hero from "../components/home/hero";
import Main from "../components/home/main";
import { useEffect } from "react";
import { getProductsByProp } from "../utils/getData";

export default function Home({ featuredProducts, trendingProducts }) {
  const { name } = useGlobalContext();

  useEffect(() => {
    // console.log(featuredProducts, trendingProducts)
  }, [featuredProducts, trendingProducts])

  return (
    <>
      <Layout>
        <Head />
        <Hero />
        <Main featuredProducts={featuredProducts} trendingProducts={trendingProducts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getProductsByProp('featured', 4)
  const trendingProducts = await getProductsByProp('trending', 4)

  return {
    props: { featuredProducts, trendingProducts },
    revalidate: 1
  }
}
