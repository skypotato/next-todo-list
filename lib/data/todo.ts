import {readFileSync, writeFileSync} from "fs";
import {TodoType} from "../../types/todo";

/**
 * TODO 리스트 불러오기
 */
const getTodoList = () => {
    const todosBuffer = readFileSync("data/todos.json");
    const todosString = todosBuffer.toString();
    if (!todosString) {
        return [];
    }
    const todos: TodoType[] = JSON.parse(todosString);
    return todos;
};

/**
 * 해당 id의 TODO가 있는지 확인
 * @param id - 아이디
 */
const isExistTodoById = ({id}: { id: number }) => {
    const todos = getTodoList();
    const todo = todos.some((todo) => todo.id === id);
    return todo;
};

/**
 * TODO 리스트를 저장
 * @param todos - TODO 리스트
 */
const saveTodoList = async (todos: TodoType[]) => {
    writeFileSync("data/todos.json", JSON.stringify(todos));
};

export default {getTodoList, isExistTodoById, saveTodoList}
