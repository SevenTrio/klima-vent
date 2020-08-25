import React from "react";
import {v4 as uuid} from 'uuid';
import TvIcon from '@material-ui/icons/TvSharp';
import SvgIcon from "@material-ui/core/SvgIcon";

const AirConditionerIcon = ({...props}) => {
    return(
        <SvgIcon viewBox="0 0 269.22 269.22" {...props}>
            <g>
                <path d="M269.22,109.003v-47.38c0-17.128-13.936-31.064-31.063-31.064H31.064C13.936,30.559,0,44.495,0,61.623v47.38c0,17.128,13.936,31.064,31.064,31.064h207.093C255.285,140.067,269.22,126.132,269.22,109.003z M254.883,109.003c0,9.225-7.5,16.727-16.727,16.727H31.064c-9.225,0-16.727-7.502-16.727-16.727v-47.38c0-9.222,7.502-16.727,16.727-16.727h207.093c9.227,0,16.727,7.505,16.727,16.727V109.003z"/>
                <path d="M226.475,78.437H41.95c-10.594,0-19.217,8.622-19.217,19.217c0,10.594,8.623,19.217,19.217,19.217h184.515c10.595,0,19.219-8.623,19.219-19.217C245.684,87.059,237.069,78.437,226.475,78.437z M226.475,102.533H41.95c-2.691,0-4.879-2.189-4.879-4.879s2.188-4.88,4.879-4.88h184.515c2.693,0,4.882,2.189,4.882,4.88S229.163,102.533,226.475,102.533z"/>
                <path d="M156.314,70.173h19.117c3.962,0,7.168-3.211,7.168-7.168c0-3.958-3.206-7.169-7.168-7.169h-19.117c-3.962,0-7.168,3.211-7.168,7.169C149.146,66.962,152.352,70.173,156.314,70.173z"/>
                <path d="M204.105,70.173h19.117c3.962,0,7.168-3.211,7.168-7.168c0-3.958-3.206-7.169-7.168-7.169h-19.117c-3.962,0-7.168,3.211-7.168,7.169C196.937,66.962,200.143,70.173,204.105,70.173z"/>
                <path d="M69.726,165.372c8.226-4.229,0.971-16.605-7.234-12.377c-13.206,6.796-18.836,17.932-13.926,32.25c4.83,14.113,20.822,29.617,2.576,40.034c-8.03,4.583-0.808,16.97,7.234,12.377c13.269-7.57,19.193-19.014,14.342-33.897C68.366,190.397,51.849,174.571,69.726,165.372z"/>
                <path d="M146.192,165.372c8.224-4.229,0.971-16.605-7.234-12.377c-13.205,6.796-18.836,17.932-13.926,32.25c4.83,14.113,20.825,29.617,2.576,40.034c-8.03,4.583-0.808,16.97,7.234,12.377c13.269-7.57,19.191-19.014,14.342-33.897C144.829,190.397,128.314,174.571,146.192,165.372z"/>
                <path d="M222.657,165.372c8.224-4.229,0.971-16.605-7.233-12.377c-13.208,6.796-18.837,17.932-13.927,32.25c4.83,14.113,20.824,29.617,2.576,40.034c-8.027,4.583-0.808,16.97,7.233,12.377c13.27-7.57,19.191-19.014,14.343-33.897C221.294,190.397,204.782,174.571,222.657,165.372z"/>
            </g>
        </SvgIcon>
    );
}

