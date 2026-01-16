import todos from '@/todos.json';
import { connectDB, db } from '@/lib/connectDB';

// export async function GET(_,{ params }) {
//     const { api } = await params;
//     const data = todos.find(todo => todo.id == api);
//   return (
//     Response.json(data)
//   );
// }

export async function GET() {
  await connectDB();
  const data = await db.collection("Sample.Collection").find().toArray();
  const filteredData = data.map(({ name, status }) => ({ name, status }));
  return Response.json(filteredData);
}



export async function PUT(request, { params }) {
  const editTodoData = await request.json();
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => id == todo.id);
  const todo = todos[todoIndex];

  if (editTodoData.id) {
    return Response.json(
      { error: "Changing ID is not allow." },
      {
        status: 403,
      }
    );
  }

  const editedTodo = { ...todo, ...editTodoData };
  todos[todoIndex] = editedTodo;

  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(editedTodo);
}



export async function DELETE(_, { params }) {
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => id === todo.id);

  todos.splice(todoIndex, 1);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return new Response(null, {
    status: 204,
  });
}