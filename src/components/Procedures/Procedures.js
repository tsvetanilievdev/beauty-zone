import { ProcedureCard } from "./ProcedureCard.js";

export const Procedures = () => {
  const data = [
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Лазерна епилация',
      price: 10,
      description:
        'SHR лазерна епилация е технология, която използва нежни импулси, но с висока честота, което я прави напълно безболезнена.',
      imageUrl: '/images/laser.jpg',
      type: 'епицалия',
      _createdOn: 1617797078108,
      id: 1,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'HIFU',
      price: 11,
      description:
        'HIFU е козметичен уред с високоинтезивен фокусиран ултразвук. Стяга кожата, изгладжа линиите и бръчките.',
      imageUrl: '/images/HIFU.jpg',
      type: 'лице',
      _createdOn: 1617799443179,
      id: 2,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Кола-маска',
      price: 12,
      description:
        'Най-лесният и най-достъпния метод за премахване на нежеланото окосмяване.',
      imageUrl: '/images/kolamaska.jpg',
      type: 'епицалия',
      _createdOn: 1617799658349,
      id: 3,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Почистване на лице',
      price: 7,
      description: 'Ръчна екстракция на лице.',
      imageUrl: '/images/cleaning.jpg',
      type: 'лице',
      _createdOn: 1617799822338,
      id: 4,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Ултразвук',
      price: 22,
      description: 'Въвеждане на вещества в кожата.',
      imageUrl: '/images/ultra.jpg',
      type: 'лице',
      _createdOn: 1617799822339,
      id: 5,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Мезотерапия',
      price: 32,
      description:
        'Инжектирането с мезотерапия доставя директно в клетките всички елементи необходими за преодоляване на стареенето.',
      imageUrl: '/images/mesotherapy.jpg',
      type: 'лице',
      _createdOn: 1617799822340,
      id: 6,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'LPG',
      price: 16,
      description:
        'LPG антицелулитни и оформящи процедури за дрениране на тялото. Премахва целулита, стига отпусната кожа, елеминира задържането на течности в долните крайници.',
      imageUrl: '/images/lpg.jpg',
      type: 'тяло',
      _createdOn: 1617799822341,
      id: 7,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Криолиполиза',
      price: 19,
      description:
        'Криолиполизата е алтернатива на липосукция. Трайно отстранява мастните клетки, чрез замразяване.',
      imageUrl: '/images/cryolipoliza.jpg',
      type: 'тяло',
      _createdOn: 1617799822342,
      id: 8,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Масаж',
      price: 8,
      description: 'Класически, релаксиращ, лечебен, антицелулитен, рейки.',
      imageUrl: '/images/massage.jpg',
      type: 'тяло',
      _createdOn: 1617799822343,
      id: 9,
    },
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      name: 'Кавитация',
      price: 21,
      description:
        'Намалява обема на мазнините, обиколката и премахва целулита.',
      imageUrl: '/images/cavitaciq.jpg',
      type: 'тяло',
      _createdOn: 1617799822344,
      id: 10,
    },
  ];
console.log(data.forEach(x => x._id));
  return( 
    <>
      {Object.values(data).map(x => <ProcedureCard procedure={x} key={x.id}/>)}
    </>);
};