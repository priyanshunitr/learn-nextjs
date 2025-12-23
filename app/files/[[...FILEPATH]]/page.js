async function Comments({ params }) {
    console.log(await params);
    const {FILEPATH} = await params;
    return (
    <div>
      <h1> {FILEPATH.join(' / ' )} not found </h1>
    </div>
  );
}

export default Comments;