import React from "react"
import { connect } from "react-redux"
import PaginationLogic from "./PaginationLogic"
import { RootState } from "../../app/store"
import changePage from "../../app/reducer/changePageAction"

interface PaginationUIProps {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

class PaginationUI extends React.Component<PaginationUIProps> {
  render() {
    const { totalItems, currentPage, itemsPerPage, onPageChange } = this.props

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const minPage = Math.max(1, currentPage - 2)
    const maxPage = Math.min(totalPages, currentPage + 2)

    const midPages = []
    for (let i = minPage; i <= maxPage; i++) {
      midPages.push(i)
    }

    return (
      <div>
        {/* Кнопка для переключения на предыдущую страницу */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Номера страниц */}
        {minPage > 1 && (
          <>
            <button onClick={() => onPageChange(1)}>1</button>
            {minPage > 2 && <span>...</span>}
          </>
        )}
        {midPages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        {maxPage < totalPages && (
          <>
            {maxPage < totalPages - 1 && <span>...</span>}
            <button onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </button>
          </>
        )}

        {/* Кнопка для переключения на следующую страницу */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    totalItems: state.currentArticles.length,
    currentPage: state.page,
    itemsPerPage: 10,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPageChange: (page: number) => dispatch(changePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationUI)
