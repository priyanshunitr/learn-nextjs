async function Comments({ params }) {
    console.log(await params);
    const {BLOGID} = await params;
    return (
    <div>
      <h1>Blog {BLOGID} comments</h1>
    </div>
  );
}

export default Comments;