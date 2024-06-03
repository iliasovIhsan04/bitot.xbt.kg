import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    resources: {
      ru: {
        translation: {
          home: "Главная",
          about: "О компании",
          servis: "Лучший сервис по продаже и покупке криптовалют",
          partner: "Партнёрам",
          news: "Новости",
          contacts: "Контакты",
          give: "ОТДАЕТЕ",
          latest: "последние обмены",
          change: "navis change в цифрах",
          dataInput: "ВВОД ДАННЫХ",
          get: "ПОЛУЧАЕТЕ",
          yourPath:
            "Ваш путь к свободе финансов и инновационным возможностям начинается здесь и сейчас.",
          welcome: "Добро пожаловать в мир криптовалюты!",
          reviews: "отзывы",
          floatingRate: "Плавающий курс",
          fullName: "ФИО",
          email: "Электронная почта",
          cardNumber: "Номер карты",
          walletAddress: "Адрес кошелька",
          agree: "Я согласен с",
          conditions: "Условиями базовой проверки аккаунта AML, KYT",
          register: "Зарегистрироваться",
          come: "Войти",
          moreDetails: "Подробнее",
          popularCryptocurrencies: "Популярные криптовалюты",
          tradingPair: "Торговая пара",
          price: "Цена",
          volume: "Объем 24ч",
          market: "Рынок",
          action: "Действие",
          trade: "Торговля",
          startTrading: "Начать торговлю",
          cryptoExperts:
            "Мы - ведущая компания в сфере криптовалют, с глубокими знаниями и опытом",
          ourCompany:
            "Наша компания воплощает в себе инновационные подходы и передовые технологии",
          certificate: "Сертификат, лицензия и надежность",
          transparent: "Прозрачные коммиссии, эффективная система платежей",
          security: "Безопасность, защита финансовых данных",
          ourMission: "Наша миссия - сделать цифровые ",
          finance: "финансы",
          accessible: "доступными и удобными",
        },
      },

      en: {
        translation: {
          home: "Home",
          about: "About company",
          servis: "Best sales service and buying cryptocurrencies",
          partner: "Partners",
          news: "News",
          contacts: "Contacts",
          give: "YOU GIVE",
          latest: "latest exchanges",
          change: "navis change in numbers",
          dataInput: "DATA INPUT",
          get: "YOU GET",
          yourPath:
            "Your path to financial freedom and innovative opportunities begins here and now.",
          welcome: "Welcome to the world of cryptocurrency!",
          reviews: "reviews",
          floatingRate: "Floating rate",
          fullName: "FN",
          email: "Email",
          cardNumber: "Card number",
          walletAddress: "Wallet address",
          agree: "I agree with",
          conditions: "Conditions for basic account verification AML, KYT",
          register: "Register",
          come: "Login",
          moreDetails: "More details",
          popularCryptocurrencies: "Popular cryptocurrencies",
          tradingPair: "Trading pair",
          price: "Price",
          volume: "Volume 24h",
          market: "Market",
          action: "Action",
          trade: "Trade",
          startTrading: "Start trading",
          cryptoExperts:
            "We are a leading cryptocurrency company with deep knowledge and experience",
          ourCompany:
            "Our company embodies innovative approaches and advanced technologies",
          certificate: "Certificate, license and reliability",
          transparent: "Transparent commissions, efficient payment system",
          security: "Security, financial data protection",
          ourMission: "Our mission is to make digital",
          finance: "finance",
          accessible: "accessible and convenient",
        },
      },
    },
  });
