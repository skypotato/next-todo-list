import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

/**
 * REST API
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param req
 * @param res
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.isExistTodoById({ id: todoId });
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = Data.todo.getTodoList();
      const changedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });

      Data.todo.saveTodoList(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  if (req.method === "DELETE") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.isExistTodoById({ id: todoId });
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = Data.todo.getTodoList();
      const filteredTodos = todos.filter((todo) => todo.id !== todoId);
      Data.todo.saveTodoList(filteredTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  res.statusCode = 405; // 허용되지 않는 메서드 사용
  return res.end();
};
