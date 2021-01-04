// 액션 type
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// 액션 생성 함수
export const addTodo = (text: string, importance: number) => ({
  type: ADD_TODO,
  text,
  importance,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

// 액션들의 타입스크립트 타입 선언
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 상태를 위한 타입 선언
export type Todo = {
  id: number;
  text: string;
  importance: number;
  done: boolean;
};
export type TodosState = Todo[];

// 초깃값 설정
const initialState: TodosState = [];

const todosReducer = (
  state: TodosState = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Date.now();
      return state.concat({
        id: nextId,
        text: action.text,
        importance: action.importance,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todosReducer;
