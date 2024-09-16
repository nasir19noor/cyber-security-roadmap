const roadmapData = [
    {
        title: "1. Fundamentals",
        content: [
            "Learn basic networking concepts",
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
        itemElement.innerHTML = `
            <h2>${item.title}</h2>
            <div class="roadmap-content">
                <ul>
                    ${item.content.map(subItem => `<li>${subItem}</li>`).join('')}
                </ul>
            </div>
        `;
        roadmapElement.appendChild(itemElement);

        const titleElement = itemElement.querySelector('h2');
        const contentElement = itemElement.querySelector('.roadmap-content');

        titleElement.addEventListener('click', () => {
            contentElement.classList.toggle('active');
        });
    });
}

createRoadmap();
