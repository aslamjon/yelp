import {ArticleTypes} from './article.type'

import chickenMeat from '../../assets/images/chicken.png';
import musk from '../../assets/images/musk.png';
import picheni from '../../assets/images/picheni.png';
import favoritePizza from '../../assets/images/favorite-pizza.png';
import Ellipse from '../../assets/images/Ellipse.png';
import Ellipse1 from '../../assets/images/Ellipse1.png';
import apple from '../../assets/images/apple.png';
import burger from '../../assets/images/burger 45 deg.png';
import cheese from '../../assets/images/cheese.png';
import orange from '../../assets/images/orange.png';
import Fire from '../../assets/images/flame.png';
import Like from '../../assets/images/klass.png';



const INITIAL_STATE = {
    discount: {
        num: 50,
        des: 'the full price of burgers',
        img1: apple,
        img2: burger,
        img3: cheese,
        img4: orange,
        img5: Fire
    },
    articles: [
        {
            id: 1,
            title: `How to cook turkey
            on Natural Gas `,
            img: chickenMeat,
            bg: '#fff0a5',
            lastLike: {
                img1: Ellipse,
                img2: Ellipse1,
                likes: 28,
                likeImg: Like
            }
        },
        {
            id: 2,
            title: `Corona virus update:
            3,43,287+ cases`,
            img: musk,
            bg: '#d6f5ff',
            lastLike: {
                img1: Ellipse,
                img2: Ellipse1,
                likes: 28,
                likeImg: Like
            }
        },
        {
            id: 3,
            title: `Tasty chunk donutes
            with chocolate`,
            img: picheni,
            bg: '#ffddf0',
            lastLike: {
                img1: Ellipse,
                img2: Ellipse1,
                likes: 28,
                likeImg: Like
            }
        },
        {
            id: 4,
            title: `Home made double cheez
            with popcorn respies`,
            img: favoritePizza,
            bg: '#c1fff4',
            lastLike: {
                img1: Ellipse,
                img2: Ellipse1,
                likes: 28,
                likeImg: Like
            }
        },
    ]
}

const ArticleReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ArticleTypes.SET_ARTICLE_DATA:
            return {
                ...state,
                articles: action.payload
            }        
        case ArticleTypes.SET_DISCOUNT_DATA:
            return {
                ...state,
                discount: action.payload
            }        
        default:
            return state;
    }
}
export default ArticleReduser;