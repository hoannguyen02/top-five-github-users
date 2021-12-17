import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

const Home: NextPage = () => {
  return (
    <>
      <h3>Top 5 Github Users</h3>
      <p>Tab the username to see more information</p>
      <div className={styles.usersContainer}>
        {topFive.map((item, index) => {
          return (
            <Link key={`${item}-${index}`} href={`person/${item}`} passHref>
              <a className={styles.item}>{item}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
