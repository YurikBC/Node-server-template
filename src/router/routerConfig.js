import templateFirst from '../../view/firstPageTemplate.html'
import templateSecond from '../../view/secondPageTemplate.html';
import templateThird from '../../view/thirdPageTemplate.html';

const routes = [
    {
        name: 'Main',
        adress: '',
        template: templateFirst
    },
    {
        name: 'SecondPage',
        adress: '#2',
        template: templateSecond
    },
    {
        name: 'thirdPage',
        adress: '#3',
        template: templateThird
    }
]

export default routes