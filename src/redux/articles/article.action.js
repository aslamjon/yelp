import {ArticleTypes} from './article.type';

export const setArticle = item => ({
    type: ArticleTypes.SET_ARTICLE_DATA,
    payload: item
})
export const setDiscount = item => ({
    type: ArticleTypes.SET_DISCOUNT_DATA,
    payload: item
})