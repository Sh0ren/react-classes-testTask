import React, { Component, ReactNode } from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../app/store"
import changePage from "../../app/reducer/changePageAction"

interface PaginationLogicProps {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  onPageChange: (page: number) => void
  children: (paginationProps: {
    minPage: number
    maxPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }) => ReactNode
}

class PaginationLogic extends Component<PaginationLogicProps> {
  render() {
    const { currentPage, itemsPerPage, totalItems, onPageChange, children } =
      this.props

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const minPage = Math.max(1, currentPage - 2)
    const maxPage = Math.min(totalPages, currentPage + 2)

    if (typeof children === "function") {
      return children({ minPage, maxPage, totalPages, onPageChange })
    }

    return null
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentPage: state.page,
    itemsPerPage: 10, // Replace with your desired items per page value
    totalItems: state.currentArticles.length,
  }
}

const mapDispatchToProps = {
  onPageChange: changePage,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PaginationLogic)
