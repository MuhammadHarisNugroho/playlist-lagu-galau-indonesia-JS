new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
                  {
            name: "Belum Siap Kehilangan",
            artist: "Steven Pasaribu",
            cover: "./assets/img/belum-siap-kehilangan.jpg",
            source: "./assets/mp3/Stevan-Pasaribu-Belum-Siap-Kehilangan.mp3",
            url: "https://www.youtube.com/watch?v=0ru5Ox8f_vs",
            favorited: false
          },
          {
            name: "Tak Segampang Itu",
            artist: "Anggi Marito",
            cover: "./assets/img/anggi-tak-segampang-itu.jpg",
            source: "./assets/mp3/Anggi-Marito-Tak-Segampang-Itu.mp3",
            url: "https://www.youtube.com/watch?v=6NsiA6GFAbU",
            favorited: false
          },
          {
            name: "Bohongi Hati",
            artist: "Mahalini",
            cover: "./assets/img/bohongi-hati.jpg",
            source: "./assets/mp3/MAHALINI-BOHONGI-HATI.mp3",
            url: "https://www.youtube.com/watch?v=weG-sqHHCB8",
            favorited: false
          },
  
          {
            name: "Janji Setia",
            artist: "Tiara Andini",
            cover: "./assets/img/janji-setia-tiara-andini.jpg",
            source: "./assets/mp3/Tiara-Andini-Janji-Setia.mp3",
            url: "https://www.youtube.com/watch?v=PVIvHCX35hU",
            favorited: false
          },
  
          {
            name: "Saat Kau Telah Mengerti",
            artist: "Virgoun",
            cover: "./assets/img/saat-kau-telah-mengerti.jpg",
            source: "./assets/mp3/Virgoun-Saat-Kau-Telah-Mengerti.mp3",
            url: "https://www.youtube.com/watch?v=YN7DKhWwgyg",
            favorited: false
          },
          
          {
            name: "Pilihan Yang Terbaik",
            artist: "Ziva Magnolya",
            cover: "./assets/img/Ziva-Magnolya-Pilihan-Yang-Terbaik.jpg",
            source: "./assets/mp3/Ziva-Magnolya-Pilihan-Yang-Terbaik.mp3",
            url: "https://www.youtube.com/watch?v=0g9b7Mgm3oo",
            favorited: false
          },
          
          {
            name: "Trauma",
            artist: "Aan Story feat. Elsya",
            cover: "./assets/img/Aan-Story-feat-Elsya-TRAUMA.jpg",
            source: "./assets/mp3/Aan-Story-feat-Elsya-TRAUMA.mp3",
            url: "https://www.youtube.com/watch?v=zhCcKh-Q8jw",
            favorited: false
          },
          
          {
            name: "Laksana Surgaku",
            artist: "Dudy Oris",
            cover: "./assets/img/Dudy-Oris-Laksana-Surgaku.jpg",
            source: "./assets/mp3/Dudy-Oris-Laksana-Surgaku.mp3",
            url: "https://www.youtube.com/watch?v=DfFxkW53f2Q",
            favorited: false
          },
          
          {
            name: "Semata Karenamu",
            artist: "Mario G. Klau",
            cover: "./assets/img/Semata-Karenamu-Mario-G-Klau.jpg",
            source: "./assets/mp3/Semata-Karenamu-Mario-G-Klau.mp3",
            url: "https://www.youtube.com/watch?v=i6bsSEE5aEA",
            favorited: false
          },
          
          {
            name: "Rumah Singgah",
            artist: "Fabio Asher",
            cover: "./assets/img/FABIO-ASHER-RUMAH-SINGGAH.jpg",
            source: "./assets/mp3/FABIO-ASHER-RUMAH-SINGGAH.mp3",
            url: "https://www.youtube.com/watch?v=5k6IkftDRwE",
            favorited: false
          },
          
          {
            name: "Jiwa Yang Bersedih",
            artist: "Ghea Indrawari",
            cover: "./assets/img/Jiwa-yang-bersedih-Ghea-Indrawari.jpg",
            source: "./assets/mp3/Jiwa-yang-bersedih-Ghea-Indrawari.mp3",
            url: "https://www.youtube.com/watch?v=t9VWICGOD90",
            favorited: false
          },
          
          {
            name: "Kumau Dia",
            artist: "Andmesh Kamaleng",
            cover: "./assets/img/Kumau-Dia-Andmesh-Kamaleng.jpg",
            source: "./assets/mp3/Kumau-Dia-Andmesh-Kamaleng.mp3",
            url: "https://www.youtube.com/watch?v=ihSQUBV_X1k",
            favorited: false
          },
          
          {
            name: "Pesan Terakhir",
            artist: "Lyodra",
            cover: "./assets/img/Lyodra-Pesan-Terakhir.jpg",
            source: "./assets/mp3/Lyodra-Pesan-Terakhir.mp3",
            url: "https://www.youtube.com/watch?v=oaFj0lRi3gw",
            favorited: false
          },
          
          {
            name: "Nanti Kita Seperti Ini",
            artist: "Batas Senja",
            cover: "./assets/img/Nanti-Kita-Seperti-Ini-Batas-Senja.jpg",
            source: "./assets/mp3/Nanti-Kita-Seperti-Ini-Batas-Senja.mp3",
            url: "https://www.youtube.com/watch?v=s6H6ffS6zJI",
            favorited: false
          },
          
          {
            name: "Tertawan Hati",
            artist: "Awdella",
            cover: "./assets/img/Awdella-Tertawan-Hati.jpg",
            source: "./assets/mp3/Awdella-Tertawan-Hati.mp3",
            url: "https://www.youtube.com/watch?v=XQzHF8DGYp8",
            favorited: false
          },
          
          {
            name: "Sisa Rasa",
            artist: "Mahalini",
            cover: "./assets/img/Sisa-Rasa-Mahalini.jpg",
            source: "./assets/mp3/Sisa-Rasa-Mahalini.mp3",
            url: "https://www.youtube.com/watch?v=YUVF-d8Z_nk",
            favorited: false
          },
          
          {
            name: "Merasa Indah",
            artist: "Tiara Andini",
            cover: "./assets/img/janji-setia-tiara-andini.jpg",
            source: "./assets/mp3/Tiara-Andini-Merasa-Indah.mp3",
            url: "https://www.youtube.com/watch?v=UHTVQVuVZTY",
            favorited: false
          },
          
          {
            name: "Januari",
            artist: "Glenn Fredly",
            cover: "./assets/img/JANUARI-GLENN-FREDLY.jpg",
            source: "./assets/mp3/JANUARI-GLENN-FREDLY.mp3",
            url: "https://www.youtube.com/watch?v=ITwxBVWhXjQ",
            favorited: false
          },
          
          {
            name: "Harus Terpisah",
            artist: "Cakra Khan",
            cover: "./assets/img/Cakra-Khan-Harus-Terpisah.jpg",
            source: "./assets/mp3/Cakra-Khan-Harus-Terpisah.mp3",
            url: "https://www.youtube.com/watch?v=dFdV0OTQg3Q",
            favorited: false
          },
          
          {
            name: "Tanpa Cinta",
            artist: "Yovie Nuno",
            cover: "./assets/img/Yovie-Nuno-Tanpa-Cinta.jpg",
            source: "./assets/mp3/Yovie-Nuno-Tanpa-Cinta.mp3",
            url: "https://www.youtube.com/watch?v=YLiRgeU7fQw",
            favorited: false
          },
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
  