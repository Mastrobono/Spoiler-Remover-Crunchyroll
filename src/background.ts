
const getElements = () => {
    const nextEpisodeSelector = '.erc-prev-next-episode h4 a';
    const currentEpisodeSelector = '.erc-current-media-info h1';
    const elements: Element[] | null = [...document.querySelectorAll(`${nextEpisodeSelector}, ${currentEpisodeSelector}`)];
    return elements;
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

chrome.webNavigation.onHistoryStateUpdated.addListener(({tabId} : {tabId: number}) => {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: removeSpoilers
      });
}, filter);

