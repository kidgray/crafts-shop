/* Initial State of the Directory Reducer */
const INITIAL_STATE = {
    categories: [
        /* Each category has a name (title),
        an associated image (for the tab on the menu),
        and a unique ID */
        {
            title: 'dolls',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrLIQVWtuRcQ%2Fmaxresdefault.jpg&f=1&nofb=1',
            id: 1,
            linkUrl: 'shop/dolls'
        },
        {
            title: 'handbags',
            imageUrl: 'https://i.ebayimg.com/images/i/291930243981-0-1/s-l1000.jpg',
            id: 2,
            linkUrl: 'shop/handbags'
        },
        {
            title: 'scrunchies & headbands',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.wp.com%2Fsewing.craftgossip.com%2Ffiles%2F2015%2F12%2Fhairscrunchie.jpg%3Fresize%3D600%252C450&f=1&nofb=1',
            id: 3,
            linkUrl: 'shop/scrunchies'
        },
        {
            title: 'bracelets',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1xKM2PFXXXXayXXXXq6xXFXXXf%2FMens-Bracelets-2017-6MM-Natural-Stones-Beaded-Bracelet-Punk-Inspirational-Shamballa-Bracelet-Handmade-Mens-Jewelry.jpg&f=1&nofb=1',
            size: 'large',
            id: 4,
            linkUrl: 'shop/bracelets'
        },
        {
            title: 'bath & toiletry',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F054%2F0%2F10296789%2Fil_570xN.710168243_6t9v.jpg&f=1&nofb=1',
            size: 'large',
            id: 5,
            linkUrl: 'shop/bath'
        }
    ]
}

/* The Directory Reducer Function */
export const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}