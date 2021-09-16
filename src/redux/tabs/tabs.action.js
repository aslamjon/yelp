import {TabsTypes} from './tabs.type.js';

export const setCurrentTabs = item => ({
    type: TabsTypes.SET_CURRENT_TAB,
    payload: item
})
export const changeTabs = item => ({
    type: TabsTypes.CHANGE_TAB,
    payload: item
})