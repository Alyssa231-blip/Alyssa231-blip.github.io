const LETTERS = {
  center: {
    title: "I’m sorry ❤️",
    text: `I know it is sorry after sorry and I haven't fixed what I promised. I can say it again but instead let me show you how sorry I am. I am not myself and not in a right headspace and it is not okay. You are perfect. Which is why I can't lose you. Perfect in beauty, perfect in laughter, joy, kindness, but most of all, perfect in the person you are. I am mostly only like this when we are so distant from eachother. I know I need to grow up because it won't be the last time. I have no right to tell you thing the way I do and for that I am sorry. I don't have much but I will one day and it will be soon. I have never let myself down and you are apart of me now so I know I won't let you down. There is nothing in this world that can make me stop from loving you. That is why I can't give up and I dont want you to either. I hate that I make you feel or think I don't love or want to be with you because that simply is not true. I have a future and I thank god you are in it everyday. You play a big roll and I can't mess that up because it is perfect. Doesn't involve arguing, needing reassurance, sadness, depression, no trust, hate, worrying, struggling etc. I love you and I will prove to you why. I will not lose you by any means and I will fight to make you the happiest person because it's something that you deserve, its something you will have. I am sorry and I will do better I promise. I know it's probably the last time but I am going to try because I don't want to lose you. I hope I haven't already`
  },
  one: {
    title: "8 Billion hearts and none are like yours",
    text: `in a world full of billions there is a reason you stand out. You are a princess, your eyes, your smile, but when you speak you can light up an entire world. You are smart funny and caring. It shocks me everyday that if you are stressing or sad or even angry you still try to let others know you are okay. To not ruin anyones vibe because the person you are to being beautiful and shed happiness to everyones eyes. You are like no other.`
  },
  two: {
    title: "Your beauty can't be matched",
    text: `When I say this it is true, "Your beauty can't be matched" because in and out it's impossible to say that you aren't by any means. You help, you enjoy, you love, all without trying to be the person you are. Yea you are very beautiful I cant take my eyes off you, you just don't notice, but it makes you more perfect when you bring you inner beauty out. I am a lot of thing but I know I am not as strong as you. You lift weights of hearts by making others feel joy even when you are in a mood you are not wanting to be. I wish I could be like you, but it inspires me to try. Which I will, but when you sit there knowing you are so overwhelmed im not just staring at you awkwardly because I know how lucky I am because you are so beautiful but because, your strengths. I just could never get over it. You are perfect and I will always admire you.`
  },
  three: {
    title: "Lucky to be yours",
    text: `I have bad luck as of right now i am not sure why. But everyday I doesn't matter because I am lucky. To be by your side I can't imagine what life would be without you. The day we met I couldn't stop talking to you and I didn't give up with everything that was going on because I have always know you were perfect for me. I have never loved like this before but it's not because I am not the same guy I was it is because of YOU. You are the reason to my successes. I havent had any but the way I was giving up I probably wouldn't be where I stand. You mean the Universe to me. I don't tell you much and that has to change. I am the luckiest Men. You are the biggest achievement I have made so far in life. You are worth more than you know.`
  },
  four: {
    title: "Who I want to be for You",
    text: `I know I have messed but no more. I need you to know I am here for a reason. I am going to change but with that being said I remember. I remember not giving flowers and knowing that I need to. I remember not telling you things because I knw you worry. No more. I will stop and act. There is nothing more precious of the sound of you being secured and happy. So I will make it happen baby. Even if I have to mow lawns. You will be happy again. I love you. Lets get this show on the road and you'll see why you made the right choice.`
  }
};

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const titleEl = document.getElementById("letterTitle");
const textEl = document.getElementById("letterText");

function openLetter(key){
  const data = LETTERS[key] || LETTERS.center;
  titleEl.textContent = data.title;
  textEl.textContent = data.text;
  modal.style.display = "grid";
  modal.setAttribute("aria-hidden", "false");
}

function closeLetter(){
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-key]").forEach(el => {
  el.addEventListener("click", () => openLetter(el.dataset.key));
});

closeBtn.addEventListener("click", closeLetter);

// click outside card closes
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeLetter();
});

// ESC closes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLetter();
});
