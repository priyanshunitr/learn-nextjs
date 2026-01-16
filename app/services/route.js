import todos from '../../todos.json';
import { readFile, writeFile } from "fs/promises";

export async function GET() {
  return (
    Response.json(todos)
  );
}

export async function POST(req) {
    const todoData = await req.json();
    const newTodo = {
        id: todos.length + 1,
        name : todoData.name,
        status : todoData.status || 'pending'
    }
    todos.push(newTodo);
    await writeFile('todos.json', JSON.stringify(todos,null,2));
  return (
    Response.json(todos)
  );
}