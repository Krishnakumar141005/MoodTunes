   // Hindi song database with image URLs
   const songs = {
    romantic: [
        { 
            title: "Tum Hi Ho", 
            artist: "Arijit Singh", 
            videoId: "Umqb9KENgmk",
            image: "img/tum hi ho.jpg"
        },
        { 
            title: "Pehla Nasha", 
            artist: "Udit Narayan", 
            videoId: "Ki41AKu0iHc",
            image: "img/pehla nasha.jpg"
        },
        { 
            title: "Tere Bina", 
            artist: "A.R. Rahman", 
            videoId: "_mwqXnTEHSc",
            image: "img/ae dil mushkil.jpg"
        }
    ],
    sad: [
        { 
            title: "Channa Mereya", 
            artist: "Arijit Singh", 
            videoId: "284Ov7ysmfA",
            image: "img/channa mere.jpg"
        },
        { 
            title: "Tujhe Bhula Diya", 
            artist: "Mohit Chauhan", 
            videoId: "-Hb2DeHvvEg",
            image: "img/tujhe bhula diya.jpg"
        },
        { 
            title: "Ae Dil Hai Mushkil", 
            artist: "Arijit Singh", 
            videoId: "6FURuLYrR_Q",
            image: "img/ae dil mushkil.jpg"
        }
    ],
    crush: [
        { 
            title: "Mere Rashke Qamar", 
            artist: "Nusrat Fateh Ali Khan", 
            videoId: "q8gilwzNQEA",
            image: "img/raske qamer.jpg"
        },
        { 
            title: "Bekhayali", 
            artist: "Sachet Tandon", 
            videoId: "VOLKJJvfAbg",
            image: "img/bekhayali.jpg"
        },
        { 
            title: "Raabta", 
            artist: "Arijit Singh", 
            videoId: "vc-KxBjIbgI",
            image: "img/raabta.jpg"
        }
    ],
    happy: [
        { 
            title: "Badtameez Dil", 
            artist: "Benny Dayal", 
            videoId: "II2EO3Nw4m0",
            image: "img/badtameez dil.jpg"
        },
        { 
            title: "Gallan Goodiyaan", 
            artist: "Various Artists", 
            videoId: "jCEdTq3j-0U",
            image: "img/gallan goodiyaan.jpg"
        },
        { 
            title: "London Thumakda", 
            artist: "Labh Janjua", 
            videoId: "udra3Mfw2oo",
            image: "img/landon.jpg"
        }
    ],
    breakup: [
        { 
            title: "Tum Ho Toh", 
            artist: "Mohit Chauhan", 
            videoId: "gkCKTuR-ECI",
            image: "img/tum ho toh.jpg"
        },
        { 
            title: "Agar Tum Saath Ho", 
            artist: "Alka Yagnik", 
            videoId: "OGI0fNvr4fo",
            image: "img/tamasa.jpg"
        },
        { 
            title: "Tujhe Kitna Chahne Lage", 
            artist: "Arijit Singh", 
            videoId:  "AgX2II9si7w",
            image: "img/chahne lage.jpg"
        }
    ]
};

// DOM elements
const moodOptions = document.querySelectorAll('.mood-option');
const resultContainer = document.getElementById('resultContainer');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const songImage = document.getElementById('songImage');
const ytIcon = document.getElementById('ytIcon');
const anotherBtn = document.getElementById('anotherBtn');

let currentMood = null;
let currentVideoId = null;

// Event listeners
moodOptions.forEach(option => {
    option.addEventListener('click', () => {
        moodOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        currentMood = option.getAttribute('data-mood');
        recommendSong();
    });
});

anotherBtn.addEventListener('click', recommendSong);

ytIcon.addEventListener('click', () => {
    if (currentVideoId) {
        window.open(`https://www.youtube.com/watch?v=${currentVideoId}`, '_blank');
    }
});

// Recommend a random song for the selected mood
function recommendSong() {
    if (!currentMood) return;
    
    const moodSongs = songs[currentMood];
    const randomSong = moodSongs[Math.floor(Math.random() * moodSongs.length)];
    
    songTitle.textContent = randomSong.title;
    songArtist.textContent = randomSong.artist;
    songImage.src = randomSong.image;
    currentVideoId = randomSong.videoId;
    
    resultContainer.style.display = 'block';
}