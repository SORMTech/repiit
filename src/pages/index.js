import { useGlobalContext } from "../Layout/context";
import Layout from "./../Layout/layout";
import Head from "./../Layout/head";
import Hero from "../components/home/hero";
import Main from "../components/home/main";
import { useEffect, useState } from "react";
import { getFeaturedProducts  } from "../utils/getData";

export default function Home({ featuredProducts, trendingProducts }) {
  const { name } = useGlobalContext();

  useEffect(() => {
    console.log(featuredProducts, trendingProducts)
  }, [featuredProducts, trendingProducts])

  return (
    <>
      <Layout>
        <Head />
        <Hero />
        <Main />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts()
  const trendingProducts = await getTrendingProducts()

  return {
    props: { featuredProducts, trendingProducts },
    revalidate: 1
  }
}
