console.log("Welcome TS!");

document.getElementById("message")!.innerText = "TypeScript works!";

const testowa = () => {
  throw new Error("Ups..");
};

class NaszaKlasa {
  placki = 123;

  testowa = testowa;
}

new NaszaKlasa().testowa();

export {};

declare global {
  interface Window {
    googleAnaylics: 1;
    facebookLogin: 1;
  }
}

window.googleAnaylics = 1;
