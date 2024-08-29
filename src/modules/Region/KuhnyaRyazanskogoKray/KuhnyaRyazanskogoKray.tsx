import { TemplateRender } from "../../../components/TemplateRender";
import { TTemplate } from "../../../types/types";

const template = [
  {
    element: "LEAD_BLOCK",
    text: "Вопросом, что бы такого попробовать из местной кухни, задается любой путешественник. В 2018 году ответом всерьез озадачились и рязанские рестораторы. Итогом стал гастрономический фестиваль «Кухня Рязанского края», который теперь проходит каждую весну на площадках ведущих ресторанов города.\n\nКаждый год с 1 по 31 мая Рязань особенно хлебосольна. В течение месяца шеф-повара местных ресторанов, пабов и кафе презентуют новое прочтение локальных продуктов и угощают жителей и гостей города неожиданными, но непременно вкусными блюдами высокой кухни.\n\nКаждый ресторан-участник представляет особый гастрономический сет из региональных продуктов стоимостью от 1500 до 2500 рублей. А презентация блюд помогает с неожиданной стороны взглянуть на историю и культуру Рязанского края.\n\n<a href='http://akrk62.ru/' target='_blank'>akrk62.ru</a>\n\nЕсли вы решили, что опоздали к раздаче всего самого вкусного, и начали терять интерес, то не расстраивайтесь — лучшие находки входят в постоянное меню заведений и радуют туристов и местных жителей круглый год.",
    srcImg: "https://i.ibb.co/D9LbynM/1.jpg",
  },
  {
    element: "QUOTE_BLOCK",
    text: "«Фестиваль «Кухня Рязанского края» — это не бабушкина кухня, это не блюда из печи. Это местные продукты в новой интерпретации, современные технологии и эффектная подача. И это отличная возможность произвести дополнительное впечатление на путешественника, подарить ему новые яркие эмоции. Чтобы, вернувшись на родину, он всем рассказал, что в Рязани не только интересно, но и вкусно!»\n\n",
    authorText:
      "Дмитрий Кирилин, ресторатор, управляющий кафе «Старый Мельник» и «Графин», соучредитель Ассоциации кулинаров Рязанского края, автор идеи развития бренда «Кухня Рязанского края»",
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Ресторан «Графин»",
    subElements: [
      {
        element: "LONG_READ_ITEM_BLOCK",
        text: "<ul><li>Телячьи щеки томленые</li><li>Котлета из щуки</li><li>Перепела</li><li>Пшеничная катанка с белыми грибами</li><li>Калинник</li><li>Калач</li></ul>",
        srcImg: "https://i.ibb.co/YTLJmx8/rhr1.jpg",
      },
      {
        element: "LINK_BLOCK",
        title: "Ресторан «Графин»",
        desc: "Рязань, Татарская, 36, +7 (4912) 50 44 45",
        link: "http://cafegrafin.ru/",
        srcImg: "",
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Гастробар «Есть»",
    subElements: [
      {
        element: "LONG_READ_ITEM_BLOCK",
        text: "<ul><li>Перепел запеченный в капустном листе</li><li>Томленая утиная ножка с морковью и пюре из моркови с облепихой</li><li>Перловая каша с белыми грибами и крошкой из бородинского хлеба</li><li>Калинник с мороженым соленая карамель</li></ul>",
        srcImg: "https://i.ibb.co/CtNcGZM/rhr2.jpg",
      },
      {
        element: "LINK_BLOCK",
        title: "Гастробар «Есть»",
        desc: "Рязань, Почтовая, 62, +7 910 560 05 04",
        link: "https://vk.com/est_gastrobar",
        srcImg: "",
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Ресторан «Буфетъ»",
    subElements: [
      {
        element: "LONG_READ_ITEM_BLOCK",
        text: "<ul><li>Грибные пончики с хвойной сметаной</li><li>Суп грибной со сметаной, гречневым хлебцем с грибным паштетом</li><li>Тушеные говяжьи щечки, печеный маринованный помидор</li></ul>",
        srcImg: "https://i.ibb.co/mTZQc84/rhr3.jpg",
      },
      {
        element: "LINK_BLOCK",
        title: "Ресторан «Буфетъ»",
        desc: "Рязань, Радищева, 42, БЦ «Зарядский», 1 этаж, +7 (4912) 77 94 44",
        link: "https://vk.com/bufet_rzn",
        srcImg: "",
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Трактир «Белый»",
    subElements: [
      {
        element: "LONG_READ_ITEM_BLOCK",
        text: "<ul><li>Паштет из печени птицы</li><li>Щи томленые</li><li>Похлебка грибная с полбой</li><li>Рагу с кроликом и муссом из печеного чеснока</li></ul>",
        srcImg: "https://i.ibb.co/K6n1Hyt/rhr4.jpg",
      },
      {
        element: "LINK_BLOCK",
        title: "Трактир «Белый»",
        desc: "Рязань, Николодворянская, 18, +7 (4912) 77 70 16",
        link: "https://xn--90aqf3dg.xn--p1acf/",
        srcImg: "",
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Ресторан «Боровница»",
    subElements: [
      {
        element: "LONG_READ_ITEM_BLOCK",
        text: "<ul><li>Щи по-рязански томленые в русской печи</li><li>Каша из полбы по-мещёрски с говядиной и овощами/с судаком</li><li>Скоблянка</li></ul>",
        srcImg: "",
      },
      {
        element: "LINK_BLOCK",
        title: "Ресторан «Боровница»",
        desc: "Рязань, пос. Солотча, пл. Монастырская, 8, +7 (4912) 28 79 63",
        link: "http://borovnica.ru/restoran/",
        srcImg: "",
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Сеть кафе «Старый Мельник»",
    subElements: [
      {
        element: "LONG_READ_ITEM_BLOCK",
        text: "<ul><li>Курник</li><li>Перепела с брусничным соусом</li><li>Сом из печи</li><li>Калинник</li></ul>",
        srcImg: "https://i.ibb.co/hXCDRJn/rhr5.jpg",
      },
      {
        element: "LINK_BLOCK",
        title: "Сеть кафе «Старый Мельник»",
        desc: "«Старый Мельник. Гнездо», Рязань, пос. Солотча, Солотчинское шоссе, 68, «Старый Мельник. Старица», Рязань, пос. Солотча, Владимировская, 95а, стр. 1, «Старый Мельник. ФаЗООнда», Рязанский р-н, с. Поляны, Новая, 36, корп. 4, +7 (4912) 77 71 72",
        link: "https://stmelnik.ru/",
        srcImg: "",
      },
    ],
  },
];

export const KuhnyaRyazanskogoKray = () => {
  return (
    <div className="grid gap-2">
      <div className="font-medium text-lg">Кухня Рязанского края</div>
      <TemplateRender template={template as TTemplate[]} />
    </div>
  );
};
