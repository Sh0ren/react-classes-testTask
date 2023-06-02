import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { changeLanguage } from "../../app/reducer/changeLanguageAction"
import { RootState } from "../../app/store"

// Определяем тип свойств компонента
type PropsFromRedux = ConnectedProps<typeof connector>

class LanguageSelector extends React.Component<PropsFromRedux> {
  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value
    this.props.dispatch(changeLanguage(selectedLanguage))
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <label htmlFor="language">Select Language:</label>
        <select id="language" onChange={this.handleLanguageChange}>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    )
  }
}

// Определяем функцию для связи с Redux Store
const mapStateToProps = (state: RootState) => ({})

const connector = connect(mapStateToProps)

export default connector(LanguageSelector)
