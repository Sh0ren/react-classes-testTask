interface ChangeArticlesAction {
  type: "CHANGE_ARTICLES"
  payload: any[]
}

export default function changeArticles(payload: any[]): ChangeArticlesAction {
  return {
    type: "CHANGE_ARTICLES",
    payload,
  }
}
