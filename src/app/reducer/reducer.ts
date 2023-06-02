interface AppState {
  page: number
  language: string
  currentArticles: any[] // Здесь необходимо указать тип вашего массива статей
}

const initialState: AppState = {
  page: 1,
  language: "ru",
  currentArticles: [],
}

type AppAction = {
  type: "CHANGE_LANGUAGE" | "CHANGE_PAGE" | "CHANGE_ARTICLES"
  payload?: string | number | any[]
}

export default function appReducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload as string }

    case "CHANGE_PAGE":
      return { ...state, page: action.payload as number }
    case "CHANGE_ARTICLES":
      return { ...state, currentArticles: action.payload as any[] }

    default:
      return state
  }
}
