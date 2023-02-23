const app = Vue.createApp({
    data() {
        return {
            isActive: true,
            isActive2: false,
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
    },
    mounted() {
        window.addEventListener("scroll", this.navAppear);
    },
    
});

const vm = app.mount("#app");
