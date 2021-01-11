export const urlHashParser = () => {
    const urlHashString = window.location.hash;
    let targetHashString = '';

    if (urlHashString.includes('/')) {
        targetHashString = urlHashString.split('/').pop();
    } else if (urlHashString.includes('#')) {
        if (urlHashString.includes('/')) {
            targetHashString = urlHashString.substring(
                targetHashString.lastIndexOf('#') + 1,
                targetHashString.indexOf('/')
            );
        } else {
            targetHashString = urlHashString.split('#')[1];
        }
    }
    return targetHashString;
};

// ==== Slide OnLoad
// ==== if you have use the horizontal slide in sections,
// ==== You will need this event to manipulate some trigger actions from here.
// export const onSlideLoad = (section, origin, destination, direction) => {
//     const hashString = urlHashParser();

//     switchAllowScrollingByUrlHashString(hashString);
// };

// ==== This function need to be used with Fullpage API
// export const switchAllowScrollingByUrlHashString = (urlHashString) => {
//     const actionDictionary = [
//         {
//             switchVal: true,
//             direction: UP,
//             targets: ['p2', 'p3'],
//         },
//         {
//             switchVal: false,
//             direction: UP,
//             targets: [],
//         },
//         {
//             switchVal: true,
//             direction: DOWN,
//             targets: ['p1', 'p2'],
//         },
//         {
//             switchVal: false,
//             direction: DOWN,
//             targets: [],
//         },
//     ];

//     for (let action of actionDictionary) {
//         if (action.targets.includes(urlHashString)) {
//             if (fullpageAPIRef.current) {
//                 fullpageAPIRef.current.setAllowScrolling(
//                     action.switchVal,
//                     action.direction.toLocaleLowerCase()
//                 );
//                 fullpageAPIRef.current.setKeyboardScrolling(
//                     action.switchVal,
//                     action.direction.toLocaleLowerCase()
//                 );
//             }
//         }
//     }
// };

// ==== this function can generte the page navigators
// export const renderNavigators = (directions, fullpageApi) => {
//     if (directions.length <= 0) {
//         return null;
//     }

//     return directions.map((dir) => (
//         <Navigator key={dir} direction={dir} fullpageApi={fullpageApi} />
//     ));
// };
