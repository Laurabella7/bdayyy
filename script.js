const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnCenter = document.getElementById("btn-center");
const gif = document.querySelector(".cute-gif");
const result = document.getElementById("result");

/* WRONG BUTTON KABUR */
function escapeButton(btn) {
    let randX = (Math.random() * 200) - 100; 
    let randY = (Math.random() * 200) - 100;

    btn.style.transform = `translate(${randX}px, ${randY}px)`;
}

btnLeft.addEventListener("mouseenter", () => escapeButton(btnLeft));
btnRight.addEventListener("mouseenter", () => escapeButton(btnRight));

/* CONFETTI */
function startConfetti() {
    let duration = 10000; // 10 detik
    let end = Date.now() + duration;

    function frame() {
        for (let i = 0; i < 15; i++) {
            let piece = document.createElement("div");
            piece.classList.add("confetti");

            piece.style.left = Math.random() * 100 + "vw";
            piece.style.backgroundColor = ["#d8baff", "#c6a0ff", "#b88cff", "#e8d9ff"][Math.floor(Math.random() * 4)];
            piece.style.animationDuration = (2.5 + Math.random() * 1) + "s";
            piece.style.opacity = Math.random();

            document.body.appendChild(piece);

            setTimeout(() => piece.remove(), 4000);
        }

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }

    frame();
}

/* YES BUTTON */
btnCenter.addEventListener("click", () => {
    gif.src = "assets/GIF2.gif";

    btnLeft.style.display = "none";
    btnRight.style.display = "none";

    // ganti pertanyaan & result
    document.querySelector(".question").innerText = "KEYSHA SPECIAL DAY! 🎉";

    result.innerText = `
YAY! 🎂 TODAY IS UR DAY!
Pertama-tama, selamat ulang tahun! 🥳
Semoga kue yang kamu makan nggak habis duluan, lilin nggak bikin alarm kebakaran, dan semua hadiah nggak ada yang salah alamat 😂.

Semoga hari ini kamu banyak tawa, kejutan manis, dan pelukan virtual dari semua orang yang sayang sama kamu 💜.
Semoga setiap harinya ke depan penuh warna seperti confetti, lucu seperti meme favorit kamu, dan manis seperti cokelat kesukaan kamu 🍫✨.

Jangan lupa, usia cuma angka… (anjay) tapi cake tetap wajib dimakan sebanyak-banyaknya! 🎂
Semoga semua impian kamu terbang tinggi, tapi jangan sampe kabur kayak tombol “NO” disini 😎.

Once again Happy Birthday, Keysha Putri Pratama! 🌟
Semoga hari ini dan seterusnya selalu dipenuhi cinta, tawa, dan vibes lilac yang cantik banget 💜💜💜
`;

    result.scrollTop = 0; 
    result.scrollTop = result.scrollHeight;

    startConfetti();

});
