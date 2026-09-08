function createLinks(teams) {
      
    const existingList = document.getElementById('team-list-nav');
    if (existingList) {
        existingList.remove();
    }

    const ulist = document.createElement('ul');
        ulist.className = 'team-links';
        ulist.id = 'team-list-nav';

            for (let i = 0; i < teams.length; i++) {
                const list = document.createElement('li');
                list.style.backgroundColor = teams[i].primary;
                const anchor = document.createElement('a');
                anchor.href = teams[i].url;
                anchor.textContent = teams[i].name;
                anchor.style.color = teams[i].secondary;
                list.append(anchor);
                const spank = document.createElement('span');
                spank.textContent = "[copy]";
                list.append(spank);
                ulist.append(list);
        spank.dataset.url = teams[i].url;
                spank.addEventListener('click', function() {
                navigator.clipboard.writeText(spank.dataset.url);

        });
    }
    document.body.append(ulist);
}


const teams = [

    {
        "name": "Brazil",
        "url": "https://en.wikipedia.org/wiki/Brazil_national_football_team",
        "primary": "#ffdf00",
        "secondary": "#009c3b"

    },
    {
        "name": "Netherlands",
        "url": "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
        "primary": "#f36c21",
        "secondary": "#ffffff"
    }
]

createLinks(teams);