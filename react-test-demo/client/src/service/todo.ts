import request from '../utils/request'

export async function findAllTodo() {
  return request(`/api/todo`, {
    method: 'get',
  });
}
export async function createTodoItem(params: {
    name: string;
}) {
  return request(`/api/todo`, {
    method: 'post',
    data: params,
  });
}

export async function updateTodoById(
  params: {
    id: string;
    name: string;
    done: boolean;
  },
  options?: { [key: string]: any }
) {
  return request(`/api/todo`, {
    method: 'patch',
    data: params,
    ...(options || {}),
  });
}


export async function deleteTodo(
  params: {
    id: string;
  },
  options?: { [key: string]: any }
) {
  return request(`/api/todo?id=${params.id}`, {
    method: 'delete',
    data: params,
    ...(options || {}),
  });
}
