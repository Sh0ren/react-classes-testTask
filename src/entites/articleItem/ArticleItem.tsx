import React from "react"
import { Article } from "../../../types"

export const ArticleItem: React.FC<Article> = ({ name, review, date }) => {
  const nameArr = name.split(" ")
  const formattedName = `${nameArr[0]}  ${
    nameArr[1] ? nameArr[1][0] + "." : ""
  }`
  return (
    <div>
      {formattedName} {review} {date}
    </div>
  )
}
