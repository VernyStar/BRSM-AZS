document.title = "БРСМ-Нафта: мережа АЗС, роздрібний та гуртовий продаж бензину та дизпалива";

const link1 = ["Історія", "Місія та цінності", "Переваги", "Соцвідповідальність", "Кар'єра з нами", "Контакти"];

const link2 = ["Карта АЗК", "Контроль якості", "Програма лояльності", "Маркети", "Акції", "Правила безпеки на АЗК"];

const link3 = ["Автомобільний газ", "Бензин", "Дизель"];

const link4 = ["Паливні карти і талони", "Особистий кабінет"];

const link5 = ["Новини", "БРСМ-Нафта у ЗМІ", "Для медіа"];

const links = ["Карта АЗК", "Новини", "Відгуки", "Тендери", "Реклама на АЗК"];

const turbo = "https://i.postimg.cc/FKCGnQt0/turbo-brsm.png";

const clipb = "https://i.postimg.cc/8CqmbBqD/clipboard.png";

const karta = "https://i.postimg.cc/bwVgByVx/barcode.png";

const bcode = "https://i.postimg.cc/D07pkwMY/barcode.png";

const logo2 = "https://i.postimg.cc/s2cmrqvg/logotip.png";

const futer = "https://i.postimg.cc/prRkdF2W/footer.png";

const logo1 = "https://i.postimg.cc/QCd5Zhn8/nafta.png";

const mono1 = "https://i.postimg.cc/HLdwbYth/mono.png";

const photo = "https://i.postimg.cc/B6zfJD2w/foto.png";

const hp_bg = "https://i.postimg.cc/QNfn8wFv/b-g1.jpg";

const patbg = "https://i.postimg.cc/RF8CqH0P/bg.jpg";

const socmmenu = [

     {

        name: "Facebook",

        href: "http://www.facebook.com/BRSM.NAFTA",

        klas: "fab fa-facebook vibre open-modal",

        attr: "data-modal='Facebook'",

  }, {

        name: "Instagram",

        href: "https://www.instagram.com/brsmnafta/",

        klas: "insta vibre open-modal",

        attr: "data-modal='Instagram'",

  }, {

        name: "Telegram",

        href: "https://t.me/+WDFaUEVBdZgzcQo3",

        klas: "fab fa-telegram vibre open-modal",

        attr: "data-modal='Telegram'",

  }, {

        name: "YouTube",

        href: "https://www.youtube.com/channel/UCZkwHWb7Q1_awQ-RejO8cEQ",

        klas: "fab fa-youtube vibre open-modal",

        attr: "data-modal='YouTube'",

  }, {

        name: "Telegram-bot",

        href: "https://t.me/BRSMPLUSBOT?start",

        klas: "t-bot vibre open-modal",

        attr: "data-modal='Telegram-bot'",

  }, {

        name: "TikTok",

        href: "https://www.tiktok.com/@brsm.nafta",

        klas: "t-t vibre open-modal",

        attr: "data-modal='TikTok'",

    }];

const mainmenu = [

    {

         name: "Компанія",

         id: "Company",

  }, {

         name: "Водіям",

         id: "Drivers",

  }, {

         name: "Пальне",

         id: "Fuel",

  }, {

         name: "Паливні карти і талони",

         id: "Cards",

  }, {

         name: "Прес-центр",

         id: "Press",

}];

const sidemenu = [

     {

         name: "На головну",

         klas: "fas fa-home",

         page: "home"

  }, {

   		name: "Авторизація",

   		klas: "fas fa-user",

         page: "auth"

  }, {

         name: "Мапа АЗС",

         klas: "fas fa-map-location-dot",

         page: "fuel-map"

  }, {

         name: "Діючі акції",

         klas: "fas fa-percent",

         page: "discount"

  }, {

         name: "Колл-центр",

         klas: "fas fa-headset",

         page: "call-center"

  }, {

         name: "Повідомлення",

         klas: "fas fa-message",

         page: "messages"

  }, {

         name: "Правила ПП",

         klas: "fas fa-clipboard",

         page: "rules"

}];

const img_list = [

     {

         "url": "https://brsm-nafta.com/wp-content/uploads/2023/05/8f64079f-turborabota_1920x1080_2.png",

         "alt": "БлагоБРСМ",

         "name": "slide 1",

         "link": ""

  }, {

         "url": "https://brsm-nafta.com/wp-content/uploads/2023/08/8f66079c-%D0%B2%D1%8B%D0%B0%D0%BA%D1%83%D1%86%D0%BF.jpg",

         "alt": "UНАЙТИ",

         "name": "slide 2",

         "link": ""

  }, {

         "url": "https://brsm-nafta.com/wp-content/uploads/2023/07/983007df-%D0%A8%D0%94_-50.jpg",

         "alt": "Акційна пропозиція",

         "name": "slide 3",

         "link": ""

  }, {

         "url": "https://brsm-nafta.com/wp-content/uploads/2021/04/96fb07d9-4Z5A6680-e1619455604517.png",

         "alt": "БРСМ",

         "name": "slide 4",

         "link": ""

   }];

const doc = document;

const win = window;

const lst = localStorage;

const de = doc.documentElement;

const og1 = doc.createElement("meta"),

      og2 = doc.createElement("meta"),

      og3 = doc.createElement("meta"),

      og4 = doc.createElement("meta"),

      og5 = doc.createElement("meta"),

      og6 = doc.createElement("meta"),

      og7 = doc.createElement("meta"),

      og8 = doc.createElement("link"),

      og9 = doc.createElement("link"); 

         og1.setAttribute("property", "og:title");

         og2.setAttribute("property", "og:type");

         og3.setAttribute("property", "og:url");

         og4.setAttribute("property", "og:description");

         og5.name = "description";

         og6.name = "author";

         og7.name = "msapplication-TileImage";

         og8.href = "https://brsm-nafta.com/";

         og9.href = "https://brsm-nafta.com/";

         og6.content = "BRSM PLUS";

         og7.content = "https://brsm-nafta.com/wp-content/themes/brsm/images/logo.svg?w=100&h=100&q=60";

         og1.content = "БРСМ-Нафта: мережа АЗС, роздрібний та гуртовий продаж бензину та дизпалива";

         og2.content = "webcontent=site";

         og3.content = "http://brsm-nafta.com/";

         og4.content = "Заправки БРСМ-Нафта - це якісний бензин, дизель, газ для автомобіля, програма лояльності BRSM PLUS, а також паливні талони БРСМ і паливні карти БРСМ для підприємств";

         og5.content = "Заправки БРСМ-Нафта - це якісний бензин, дизель, газ для автомобіля, програма лояльності BRSM PLUS, а також паливні талони БРСМ і паливні карти БРСМ для підприємств";

         og8.rel = "canonical";

         og9.rel = "shortlink";

const A = "active";

const O = "opacity";

doc.head.appendChild(og1);

doc.head.appendChild(og2);

doc.head.appendChild(og3);

doc.head.appendChild(og4);

doc.head.appendChild(og5);

doc.head.appendChild(og6);

doc.head.appendChild(og7);

doc.head.appendChild(og8);

doc.head.appendChild(og9);
