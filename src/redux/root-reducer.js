import { combineReducers } from "redux";
import ArticleReduser from "./articles/article.reducer";
import cardReducer from "./card/card.reducer";
import SidebarReduser from "./sidebar/sidebar.reducer";
import TabsReduser from "./tabs/tabs.reducer";


const rootReducer = combineReducers({
    card: cardReducer,
    sidebar: SidebarReduser,
    tabs: TabsReduser,
    articles: ArticleReduser,
});

export default rootReducer;