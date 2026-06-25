// === MUSIC PLAYER (Simple Playlist) ===

const playlist = ["multo.mp3", "kungWalaKa.mp3", "umaasa.mp3"];
let currentSong = 0;
const audio = new Audio();

const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn2");
const nextBtn = document.getElementById("nextBtn");

function playSong(index) {
  audio.src = playlist[index];
  audio.play();
  playBtn.innerHTML = "❚❚";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "❚❚";
  } else {
    audio.pause();
    playBtn.innerHTML = "▶";
  }
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % playlist.length;
  playSong(currentSong);
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  playSong(currentSong);
});

audio.src = playlist[currentSong];


// === MAIN BUTTONS ===
document.getElementById("playBtn").addEventListener("click", () => {
  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <section class="game-selection">
      <figure onclick="loadPuzzleGame()">
        <img class="game-icon" src="numberPuzzle.jpg" alt="Number Puzzle Game">
        <figcaption>Number Puzzle</figcaption>
      </figure>
      <figure onclick="loadTicTacToeGame()">
        <img class="game-icon" src="tictactoeIcon.jpg" alt="Tic Tac Toe Game">
        <figcaption>Tic Tac Toe</figcaption>
      </figure>
      <figure onclick="loadRiddleGame()">
        <img class="game-icon" src="riddleIcon.jpg" alt="Riddle Game">
        <figcaption>Riddle</figcaption>
      </figure>
    </section>
  `;
});

// Puzzle Game Loader
function loadPuzzleGame() {
  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <section>
      <iframe src="ssss.html" style="width:100%; height:350px; border:none; border-radius:12px;"></iframe>
    </section>
  `;
}

// Tic Tac Toe Game Loader
function loadTicTacToeGame() {
  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <section>
      <iframe src="tictactoe.html" style="width:100%; height:350px; border:none; border-radius:12px;"></iframe>
    </section>
  `;
}

// Riddle Game Loader
function loadRiddleGame() {
  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <section>
      <iframe src="riddle.html" 
              style="width:100%; height:350px; border:none; border-radius:12px;" 
              scrolling="no"></iframe>
    </section>
  `;
}




// === BREAK OPTIONS ===

const breakOptions = [showReadStory, showSleepDare];

document.getElementById("breakBtn").addEventListener("click", () => {
  const randomFunc = breakOptions[Math.floor(Math.random() * breakOptions.length)];
  randomFunc();
});


// === READ STORY ===

function showReadStory() {
  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <section>
      <h2 style="text-align:center; color:#c06; font-family:'Dancing Script', cursive;">📚 Choose a Story</h2>
      <nav class="story-list">
        <article class="story-card" onclick="showStory('story1')">🌸 Almost But Never</article>
        <article class="story-card" onclick="showStory('story2')">💌 The Unread Letter</article>
        <article class="story-card" onclick="showStory('story3')">🌙 A Goodbye Without Words</article>
      </nav>
    </section>
  `;
}

function showStory(id) {
  const stories = {
    story1: {
      title: "ALMOST BUT NEVER",
      text: `
      <p>
I saw him again today.<br>
He was laughing—yes but not at me, not with me—just laughing with someone else. Some girl. I didn’t know her name, but I think I don't need to. I could see the way he carried her bag, how his hand brushed her shoulder. He was being gentlemanly. Sweet. The same way he used to be with me.<br>
And God, it hurt.<br>
I looked away so fast as it made my head spin. My heart, too. I thought I was over this. I thought I was okay.<br>
I wasn’t.<br>
I clutched the strap of my bag tighter and walked as fast as I can. Not because I had somewhere to go to, but because I needed to escape—before the tears formed again, before the pain inside my chest exploded.<br>
He wasn’t even mine. He never was.<br>
But he almost was.<br>
I still remember that night. The conversation. The confession.<br>
--Flashback--<br>
The wind was strong again.<br>
We were on the rooftop—our spot. It was after class, and as usual, we were there without saying why. We didn’t really need a reason. That place was just… ours. Quiet, high above everything. Just the two of us, like always.<br>
He leaned on the railing beside me, eyes on the sky.<br>
"Do you ever think about us?" he asked out of nowhere.<br>
I blinked. "What do you mean?"<br>
He smiled a little. "Like… what if we were more than just friends?"<br>
I felt my heart pause.<br>
Is this it?—Is this finally it?. I turned to him slowly, nervous but soft. "I think about it all the time," I admitted, not even knowing if he meant something like having a relationship.<br>
He looked at me, surprised at first… then he smiled again, wider this time. "You do?"<br>
I think my guess was right. I nodded. “Yeah. I’ve liked you… for a while now.”<br>
He laughed a little, like he couldn’t believe it. “What? Since when?”<br>
“Since forever,” I joked, but my voice cracked a little.<br>
He looked down and shook his head, grinning. "That’s crazy."<br>
Then a pause.<br>
“Because I’ve liked you too. I just never thought you'd feel the same.”<br>
My heart jumped. Everything in me lit up. That was the moment—our moment. I froze. My grip tightened on the edge of the railing. That's what I’d been waiting for. All those stolen glances, late-night chats, the way we laughed like we were the only two people in the world—it all built up to that question. Yes I've got feelings for him and I've been keeping it for a very long time.<br>
I smiled, nervously excited.<br>
And then, like a scratch of a perfect song, he turned serious.<br>
He glanced away, then said softly:<br>
“If I asked you right now, ‘May I court you?’... would you say yes?”<br>
I stared at him, stunned, chest pounding. “Of course I would…”<br>
But he looked down, biting his lips.<br>
And then he said it.<br>
“But of course I won’t.”<br>
That stung.<br>
Even before he explained, it already hurt.<br>
“I know we’re friends,” he began, his voice calm—like he wasn’t breaking something.<br>
“And our friendship shouldn’t be broken. I think it’s better to keep it that way, kasi we don’t know what might happen next. I don’t want our feelings to be the reason we become strangers.”<br>
He paused. I stayed quiet.<br>
“I really value what we have,” he added. “If we weren’t best friends, maybe I’d take the risk. Kasi if we fail, at least walang friendship na masisira. So I think… this is better, diba?”<br>
I looked straight ahead.<br>
The whole thing kept repeating in my head like a broken song.<br>
And slowly, I felt something in my chest deflating—quietly. Like a balloon losing air.<br>
No. It wasn’t better.<br>
I mean, he’s right…<br>
But don’t lovers usually start from friendship in the first place?<br>
If we already have feelings for each other, then why not start?<br>
In fact—it hurts more when we don’t take the chance.<br>
I wanted to say that to him so badly.<br>
I wanted to beg him to try.<br>
But I was scared—and I didn’t want to look pathetic.<br>
So I said nothing.<br>
We kept telling ourselves we were still friends.<br>
But guess what?<br>
We’re not the same anymore. We've keep our friendship?<br>
Yes but...<br>
The closeness? Gone.<br>
The warmth? Fading.<br>
The laughter? Less.<br>
Now, we’re just two people who almost had something.<br>
--Flashback Ends-- <br>
I stopped walking and leaned against the wall of the hallway, breathing in slow.<br>
“I’m okay,” I whispered to no one. “You’re just a classmate now. I’ve moved on.”<br>
A lie I’ve rehearsed too many times.<br>
A lie that tastes like him every time I swallow it.<br>
I closed my eyes. And for a second, I let myself remember everything. The way he looked at me like I mattered. The way we laughed. The way I fell.<br>
And then… I exhaled.<br>
This is where I leave it, I told myself. Not because I’m over him. But because I deserve someone who doesn’t run away.<br>
I opened my eyes.<br>
He was still down the hall, still with her. But this time, I didn’t look away.<br>
I stared.<br>
Not with anger. Not with hate.<br>
Just with a quiet goodbye.<br>
To him.<br>
To what we almost had.<br>
To the version of myself that kept hoping.<br>
And then, I walked away.<br>
With tears held back and my heart still aching<br>
I can't assure that this feelings will fade but I'll try, "Adiós, mi casi.”<br>
</p>
      
      `,
    },
    story2: {
      title: "💌 The Unread Letter",
      text: "Coming soon..."
    },
    story3: {
      title: "🌙 A Goodbye Without Words",
      text: "Bumalik siya hindi para magpaliwanag, kundi para muling masaktan. <br> <br><br>Coming soon...<br>"
    }
  };

  const story = stories[id];

  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <article class="story-reader">
      <h2>${story.title}</h2>
      <p>${story.text}</p>
      <nav class="story-btns">
        <button onclick="showReadStory()">⬅ Back to Stories</button>
      </nav>
    </article>
  `;
}


// === OTHER BREAK FEATURES ===

// === SLEEP DARE (with Timer + Alarm) ===
function showSleepDare() {
  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <section class="sleep-dare">
      <h2>😴 Sleep Dare</h2>
      <p>I dare you to take a break! Set your sleep time below 💕</p>
      <div class="sleep-inputs">
        <label>Hours 
          <input type="number" id="hours" min="0" value="0">
        </label>
        <label>Minutes 
          <input type="number" id="minutes" min="0" max="59" value="0">
        </label>
      </div>
      <button class="sleep-btn" onclick="startSleepTimer()">Start Timer</button>
      <div id="countdown"></div>
      <audio id="alarmSound" src="alarm.mp3" preload="auto"></audio>
    </section>
  `;
}

// Timer logic
let sleepTimer;
function startSleepTimer() {
  clearInterval(sleepTimer);

  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  let totalSeconds = (hours * 3600) + (minutes * 60);

  const countdownEl = document.getElementById("countdown");
  const alarm = document.getElementById("alarmSound");

  if (totalSeconds <= 0) {
    countdownEl.innerHTML = "<p>Please set a valid time ⏳</p>";
    return;
  }

  function updateCountdown() {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    countdownEl.innerHTML = `<h3>${h}h ${m}m ${s}s left</h3>`;

    if (totalSeconds <= 0) {
      clearInterval(sleepTimer);
      countdownEl.innerHTML = "<h2>⏰ Wake up! Time’s up!</h2>";
      alarm.play();
    }

    totalSeconds--;
  }

  updateCountdown();
  sleepTimer = setInterval(updateCountdown, 1000);
}


function loadMainMenu() {
  const center = document.getElementById("centerBox");
  center.innerHTML = `
    <figure class="video-intro">
      <video autoplay muted loop playsinline>
        <source src="introvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </figure>
  `;
}
