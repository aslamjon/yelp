import { createSelector } from "reselect";

const selectTab = state => state.tabs;

export const showTab = createSelector(
    [selectTab],
    (value) => value.showCurrentTab
)
export const getTabs = createSelector(
    [selectTab],
    (value) => value.tabs
)