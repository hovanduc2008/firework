
const countDate = new Date('jan 22, 2023 0:00:00').getTime();
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const music = new Audio('./sourse/music/lienkhuc.mp3');
const playMusic = $('#music_play');
const app = {
    newYear: function () {
        const now = new Date().getTime();
        
        gap = countDate - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const d = Math.floor(gap / day)
        const h = Math.floor((gap%day)/hour)
        const m = Math.floor((gap%hour)/minute)
        const s = Math.floor((gap%minute)/second)
    
        $('.d').innerHTML = d;
        $('.h').innerHTML = h;
        $('.m').innerHTML = m;
        $('.s').innerHTML = s;
        return h;
    },
    setWidth: function () {
        if(screen.width <= 940) {
            $('.logo').innerHTML = `
            <p>HAPPY NEW YEAR</p>
            <p>2023</p>
            `;
        }
    }
    ,
    setBgForTime: function () {
        let h = this.newYear();
            if(h >= 19 && h <= 24 || h >= 0 && h <= 5){
                $(".bg-body").style.backgroundImage = "url(./sourse/background/background_day.jpg)";
            }
            else {
                $(".bg-body").style.backgroundImage = "url(./sourse/background/background_night.jpg)"
            
            }
    },
        musicStatus: 1
    ,
    playMusic: function () {
        music.play();
        music.loop = true;
        playMusic.src = "./sourse/pause-button.png";
        app.musicStatus = 1;
    },
    pauseMusic: function () {
        music.pause();
        playMusic.src = "./sourse/play.png";
        app.musicStatus = 0;
    },
    handelMusic: function () {
        let status = app.musicStatus;
        console.log(status);
        if(status == 0) {
            app.playMusic();
        }else if (status == 1) {
            app.pauseMusic();
        }
    }
    ,
    handelEvent: function() {
        setInterval(this.newYear, 1000);
        this.handelMusic();
        playMusic.addEventListener("click",this.handelMusic);
    }
    ,
    start: function() {
        this.setWidth();
        this.setBgForTime();
        this.handelEvent();
    }
}

app.start();