const getElements = () => {
    const elements: Element[] | null = [...document.querySelectorAll('.erc-prev-next-episode h4 a, .erc-current-media-info h1')];
    return elements
}

const removeSpoilers = () => {
    getElements().map((element: Element) => element.innerHTML = 'Title')
}

const filter = {
    url: [
        {
            hostContains: 'crunchyroll.com',
        },
    ],
};

chrome.webNavigation.onCompleted.addListener(({tabId} : {tabId: number}) => {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: removeSpoilers
      });
}, filter);

