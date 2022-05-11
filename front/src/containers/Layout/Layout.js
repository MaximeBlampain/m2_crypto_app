import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Layout from "../../components/Layout"
import { useMemo } from "react"

// Actions

// Selectors
import { selectLanguageKey } from "../../stores/Profile/ProfileSelectors"
import { logout } from "../../stores/Login/LoginActions"

// Redux
const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
})

const mapStateToProps = createStructuredSelector({
  LANGUAGE_KEY: selectLanguageKey
})

export default connect(mapStateToProps,mapDispatchToProps)(Layout)
