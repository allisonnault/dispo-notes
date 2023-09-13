dayjs().format();
var today = dayjs().format('M/D');

var spans = document.getElementsByClassName('date');

for (let i = 0; i < spans.length; i++) {
    const date = spans[i];
    date.textContent=today;
}




