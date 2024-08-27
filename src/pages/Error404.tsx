type Error404props = {
  error?: Error;
};

export default function Error404({ error }: Error404props) {
  return (
    <>
      <div>HTTP 404: Not Found</div>
      <div>The server cannot find the resource you have requested.</div>
      {error && <div>Error name {`${error.name}`}</div>}
      {error && <div>Error message {`${error.message}`}</div>}
    </>
  );
}
