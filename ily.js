const letters = {
  center: {
    title: "I’m sorry ❤️",
    text: `I know it is sorry after sorry and I haven't fixed what I promised. I can say it again but instead let me show you how sorry I am. I am not myself and not in a right headspace and it is not okay. You are perfect. Which is why I can't lose you. Perfect in beauty, perfect in laughter, joy, kindness, but most of all, perfect in the person you are. I am mostly only like this when we are so distant from eachother. I know I need to grow up because it won't be the last time. I have no right to tell you thing the way I do and for that I am sorry. I don't have much but I will one day and it will be soon. I have never let myself down and you are apart of me now so I know I won't let you down. There is nothing in this world that can make me stop from loving you. That is why I can't give up and I dont want you to either. I hate that I make you feel or think I don't love or want to be with you because that simply is not true. I have a future and I thank god you are in it everyday. You play a big roll and I can't mess that up because it is perfect. I love you and I will prove to you why.`
  },

  one: {
    title: "8 Billion hearts and none are like yours",
    text: `In a world full of billions there is a reason you stand out...`
  },

  two: {
    title: "Your beauty can't be matched",
    text: `When I say this it is true...`
  },

  three: {
    title: "Lucky to be yours",
    text: `I have bad luck as of right now...`
  },

  four: {
    title: "Who I want to be for You",
    text: `I know I have messed but no more...`
  }
};

const modal = document.getElementById("modal");
const titleEl = document.getElementById("letterTitle");
const textEl = document.getElementById("letterText");

document.querySelectorAll("[data-key]").forEach(btn => {
  btn.onclick = () => {
    const key = btn.dataset.key;
    titleEl.textContent = letters[key].title;
    textEl.textContent = letters[key].text;
    modal.style.display = "flex";
  };
});

document.getElementById("close").onclick = () => {
  modal.style.display = "none";
};