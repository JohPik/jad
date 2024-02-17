import Link from "next/link";

const NoMatch = () => {
  return (
    <section className="404-page">
      <div>
        <h1 className="underline">Error 404</h1>
        <p>Ooops Wrong page!</p>
        <button className="smart">
          <Link href="/">RETURN TO THE HOME PAGE</Link>
        </button>
      </div>
    </section>
  );
};

export default NoMatch;
