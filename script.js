const roadmapData = [
    {
        title: "1. Fundamentals",
        content: [
            {
                text: "Basic networking concepts",
                sources: [],
                subitems: [
                    {
                        text: "OSI model",
                        sources: [
                            "https://www.youtube.com/watch?v=0y6FtKsg6J4",
                            "https://www.networkworld.com/article/3239677/the-osi-model-explained-and-how-to-easily-remember-its-7-layers.html",                           
                        ]
                    },
                    {
                        text: "TCP vs UDP",
                        sources: [
                            "https://www.youtube.com/watch?v=jE_FcgpQ7Co"                        
                        ]
                    },
                    "IP addressing and subnetting",
                    "DNS (Domain Name System)",
                    "Network topologies",
                    "LAN, WAN, and MAN"
                ]
            },    
            "Understand operating systems (Windows, Linux)",
            "Learn programming basics (Python, JavaScript)",
            "Familiarize yourself with cybersecurity principles"
        ]
    },
    {
        title: "2. Security Domains",
        content: [
            "Network Security",
            "Application Security",
            "Cloud Security",
            "Cryptography",
            "Identity and Access Management"
        ]
    },
    {
        title: "3. Tools and Technologies",
        content: [
            "Firewalls and Intrusion Detection Systems",
            "SIEM (Security Information and Event Management)",
            "Vulnerability scanners",
            "Penetration testing tools",
            "Forensics tools"
        ]
    },
    {
        title: "4. Certifications",
        content: [
            "CompTIA Security+",
            "CEH (Certified Ethical Hacker)",
            "CISSP (Certified Information Systems Security Professional)",
            "OSCP (Offensive Security Certified Professional)"
        ]
    },
    {
        title: "5. Specializations",
        content: [
            "Incident Response",
            "Threat Intelligence",
            "Security Architecture",
            "Governance, Risk, and Compliance",
            "Red Team / Blue Team"
        ]
    }
];

function createRoadmap() {
    const roadmapElement = document.getElementById('roadmap');
    
    function createSubitems(subitems) {
        const subitemsList = document.createElement('ul');
        subitemsList.className = 'subitems';
        subitems.forEach(subitem => {
            const subitemListItem = document.createElement('li');
            if (typeof subitem === 'object' && subitem.text) {
                const textSpan = document.createElement('span');
                textSpan.textContent = subitem.text;
                subitemListItem.appendChild(textSpan);
                
                if (subitem.sources && subitem.sources.length > 0) {
                    const sourcesList = document.createElement('ul');
                    sourcesList.className = 'sources';
                    subitem.sources.forEach(source => {
                        const sourceItem = document.createElement('li');
                        const sourceLink = document.createElement('a');
                        sourceLink.href = source;
                        sourceLink.textContent = source;
                        sourceLink.target = '_blank';
                        sourceItem.appendChild(sourceLink);
                        sourcesList.appendChild(sourceItem);
                    });
                    subitemListItem.appendChild(sourcesList);
                }
            } else {
                subitemListItem.textContent = subitem;
            }
            subitemsList.appendChild(subitemListItem);
        });
        return subitemsList;
    }

    roadmapData.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'roadmap-item';
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = item.title;
        titleElement.className = 'roadmap-title';
        
        const contentElement = document.createElement('div');
        contentElement.className = 'roadmap-content';
        
        const contentList = document.createElement('ul');
        item.content.forEach(subItem => {
            const listItem = document.createElement('li');
            if (typeof subItem === 'object' && subItem.text) {
                const textSpan = document.createElement('span');
                textSpan.textContent = subItem.text;
                listItem.appendChild(textSpan);
                
                if (subItem.sources && subItem.sources.length > 0) {
                    const sourcesList = document.createElement('ul');
                    sourcesList.className = 'sources';
                    subItem.sources.forEach(source => {
                        const sourceItem = document.createElement('li');
                        const sourceLink = document.createElement('a');
                        sourceLink.href = source;
                        sourceLink.textContent = source;
                        sourceLink.target = '_blank';
                        sourceItem.appendChild(sourceLink);
                        sourcesList.appendChild(sourceItem);
                    });
                    listItem.appendChild(sourcesList);
                }
                
                if (subItem.subitems) {
                    listItem.appendChild(createSubitems(subItem.subitems));
                }
            } else {
                listItem.textContent = subItem;
            }
            contentList.appendChild(listItem);
        });
        
        contentElement.appendChild(contentList);
        itemElement.appendChild(titleElement);
        itemElement.appendChild(contentElement);
        roadmapElement.appendChild(itemElement);
        
        titleElement.addEventListener('click', () => {
            titleElement.classList.toggle('active');
            contentElement.classList.toggle('active');
        });
    });
}

createRoadmap();