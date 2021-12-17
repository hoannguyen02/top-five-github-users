import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }: any) => {
  return (
    <div className="layout">
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
    </div>
  );
};

export default Layout;
