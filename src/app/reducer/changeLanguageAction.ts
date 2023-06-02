interface ChangeLanguageAction {
  type: "CHANGE_LANGUAGE"
  payload: string
}

export function changeLanguage(language: string): ChangeLanguageAction {
  return {
    type: "CHANGE_LANGUAGE",
    payload: language,
  }
}
