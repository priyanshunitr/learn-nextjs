async function Comments({ params }) {
    console.log(await params);
    const {BLOGID, COMMENTID} = await params;
    return (
    <div>
      <h1>Blog {BLOGID} comments {COMMENTID} </h1>
    </div>
  );
}

export default Comments;