import Head from "next/head";
import Image from "next/image";

// Styles for this page
import styles from "../styles/Home.module.css";

// Link
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          commodi ipsum in pariatur soluta quam, omnis tenetur nisi aspernatur
          debitis blanditiis provident magni error expedita eveniet voluptas
          saepe adipisci cumque?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          commodi ipsum in pariatur soluta quam, omnis tenetur nisi aspernatur
          debitis blanditiis provident magni error expedita eveniet voluptas
          saepe adipisci cumque?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
