import templateFirst from '../views/firstPageTemplate.html'
import templateSecond from '../views/secondPageTemplate.html';
import templateThird from '../views/thirdPageTemplate.html';

import firstPageActor from '../actors/firstPage/firstPage'
import secondPageActor from '../actors/secondPage/secondPage'
import thirdPageActor from '../actors/thirdPage/thirdPage'

const routes = [
    {
        name: 'Main',
        address: '1',
        template: templateFirst,
        controller: firstPageActor
    },
    {
        name: 'SecondPage',
        address: '2',
        template: templateSecond,
        controller: secondPageActor
    },
    {
        name: 'thirdPage',
        address: '3',
        template: templateThird,
        controller: thirdPageActor
    }
]

export default routes