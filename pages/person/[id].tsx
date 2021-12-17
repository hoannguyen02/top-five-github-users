/* eslint-disable @next/next/no-img-element */
import { TOP_FIVE_USERS } from "../../contants";
import styles from "../../styles/Person.module.css";

const Person = ({ data }: any) => {
  return (
    <div className={styles.personContainer}>
      <img
        className={styles.personAvatar}
        alt={data.name}
        title={data.name}
        src={data.avatar_url}
      />
      <div>
        <p className={styles.personName}>{data.name}</p>
        <p>{data.location}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: TOP_FIVE_USERS.map((fileName) => ({
      params: {
        id: fileName,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }: any) {
  const res = await fetch(`https://api.github.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      title: "Person",
      data: data,
    },
  };
}

export default Person;
