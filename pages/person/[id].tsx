const Person = ({ data }: any) => {
  return <>{data.name}</>;
};

export async function getStaticPaths() {
  return {
    paths: ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"].map(
      (fileName) => ({
        params: {
          id: fileName,
        },
      })
    ),
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }: any) {
  console.log(id);
  return {
    props: {
      title: "Person",
      data: {
        id: "GrahamCampbell",
        name: "Graham Campbell",
        avatar_url: "https://avatars1.githubusercontent.com/u/2829600?v=4",
        location: "The United Kingdom",
      },
    },
  };
}

export default Person;
