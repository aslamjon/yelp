import { createSelector } from "reselect";

const selectSidebar = state => state.sidebar;

export const viewSidebarCondition = createSelector(
    [selectSidebar],
    (value) => value.sidebarCondition
)
export const viewCurrentSidebar = createSelector(
    [selectSidebar],
    (value) => value.currentSidebar
)
export const viewMenuData = createSelector(
    [selectSidebar],
    (value) => value.menu
)