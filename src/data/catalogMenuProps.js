import TvIcon from '@material-ui/icons/TvSharp';

const menuProps = [
    {
        id: '001000000',
        category: 'Телевизоры',
        icon: TvIcon,
        link: '#',
        items: [
            {
                id: '001001000',
                name: 'Бренд',
                link: '#',
                items: [
                    {
                        id: '001001001',
                        name: 'Hunter&Cooper',
                        link: '#',
                    },
                    {
                        id: '001001002',
                        name: 'Hisence',
                        link: '#',
                    }
                ]
            },
            {
                id: '001002000',
                name: 'Минимаьная t при обогреве',
                link: '#',
                items: [
                    {
                        id: '001002001',
                        name: '+15°C',
                        link: '#',

                    },
                    {
                        id: '001002001',
                        name: '+20°C',
                        link: '#',
                    },
                    {
                        id: '001002001',
                        name: '+25°C',
                        link: '#',
                    },
                    {
                        id: '001002001',
                        name: '+30°C',
                        link: '#',
                    }
                ]
            }
        ]
    },

    {
        id: '002000000',
        category: 'Телевизоры1',
        icon: TvIcon,
        link: '#',
        items: [
            {
                id: '002001000',
                name: 'Бренд1',
                link: '#',
                items: [
                    {
                        id: '002001001',
                        name: 'Hunter&Cooper1',
                        link: '#',
                    },
                    {
                        id: '002001002',
                        name: 'Hisence1',
                        link: '#',
                    }
                ]
            },
            {
                id: '002002000',
                name: 'Минимаьная t при обогреве1',
                link: '#',
                items: [
                    {
                        id: '002002001',
                        name: '+15°C1',
                        link: '#',
                    },
                    {
                        id: '002002001',
                        name: '+20°C1',
                        link: '#',
                    },
                    {
                        id: '002002001',
                        name: '+25°C1',
                        link: '#',
                    },
                    {
                        id: '002002001',
                        name: '+30°C1',
                        link: '#',
                    }
                ]
            }
        ]
    }
];

export default menuProps;