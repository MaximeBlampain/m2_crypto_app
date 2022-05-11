import { createSelector } from "reselect"

const profile = state => state.profile

export const selectLanguageKey = createSelector(
  [profile],
  select => select?.LANGUAGE_KEY
)