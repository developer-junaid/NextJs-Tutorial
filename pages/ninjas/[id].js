// Dynamic component
import React from "react";

// Runs at build time
export const getStaticPaths = async () => {
  // Fetch all Data and get ids
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  // Get ids
  const paths = data.map((user) => {
    return { params: { id: user.id.toString() } };
  });

  // Return
  return {
    paths, // Generate this page 10 times
    fallback: false, // for fallback pages, if it doesn't exist
  };
};

// Get Static Props // Runs for every page
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ); //Get single user
  const data = await response.json();

  // Return
  return {
    props: { ninja: data },
  };
};

// Component
const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
