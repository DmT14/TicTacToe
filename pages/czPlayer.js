var cells = document.getElementsByClassName('cell'); // ячейки поля игры (псевдомассив, перебирается циклом)
var round = document.getElementById('round'); // абзац с информацией о том, чей сейчас ход
var result = document.getElementById('result'); // абзац с информацией об исходе игры
var reset = document.getElementById('reset'); // кнопка для сброса (начать заново)
var winX = document.getElementById('winX'); // ячейка для счётчика побед крестиков
var winO = document.getElementById('winO'); // ячейка для счётчика побед ноликов
var drawn = document.getElementById('drawn'); // ячейка для счётчика ничьих
var flagX = 0; // флаг, указывающий на то, что следующий ход делает X
var flagO = 1; // флаг, указывающий на то, что следующий ход делает O
var flag = 0; // счётчик количества заполненных ячеек
var end = 0; // флаг, указывающий на окончание игры (если равен 1)


reset.addEventListener('click', function () {
    for (var i = 0; i < cells.length; i++)
        cells[i].innerHTML = '';
    round.style.display = 'block';
    if (!flagX)
        round.innerHTML = 'Сейчас ходит X';
    else
        round.innerHTML = 'Сейчас ходит O';
    result.style.display = 'none';
    end = 0;
    flag = 0;
});

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', fill);
}

function fill() {
    if ((this.innerHTML != 'X') && (this.innerHTML != 'O') && !end) {
        flag++;
        if (!flagX && ((this.innerHTML != 'X') || (this.innerHTML != 'O'))) {
            this.innerHTML = 'X';
            flagX = 1;
            flagO = 0;
            round.innerHTML = 'Сейчас ходит O';
        }
        else if ((cells[i] != 'X') || (cells[i] != 'O')) {
            this.innerHTML = 'O';
            flagX = 0;
            flagO = 1;
            round.innerHTML = 'Сейчас ходит X';
        }
        else
            return false;
    }

    if (((cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[2].innerHTML == "X") ||
        (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[5].innerHTML == "X") ||
        (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "X") ||
        (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "X") ||
        (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[7].innerHTML == "X") ||
        (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "X") ||
        (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "X") ||
        (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "X")) && !end) {
        result.style.display = 'block';
        result.innerHTML = 'Победил X!';
        round.style.display = 'none';
        flagX = 0;
        flagO = 1;
        winX.innerHTML++;
        end = 1;
        return false;
    }

    if (((cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[2].innerHTML == "O") ||
        (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[5].innerHTML == "O") ||
        (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "O") ||
        (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "O") ||
        (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[7].innerHTML == "O") ||
        (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "O") ||
        (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "O") ||
        (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "O")) && !end) {
        result.style.display = 'block';
        result.innerHTML = 'Победил O!';
        round.style.display = 'none';
        flagO = 0;
        flagX = 1;
        winO.innerHTML++;
        end = 1;
        return false;
    }

    if ((flag == 9) && !end) {
        result.style.display = 'block';
        result.innerHTML = 'Ничья!';
        round.style.display = 'none';
        drawn.innerHTML++;
        end = 1;
        return false;
    }
}
