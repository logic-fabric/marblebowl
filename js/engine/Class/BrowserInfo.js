import { ucFirst } from "./../utils/function";

export class BrowserInfo {
  constructor() {
    this.el = {
      divInfo: document.querySelector(".modalBox"),
      addminBtn: document.getElementById("adminBrowser_btn"),
    };

    console.log(this.el);

    this.el.addminBtn.addEventListener("click", (e) => this.showAdmin(this.el));

    //screen size of terminal
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    //browser size
    this.screenX = window.screen.width;
    this.screenY = window.screen.height;
    this.pixelRatio = window.devicePixelRatio;
    this.language = navigator.language;

    //
    if (
      window.matchMedia("(max-width: 768px)").matches &&
      this.innerWidth < 767
    ) {
      this.isMobil = true;
    } else {
      this.isMobil = "false";
    }

    this.browser = "undefined";
    //User agent

    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      console.log("Hello Mozilla fireFox User!");
      this.browser = "firefox";
    } else if (
      /Chrome/.test(navigator.userAgent) &&
      /Google Inc/.test(navigator.vendor) &&
      /^((?!Edg).)*$/.test(navigator.userAgent)
    ) {
      console.log("Hello Google chrome User!");
      this.browser = "chrome";
    } else if (/Edg/.test(navigator.userAgent)) {
      console.log("Hello Microsoft Edge User!");
      this.browser = "edge";
    }

    let elHTML = "";

    for (const key in this) {
      if (Object.hasOwnProperty.call(this, key)) {
        if (key !== "el") {
          const info = this[key];
          elHTML += `<p>${ucFirst(key)} : ${info}</p>`;
        }
      }
    }

    this.el.divInfo.insertAdjacentHTML("beforeend", elHTML);

    //event mouse
    //PageY
    //PageX
    window.addEventListener("scroll", () => {
      //ajouter le débounce
      this.scrollY = window.scrollY;
    });
  }

  showAdmin(el) {
    console.log("click");
    console.log(el);
    if (el.divInfo.style.transform === "translate(0px)") {
      el.divInfo.style.transform = "translate(-200%)";
    } else {
      el.divInfo.style.transform = "translate(0px)";
    }
  }
}
