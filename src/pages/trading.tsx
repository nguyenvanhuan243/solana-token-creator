import type { NextPage } from "next";
import Head from "next/head";
import { TradingView } from "../views";

const Trading: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <TradingView />
    </div>
  );
};

export default Trading;