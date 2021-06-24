import React from "react";

// Styles
import styles from "../../styles/Ninjas.module.css";

// Runs first // Fetch Data here
export const getStaticProps = async () => {
  // Runs at build-time
  // Create Fetch request
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  // Return data
  return {
    props: {
      // Attached to props
      ninjas: data,
    },
  };
};

// Runs After
const Ninjas = ({ ninjas }) => {
  // Fetch Data

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas &&
        ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
    </div>
  );
};

export default Ninjas;
