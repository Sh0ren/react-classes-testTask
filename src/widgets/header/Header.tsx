import Clock from "../../entites/clock/clock"
import LanguageSelector from "../../entites/LanguageSelector/LanguageSelector"

export default function Header() {
  return (
    <div className={"header"}>
      <Clock></Clock>
      <LanguageSelector></LanguageSelector>
    </div>
  )
}
