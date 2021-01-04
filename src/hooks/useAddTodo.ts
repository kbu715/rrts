import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';

export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(
    (text, importance) => dispatch(addTodo(text, importance)),
    [dispatch]
  );
}

//useCallback
/* 첫 번째 인수로 전달된 함수를 기억(리렌더링 하지 않음)
(두 번째 인수로 전달된 의존성이 변경되기 전까지) */