const WaterHeaterIcon = ({...props}) => {
    return(
        <SvgIcon viewBox="0 0 297 297" {...props}>
            <g>
                <path d="m91.126,44.723c-3.695,4.928-15.754,21.882-15.754,33.151 0,12.31 10.014,22.323 22.323,22.323s22.323-10.014 22.323-22.323c0-11.27-12.059-28.224-15.754-33.151-1.552-2.067-3.985-3.284-6.569-3.284s-5.017,1.216-6.569,3.284zm6.569,39.052c-3.254,0-5.901-2.646-5.901-5.901 0-2.438 2.552-7.825 5.901-13.444 3.351,5.62 5.901,11.006 5.901,13.444 0.001,3.255-2.646,5.901-5.901,5.901z"/>
                <path d="m227.814,119.688c-3.407,3.406-3.407,8.93-0.001,12.337 3.406,3.405 8.93,3.407 12.338,0.001 5.492-5.49 14.425-5.49 19.917,0 1.703,1.703 3.935,2.555 6.169,2.555 2.233,0 4.466-0.852 6.169-2.556 3.406-3.407 3.406-8.931-0.001-12.337-12.293-12.293-32.299-12.293-44.591,0z"/>
                <path d="m222.409,112.185c7.399-7.398 17.236-11.474 27.701-11.474 10.464,0 20.3,4.075 27.698,11.474 1.703,1.704 3.936,2.556 6.169,2.556 2.232,0 4.465-0.851 6.168-2.555 3.407-3.405 3.408-8.93 0.001-12.337-10.693-10.696-24.912-16.586-40.036-16.586-15.126,0-29.345,5.89-40.039,16.586-3.407,3.407-3.407,8.931 0.001,12.337 3.405,3.406 8.932,3.407 12.337-0.001z"/>
                <path d="m283.978,149.462h-67.739c-5.668,0-10.264,4.596-10.264,10.264v110.077c0,5.668 4.596,10.263 10.264,10.263h67.739c5.668,0 10.264-4.595 10.264-10.263v-110.077c0-5.668-4.595-10.264-10.264-10.264zm-10.263,110.077h-47.212v-89.55h47.212v89.55z"/>
                <path d="m248.08,243.703c1.116,1.964 2.942,1.964 4.058,0l8.259-14.533c1.115-1.963 0.182-3.569-2.077-3.569h-16.421c-2.259,0-3.192,1.606-2.077,3.569l8.258,14.533z"/>
                <path d="m241.898,203.93h16.421c2.259,0 3.192-1.607 2.077-3.57l-8.259-14.535c-1.115-1.963-2.941-1.963-4.058,0l-8.259,14.535c-1.114,1.963-0.18,3.57 2.078,3.57z"/>
                <path d="m187.454,23.799c-27.297-15.57-58.335-23.799-89.759-23.799s-62.462,8.229-89.758,23.799c-3.202,1.826-5.179,5.229-5.179,8.916v203.218c0,3.686 1.977,7.089 5.179,8.915 9.182,5.237 18.791,9.621 28.691,13.164v28.726c0,5.668 4.595,10.263 10.263,10.263 5.668,0 10.264-4.595 10.264-10.263v-22.698c13.257,3.045 26.862,4.607 40.541,4.607 13.68,0 27.284-1.563 40.541-4.607v22.698c0,5.668 4.596,10.263 10.264,10.263s10.264-4.595 10.264-10.263v-28.726c9.899-3.543 19.51-7.927 28.69-13.164 3.202-1.826 5.179-5.229 5.179-8.915v-203.218c-0.001-3.687-1.978-7.09-5.18-8.916zm-15.348,206.047c-22.917,11.973-48.515,18.273-74.411,18.273s-51.494-6.301-74.41-18.273v-191.044c22.916-11.973 48.514-18.274 74.41-18.274s51.494,6.302 74.411,18.274v191.044z"/>
                <path d="m97.695,185.641c-13.865,0-25.146,11.28-25.146,25.146 0,13.865 11.28,25.146 25.146,25.146 13.866,0 25.146-11.28 25.146-25.146 0-13.866-11.279-25.146-25.146-25.146zm0,33.87c-4.81,0-8.724-3.914-8.724-8.724 0-4.811 3.914-8.725 8.724-8.725 4.811,0 8.724,3.914 8.724,8.725 0,4.81-3.913,8.724-8.724,8.724z"/>
                <path d="m55.615,134.323v33.87c0,4.534 3.676,8.211 8.211,8.211h67.739c4.534,0 8.211-3.677 8.211-8.211v-33.87c0-4.534-3.677-8.21-8.211-8.21h-67.739c-4.535,0-8.211,3.676-8.211,8.21zm16.421,8.211h51.318v17.448h-51.318v-17.448z"/>
            </g>
        </SvgIcon>
    );
}

const menuProps = [
    {
        id: uuid(),
        category: 'Телевизоры',
        icon: TvIcon,
        link: '#',
        items: [
            {
                id: uuid(),
                name: 'Производитель',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: 'LG',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Samsung',
                        link: '#',
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Диагональ экрана',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: '32 дюйма',
                        link: '#',

                    },
                    {
                        id: uuid(),
                        name: '43 дюйма',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '49 дюймов',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '50 дюймов',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '55 дюймов',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '65 дюймов',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '75 дюймов',
                        link: '#',
                    },
                ]
            }
        ]
    },
    {
        id: uuid(),
        category: 'Кондиционеры',
        icon: AirConditionerIcon,
        link: '#',
        items: [
            {
                id: uuid(),
                name: 'Производитель',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: 'Hisense',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Midea',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Mitsushito',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Idea',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Sensei',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Samurai',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Cooper&Hunter',
                        link: '#',
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Тип',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: 'Мобильные',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Сплит-системы',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Инверторные',
                        link: '#',
                    },
                ]
            },
            {
                id: uuid(),
                name: 'Обслуживаемая площадь',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 20 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 25 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 30 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 40 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 45 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 50 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 60 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 70 кв.м',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Обслуживаемая площадь 80 кв.м',
                        link: '#',
                    }
                ]
            }
        ]
    },
    {
        id: uuid(),
        category: 'Водонагреватели',
        icon: WaterHeaterIcon,
        link: '#',
        items: [
            {
                id: uuid(),
                name: 'Производитель',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: 'Zanussi',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Ballu',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Thermex',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Gorenje',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Garanterm',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Atlantic',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Round',
                        link: '#',
                    },
                ]
            },
            {
                id: uuid(),
                name: 'Тип',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: 'Вертикальные',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Горизонтальные',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'С универсальной установкой',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Накопительные',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Проточные',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Напорные',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'Безнапорные',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: 'С сухим тэном',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '',
                        link: '#',
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Объем',
                link: '#',
                items: [
                    {
                        id: uuid(),
                        name: '30 л',
                        link: '#',

                    },
                    {
                        id: uuid(),
                        name: '50 л',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '80 л',
                        link: '#',
                    },
                    {
                        id: uuid(),
                        name: '100 л',
                        link: '#',
                    }
                ]
            }
        ]
    },
];

export default menuProps;