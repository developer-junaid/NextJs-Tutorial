import Head from "next/head";
import Image from "next/image";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Styles
import styles from "../styles/Home.module.css";

// Link
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        commodi ipsum in pariatur soluta quam, omnis tenetur nisi aspernatur
        debitis blanditiis provident magni error expedita eveniet voluptas saepe
        adipisci cumque?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        commodi ipsum in pariatur soluta quam, omnis tenetur nisi aspernatur
        debitis blanditiis provident magni error expedita eveniet voluptas saepe
        adipisci cumque?
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
