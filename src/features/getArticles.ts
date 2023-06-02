import testData from "../testData.json"
import { Article } from "../../types"
export default function getArticles(lang: string): Article[] {
  return Object.values(testData[lang])
}
