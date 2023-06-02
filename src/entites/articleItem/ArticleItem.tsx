import React from "react"
import { Article } from "../../../types"

export const ArticleItem: React.FC<Article> = ({ name, review, date }) => {
  return (
    <div>
      {name} {review} {date}
    </div>
  )
}
