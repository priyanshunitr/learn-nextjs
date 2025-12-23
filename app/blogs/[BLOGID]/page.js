async function BlogID({ params }) {
    console.log(await params);
    const {BLOGID} = await params;
  return (
    <div>
      <h1>Blogs: {BLOGID}</h1>
    </div>
  );
}

export default BlogID;