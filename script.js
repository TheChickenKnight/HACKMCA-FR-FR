const sources = document.getElementsByClassName("audio_source");
const buttons = document.getElementsByTagName("button");
console.log(buttons.length);
const playing = [false, false, false, false, false, false, false, false, false];
function play(index) {
    if (!playing[index]) {
        sources[index].play();
        buttons[index].classList.remove('bg-slate-500');
        buttons[index].classList.add('bg-white');
        playing[index] = true;
        return;
    }
    sources[index].pause();
    buttons[index].classList.add('bg-slate-500');
    buttons[index].classList.remove('bg-white');
    playing[index] = false;
}