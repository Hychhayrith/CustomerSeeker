document.getElementById('profileLinksForm').onsubmit = event => {
    event.preventDefault();
    const links = document.getElementById('profileLinks').value;

    chrome.tabs.create({url: links})
}

// https://web.facebook.com/ah.zeii.5895