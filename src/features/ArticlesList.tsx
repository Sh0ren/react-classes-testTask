import React, { Component } from "react"
import { connect } from "react-redux"
import { RootState } from "../app/store"
import { Article } from "../../types"
import { ArticleItem } from "../entites/articleItem/ArticleItem"

interface ArticlesListProps {
  articles: Article[]
  page: number
}

interface ArticlesListState {
  elements: JSX.Element[] | null
}

class ArticlesList extends Component<ArticlesListProps, ArticlesListState> {
  constructor(props: ArticlesListProps) {
    super(props)
    this.state = {
      elements: null,
    }
  }

  componentDidMount() {
    this.updateElements()
  }

  componentDidUpdate(prevProps: ArticlesListProps) {
    if (
      prevProps.articles !== this.props.articles ||
      prevProps.page !== this.props.page
    ) {
      this.updateElements()
    }
  }

  updateElements() {
    const { articles, page } = this.props
    const elements: JSX.Element[] = []

    for (let i = (page - 1) * 10; i < page * 10 && i < articles.length; i++) {
      const el = articles[i]
      const key = Math.floor(Math.random() * 10000)
      const newEl = (
        <ArticleItem
          key={key}
          name={el.name}
          review={el.review}
          date={el.date}
        />
      )
      elements.push(newEl)
    }

    this.setState({ elements })
  }

  render() {
    const { elements } = this.state

    return <div className={"articles"}>{elements}</div>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    articles: state.currentArticles,
    page: state.page,
  }
}

export default connect(mapStateToProps)(ArticlesList)
