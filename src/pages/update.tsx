import type { NextPage } from "next";
import Head from "next/head";
import { UpdateView } from "../views";

const Update: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Token Creator</title>
        <meta
          name="description"
          content="Solana Token Creator"
        />
      </Head>
      <UpdateView />
    </div>
  );
};

export default Update;