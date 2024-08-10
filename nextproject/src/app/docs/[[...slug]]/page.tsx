export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const { slug } = params;

  if (slug?.length === 2) {
    return (
      <h2>
        You are viewing example {slug[1]} of concept {slug[0]}
      </h2>
    );
  }
  if (slug?.length === 1) {
    return <h2>You are viewing concept {slug[0]}</h2>;
  }
  return <h1>viewing Docs page</h1>;
}
