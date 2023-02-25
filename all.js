const app = Vue.createApp({
    data() {
        return {
            isActive: false,
            isActive2: false,
            isPlaying: false,
            awpics: [
                { url: "./images/awards.svg", alt: "亞洲智能應用程式大獎" },
                { url: "./images/awards.svg", alt: "亞洲智能應用程式大獎" },
                { url: "./images/awards.svg", alt: "亞洲智能應用程式大獎" },
                { url: "./images/awards.svg", alt: "亞洲智能應用程式大獎" },
            ],
            services: [
                {
                    url: "./images/1.svg",
                    name: "UX DESIGN",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/2.svg",
                    name: "UX DESIGN",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/3.svg",
                    name: "WEBSITE DEVELOPMENT",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/4.svg",
                    name: "MOBILE APP DEVELOPMENT",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/5.svg",
                    name: "ECOMMERRCE",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/6.svg",
                    name: "CUSTOMER LOYALTY",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/7.svg",
                    name: "DIGITAL TRANSFORMATION",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/8.svg",
                    name: "DIGITAL MARKETING",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
                {
                    url: "./images/9.svg",
                    name: "BRANDING",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
                    href: "#",
                },
            ],
            timer: null,
            showIntro: 0,
            introduction: [
                {
                    url: "./images/intro1.jpg",
                    alt: "highlighted showcase",
                    href: "#",
                    subtitle: "HIGHLIGHTED SHOWCASE",
                    title: "LP CLUB MOBILE APP",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed,blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.Nam condimentum vitae ligula vel ornare.Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
                },
                {
                    url: "./images/intro2.jpg",
                    alt: "life with my cat",
                    href: "#",
                    subtitle: "CAT GOODS",
                    title: "LIFE WITH MY CAT",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed,blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.Nam condimentum vitae ligula vel ornare.Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
                },
                {
                    url: "./images/intro3.jpg",
                    alt: "the group paper service",
                    href: "#",
                    subtitle: "THE GROUP PAPER SERVICE",
                    title: "BEHANCE.NET",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed,blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.Nam condimentum vitae ligula vel ornare.Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
                },
                {
                    url: "./images/intro4.jpg",
                    alt: "EAT SOME GOOD",
                    href: "#",
                    subtitle: "EAT SOME GOOD!",
                    title: "HEALTH CHECK APP",
                    content:
                        "Cras quis nulla commodo, aliquam lectus sed,blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.Nam condimentum vitae ligula vel ornare.Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
                },
            ],
        };
    },
    methods: {
        goTo(selector) {
            document.querySelector(selector).scrollIntoView({
                behavior: "smooth",
            });
        },
        navAppear() {
            const nav = document.querySelector(".headerItem");
            let scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;

            if (scrollTop >= 50 && this.isActive == false) {
                nav.classList.add("appear");
                this.isActive2 = true;
            } else {
                nav.classList.remove("appear");
                this.isActive2 = false;
            }
        },
        listFadeIn() {
            let navItem = document.querySelectorAll(".item");
            navItem[0].style.animation = "fadeIn .8s forwards";
            navItem[1].style.animation = "fadeIn .8s .2s forwards";
            navItem[2].style.animation = "fadeIn .8s .4s forwards";
            navItem[3].style.animation = "fadeIn .8s .6s forwards";
            navItem[4].style.animation = "fadeIn .8s .8s forwards";
            navItem[5].style.animation = "fadeIn .8s 1s forwards";
        },
        togglePlay() {
            const videoPlayer = this.$refs.videoPlayer;
            if (this.isPlaying == true) {
                videoPlayer.pause();
            } else {
                videoPlayer.play();
            }
            this.isPlaying = !this.isPlaying;
        },
        startTimer() {
            this.timer = setInterval(() => {
                this.setShowIntro(1);
            }, 8000);
        },
        stopTimer() {
            clearInterval(this.timer);
        },
        setShowIntro(changeIdx = 1) {
            let intro = document.querySelectorAll(".leftIn");
            switch (true) {
                case changeIdx === 1 &&
                    this.showIntro === this.introduction.length - 1:
                    this.showIntro = 0;
                    // intro.style.animation = "leftIn .8s forwards";
                    break;
                case changeIdx === -1 && this.showIntro === 0:
                    this.showIntro = this.introduction.length - 1;
                    // intro.style.animation = "leftIn .8s forwards";
                    break;
                default:
                    this.showIntro = this.showIntro + changeIdx;
                    // intro.style.animation = "leftIn .8s forwards";
                    break;
            }
            this.stopTimer();
            this.startTimer();
        },
    },
    mounted() {
        window.addEventListener("scroll", this.navAppear);
        this.startTimer();
    },
});

const vm = app.mount("#app");
