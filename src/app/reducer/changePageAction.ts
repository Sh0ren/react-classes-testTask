interface ChangePageAction {
  type: "CHANGE_PAGE"
  payload: number
}

export default function changePage(page: number): ChangePageAction {
  return {
    type: "CHANGE_PAGE",
    payload: page,
  }
}
