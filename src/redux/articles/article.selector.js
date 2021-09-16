import { createSelector } from "reselect";

const selectArticles = state => state.articles;

export const getDiscount = createSelector(
    [selectArticles],
    (value) => value.discount
)
export const getArticles = createSelector(
    [selectArticles],
    (value) => value.articles
)