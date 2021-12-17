import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { TOP_FIVE_USERS } from "../contants";

const Home: NextPage = () => {
  return (
    <>
      <h3>Top 5 Github Users</h3>
      <p>Tab the username to see more information</p>
      <div className={styles.usersContainer}>
        {TOP_FIVE_USERS.map((item, index) => {
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
