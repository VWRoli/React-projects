export const collection = [
  {
    id: 1,
    img: `https://muzikercdn.com/uploads/product_gallery/1841/184130/main_2e41710a.jpg`,
    title: `Fender Player Series Stratocaster HSS`,
    guitar: true,
    amp: false,
    wish: true,
  },

  {
    id: 2,
    img: `https://muzikercdn.com/uploads/product_gallery/2106/210632/main_032f2a75.jpg`,
    title: `Fender American Performer Telecaster`,
    guitar: true,
    amp: false,
    wish: true,
  },
  {
    id: 3,
    img: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpeachguitars.2dimg.com%2F1%2F3g3a8883_3286cfacc1.jpg&f=1&nofb=1g`,
    title: `Gibson Les Paul Standard 50s P90 GT`,
    guitar: true,
    amp: false,
    wish: true,
  },
  {
    id: 4,
    img: `https://cdn.mos.cms.futurecdn.net/ViYzG53dLD4fQsJLEbKKPd-970-80.jpg.webp`,
    title: `PRS SE Custom 24`,
    guitar: true,
    amp: false,
    wish: true,
  },
  {
    id: 5,
    img: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.session.de%2Fout%2Fpictures%2Fmaster%2Fproduct%2F1%2FEPIPHONE_SG_Standard_61_Maestro_Vibrola.jpg&f=1&nofb=1`,
    title: `Epiphone SG Standard '61 Maestro Vibrola`,
    guitar: true,
    amp: false,
    wish: true,
  },
  {
    id: 6,
    img: `https://muzikercdn.com/uploads/product_gallery/1719/171950/thumb_d_gallery_base_3ddeb265.jpg`,
    title: `Fender Squier Bullet Stratocaster HT IL`,
    guitar: true,
    amp: false,
    wish: false,
  },
  {
    id: 7,
    img: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaAIaoC3mRFU%2Fmaxresdefault.jpg&f=1&nofb=1`,
    title: `Vox Pathfinder 10`,
    guitar: false,
    amp: true,
    wish: false,
  },
  {
    id: 8,
    img: `https://muzikercdn.com/uploads/product_gallery/988/98854/main_ab1f01c8.jpg`,
    title: `Fender 65 Twin Reverb`,
    guitar: false,
    amp: true,
    wish: true,
  },
  {
    id: 9,
    img: `https://muzikercdn.com/uploads/products/606/60628/thumb_d_gallery_base_410190e9.jpg`,
    title: `Marshall DSL5CR`,
    guitar: false,
    amp: true,
    wish: true,
  },
];

//Filter out guitars
const myGuitars = collection.filter((item) => item.guitar && !item.wish);
const guitarWish = collection.filter((item) => item.guitar && item.wish);
const myAmps = collection.filter((item) => item.amp && !item.wish);
const ampWish = collection.filter((item) => item.amp && item.wish);
