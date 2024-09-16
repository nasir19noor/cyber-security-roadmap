const roadmapData = [
    {
        title: "1. Fundamentals",
        content: [
            {
                text: "Learn basic networking concepts",
                sources: [
                    "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html",
                    "https://www.geeksforgeeks.org/basics-computer-networking/"
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
            if (typeof subItem === 'object' && subItem.sources) {
                const textSpan = document.createElement('span');
                textSpan.textContent = subItem.text;
                listItem.appendChild(textSpan);
                
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