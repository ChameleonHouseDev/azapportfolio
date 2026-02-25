const movies = [
    { 
        title: "สัมผัสเสียงด้วยใจ", 
        dailyUrl: "https://dai.ly/xa0pjhu",
        downloadLink: "https://drive.google.com/uc?export=download&id=10-p4Uryy2fntpEm_vs8sHEaa5X1N0yoP" 
    },
    { 
        title: "Blood for Blood", 
        dailyUrl: "https://dai.ly/xa0pjhm",
        downloadLink: "https://drive.google.com/uc?export=download&id=15vNBIVYJurTn67rtE9oHLREsEvEwP5RQ" 
    },
    { 
        title: "ร้อนเพราะเรา", 
        dailyUrl: "https://dai.ly/xa0plgk",
        downloadLink: "https://drive.google.com/uc?export=download&id=1jp5O_PE2QnAE7dc5ggV_aHg_-tfAK5Wa" 
    },
    { 
        title: "Lost Candy", 
        dailyUrl: "https://dai.ly/xa0pjho",
        downloadLink: "https://drive.google.com/uc?export=download&id=1hjpD_Toi9u6mgh-jVjHjU5T8-J-x4UyZ" 
    },
    { 
        title: "จานพิเศษ", 
        dailyUrl: "https://dai.ly/xa0pjhs",
        downloadLink: "https://drive.google.com/uc?export=download&id=1P0diadH9pRWERNtnPoIJih05cRL1ZSiZ" 
    }
];

const container = document.getElementById('portfolio-list');

movies.forEach((movie, index) => {
    const card = document.createElement('div');
    card.className = 'video-card';

    const videoId = movie.dailyUrl.split('/').pop();
    const embedUrl = `https://www.dailymotion.com/embed/video/${videoId}?queue-enable=false&ui-start-screen-info=false`;

    card.innerHTML = `
        <div class="video-header">
            <span class="video-title">${movie.title}</span>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="video-body">
            <div class="video-container">
                <iframe 
                    src="" 
                    data-src="${embedUrl}"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <a href="${movie.downloadLink}" class="download-btn" target="_blank">DOWNLOAD</a>
            </div>
        </div>
    `;

    const header = card.querySelector('.video-header');
    const iframe = card.querySelector('iframe');

    header.addEventListener('click', () => {
        const isActive = card.classList.contains('active');

        document.querySelectorAll('.video-card').forEach(c => {
            c.classList.remove('active');
            c.querySelector('iframe').src = "";
        });

        if (!isActive) {
            card.classList.add('active');
            iframe.src = iframe.getAttribute('data-src');
        }
    });

    container.appendChild(card);
    
    setTimeout(() => {
        card.classList.add('show');
    }, 150 * index);
});