import { SidebarTypes } from './sidebar.type';

export const changeSidebar = item => ({
    type: SidebarTypes.CHANGE_SIDEBAR,
    payload: item
})

export const setCurrentSidebar = item => ({
    type: SidebarTypes.SET_CURRENT_SIDEBAR,
    payload: item
})

export const setMenuData = item => ({
    type: SidebarTypes.SET_MENU,
    payload: item
})

