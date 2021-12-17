import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }: any) => {
  return (
    <>
      <Head>
        <title>Top 5 Github Users</title>
        <meta name='description' content='Top 5 Github Users' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        {title && (
          <Link href='/' passHref>
            <a className='btn-back'>Back</a>
          </Link>
        )}
        {title || "Home"}
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
