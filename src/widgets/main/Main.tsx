import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../app/store"
import ArticlesList from "../../features/ArticlesList"
import changeArticles from "../../app/reducer/changeArticlesAction"
import getArticles from "../../features/getArticles"
import PaginationLogic from "../../features/pagination/PaginationLogic"
import PaginationUI from "../../features/pagination/PaginationUI"

interface MainProps extends PropsFromRedux {
  language: string
}

class Main extends React.Component<MainProps> {
  componentDidMount() {
    this.fetchArticles()
  }

  componentDidUpdate(prevProps: MainProps) {
    if (prevProps.language !== this.props.language) {
      this.fetchArticles()
    }
  }

  fetchArticles() {
    const { language, changeArticles } = this.props
    changeArticles(getArticles(language))
  }

  render() {
    return (
      <div>
        <ArticlesList />
        <PaginationLogic>{() => <PaginationUI />}</PaginationLogic>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
  }
}

const mapDispatchToProps = {
  changeArticles,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Main)
