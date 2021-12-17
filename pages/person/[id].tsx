import { TOP_FIVE_USERS } from "../../contants";

const Person = ({ data }: any) => {
  return <>{data?.name}</>;
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
