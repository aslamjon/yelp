import {TabsTypes} from './tabs.type.js';

import Grilled from '../../assets/images/grilled.png'
import Burger from '../../assets/images/burger.png'
import Pizza from '../../assets/images/pizza.png'
import FreshSalad from '../../assets/images/fresh-salad.png'
import Donut from '../../assets/images/donut.png'
import Drinks from '../../assets/images/drinks.png'

import BurgerWanted from '../../assets/images/burgerWanted.png'
import ButterChciken from '../../assets/images/butterChciken.png'
import Palov from '../../assets/images/Palov.png'
import Soup from '../../assets/images/Soup.png'
import PalowWithChikeen from '../../assets/images/PalowWithChikeen.png'
import ButterChicken from '../../assets/images/ButterChicken.png'


const INITIAL_STATE = {
    showCurrentTab: 1,
    tabs: [
        {
            id: 1,
            title: 'All',
            img: Grilled,
            items: []
        },
        {
            id: 2,
            title: 'Burger',
            img: Burger,
            items: [
                {
                    id: 1,
                    title: "Burger Wanted",
                    des: `Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade`,
                    img: BurgerWanted,
                    price: 29,
                    fire: true,
                    like: false,
                    star: false,
                    order: false
                },
            ]
        },
        {
            id: 3,
            title: 'Pizza',
            img: Pizza,
            items: []
        },
        {
            id: 4,
            title: 'Salads',
            img: FreshSalad,
            items: [
                {
                    id: 1,
                    title: "Butter Chciken",
                    des: `Reis, Sous-vide Chicken,
                    Penaut Satay, Babyspian`,
                    img: ButterChciken,
                    price: 56,
                    fire: false,
                    like: true,
                    star: false,
                    order: true
                },
                {
                    id: 2,
                    title: "Hi, Salmon",
                    des: `Rels, Zoodies, Garnein
                    Dressings, Avacode
                    Edanmame, Maris.`,
                    img: Palov,
                    price: 69,
                    fire: false,
                    like: false,
                    star: false,
                    order: false
                },
                {
                    id: 3,
                    title: "Soup",
                    des: `Rels, Zoodies, Garnein
                    Dressings, Avacode
                    Edanmame, Maris.`,
                    img: Soup,
                    price: 34,
                    fire: false,
                    like: false,
                    star: false,
                    order: false
                },
                {
                    id: 4,
                    title: "Palow With Chikeen",
                    des: `Rels, Zoodies, Garnein
                    Dressings, Avacode
                    Edanmame, Maris.`,
                    img: PalowWithChikeen,
                    price: 48,
                    fire: false,
                    like: false,
                    star: false,
                    order: false
                },
                {
                    id: 5,
                    title: "Butter Chicken",
                    des: `Rels, Zoodies, Garnein
                    Dressings, Avacode
                    Edanmame, Maris.`,
                    img: ButterChicken,
                    price: 25,
                    fire: false,
                    like: false,
                    star: true,
                    order: false
                },
            ]
        },
        {
            id: 5,
            title: 'Donut',
            img: Donut,
            items: []
        },
        {
            id: 6,
            title: 'Drinks',
            img: Drinks,
            items: []
        },
    ],

}
const TabsReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TabsTypes.SET_CURRENT_TAB:
            return {
                ...state,
                showCurrentTab: action.payload
            }
        case TabsTypes.CHANGE_TAB:
            return {
                ...state,
                tabs: action.payload
            }
        
        default:
            return state;
    }
}
export default TabsReduser;