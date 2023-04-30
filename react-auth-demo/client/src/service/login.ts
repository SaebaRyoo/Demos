import request from "../utils/request";

export async function logout() {
  return request<API.User>(`/api/logout`, {
    method: "get",
  });
}
export async function login(params: { username: string; password: string }) {
  return request<API.User>(`/api/login`, {
    method: "post",
    data: params,
  });
}
