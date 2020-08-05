import React from 'react';
import styles from '../../sass/Footer.module.sass';

const navigationData = [
    {
        title: 'Компания',
        list: [
            {
                name: 'О компании',
                url: '/company'
            },
            {
                name: 'Контакты',
                url: '/contact'
            },
            {
                name: 'Работа',
                url: '/work'
            },
            {
                name: 'Политика конфиденциальности',
                url: '/quality'
            },
            {
                name: 'Партнерам',
                url: '/partners'
            },
            {
                name: 'Каталог товаров',
                url: '/sitemap'
            }
        ]
    },
    {
        title: 'Услуги и сервисы',
        list: [
            {
                name: 'Скидки',
                url: '/discounts'
            },
            {
                name: 'Установка',
                url: '/installation'
            },
            {
                name: 'Оплата',
                url: '/payment'
            }
        ]
    },
    {
        title: 'Помощь покупателю',
        list: [
            {
                name: 'Найти заказ',
                url: '/status-order'
            },
            {
                name: 'Доставка',
                url: '/delivery'
            },
            {
                name: 'Гарантия',
                url: '/guarantee'
            },
            {
                name: 'Часто задаваемые вопросы',
                url: '/questions'
            },
        ]
    }
];

const Navigation = () => {
    return(
        <div className={styles.navigation}>
            {
                navigationData.map((navItem, index) =>
                    <div key={index} className={styles.navigationItem}>
                        <p className={styles.navigationItem__title}>{navItem.title}</p>
                        <nav>
                            <ul className={styles.navigationItem__list}>
                                {
                                    navItem.list.map((listItem, index_2) =>
                                        <li key={index_2} className={styles.navigationListItem}>
                                            <a href={listItem.url} className={styles.navigationListItem__link}>
                                                {listItem.name}
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </nav>
                    </div>
                )
            }
        </div>
    )
}

export default Navigation;
