var cells = document.getElementsByClassName('cell'); // ячейки поля игры (псевдомассив, перебирается циклом)
var round = document.getElementById('round'); // абзац с информацией о том, чей сейчас ход
var result = document.getElementById('result'); // абзац с информацией об исходе игры
var reset = document.getElementById('reset'); // кнопка для сброса (начать заново)
var winX = document.getElementById('winX'); // ячейка для счётчика побед крестиков
var winO = document.getElementById('winO'); // ячейка для счётчика побед ноликов
var drawn = document.getElementById('drawn'); // ячейка для счётчика ничьих
var flagX = false; // флаг, указывающий на то, что следующий ход делает X
var flagO = true; // флаг, указывающий на то, что следующий ход делает O
var flag = 0; // счётчик количества заполненных ячеек
var end = false; // флаг, указывающий на окончание игры (если равен 1)


for (var i = 0; i < cells.length; i++)
    cells[i].addEventListener('click', fill);


reset.addEventListener('click', function () {
    for (var i = 0; i < cells.length; i++)
        cells[i].innerHTML = '';
    for (var i = 0; i < cells.length; i++)
        cells[i].addEventListener('click', fill);

    round.style.display = 'block';
    result.style.display = 'none';
    end = 0;
    flag = 0;
    if (!flagO) fill();
});


function check() {
    if (((cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[2].innerHTML == "X") ||
        (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[5].innerHTML == "X") ||
        (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "X") ||
        (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "X") ||
        (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[7].innerHTML == "X") ||
        (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "X") ||
        (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "X") ||
        (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "X")) && !end) {
        result.style.display = 'block';
        result.innerHTML = 'Вы победили!';
        round.style.display = 'none';
        winX.innerHTML++;
        end = 1;
        flagX = 0;
        flagO = 1;
        return false;
    }

    else if (((cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[2].innerHTML == "O") ||
        (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[5].innerHTML == "O") ||
        (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "O") ||
        (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "O") ||
        (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[7].innerHTML == "O") ||
        (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "O") ||
        (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[8].innerHTML == "O") ||
        (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[6].innerHTML == "O")) && !end) {
        result.style.display = 'block';
        result.innerHTML = 'Победил компьютер!';
        round.style.display = 'none';
        winO.innerHTML++;
        end = 1;
        flagX = 1;
        flagO = 0;
        return false;
    }

    else if (flag == 9) {
        result.style.display = 'block';
        result.innerHTML = 'Ничья!';
        round.style.display = 'none';
        drawn.innerHTML++;
        end = 1;
        flagX = !flagX;
        flagO = !flagO;
        return false;
    }
}


function err() {
    var rand;
    if (flag == 10) return false;
    else {
        rand = Math.floor(Math.random() * 9);
        while (cells[rand].innerHTML == 'X' || cells[rand].innerHTML == 'O')
            rand = Math.floor(Math.random() * 9);
        cells[rand].innerHTML = 'O';
        cells[rand].removeEventListener('click', fill);
        check();
    }
}


function fill() {
    if (this != 'X' && this != 'O' && !end && !flagX) {
        check();
        this.removeEventListener('click', fill);
        this.innerHTML = 'X';
        flag++;
        flagX = 1;
        flagO = 0;
        check();
    }

    if (!flagO && !end) {
        check();
        flagX = 0;
        flagO = 1;
        flag++;

        if (cells[0].innerHTML == 'O' && cells[1].innerHTML == 'O' && cells[2].innerHTML != 'X') {
            cells[2].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'O' && cells[2].innerHTML == 'O' && cells[1].innerHTML != 'X') {
            cells[1].innerHTML = 'O';
            check();
        }
        else if (cells[1].innerHTML == 'O' && cells[2].innerHTML == 'O' && cells[0].innerHTML != 'X') {
            cells[0].innerHTML = 'O';
            check();
        }
        else if (cells[3].innerHTML == 'O' && cells[5].innerHTML == 'O' && cells[4].innerHTML != 'X') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[3].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[5].innerHTML != 'X') {
            cells[5].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'O' && cells[5].innerHTML == 'O' && cells[3].innerHTML != 'X') {
            cells[3].innerHTML = 'O';
            check();
        }
        else if (cells[6].innerHTML == 'O' && cells[7].innerHTML == 'O' && cells[8].innerHTML != 'X') {
            cells[8].innerHTML = 'O';
            check();
        }
        else if (cells[6].innerHTML == 'O' && cells[8].innerHTML == 'O' && cells[7].innerHTML != 'X') {
            cells[7].innerHTML = 'O';
            check();
        }
        else if (cells[7].innerHTML == 'O' && cells[8].innerHTML == 'O' && cells[6].innerHTML != 'X') {
            cells[6].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'O' && cells[3].innerHTML == 'O' && cells[6].innerHTML != 'X') {
            cells[6].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'O' && cells[6].innerHTML == 'O' && cells[3].innerHTML != 'X') {
            cells[3].innerHTML = 'O';
            check();
        }
        else if (cells[3].innerHTML == 'O' && cells[6].innerHTML == 'O' && cells[0].innerHTML != 'X') {
            cells[0].innerHTML = 'O';
            check();
        }
        else if (cells[1].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[7].innerHTML != 'X') {
            cells[7].innerHTML = 'O';
            check();
        }
        else if (cells[1].innerHTML == 'O' && cells[7].innerHTML == 'O' && cells[4].innerHTML != 'X') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'O' && cells[7].innerHTML == 'O' && cells[1].innerHTML != 'X') {
            cells[1].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'O' && cells[5].innerHTML == 'O' && cells[8].innerHTML != 'X') {
            cells[8].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'O' && cells[8].innerHTML == 'O' && cells[5].innerHTML != 'X') {
            cells[5].innerHTML = 'O';
            check();
        }
        else if (cells[5].innerHTML == 'O' && cells[8].innerHTML == 'O' && cells[2].innerHTML != 'X') {
            cells[2].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[8].innerHTML != 'X') {
            cells[8].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'O' && cells[8].innerHTML == 'O' && cells[0].innerHTML != 'X') {
            cells[0].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'O' && cells[8].innerHTML == 'O' && cells[4].innerHTML != 'X') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[6].innerHTML != 'X') {
            cells[6].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'O' && cells[6].innerHTML == 'O' && cells[4].innerHTML != 'X') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'O' && cells[6].innerHTML == 'O' && cells[2].innerHTML != 'X') {
            cells[2].innerHTML = 'O';
            check();
        }


        else if (cells[0].innerHTML == 'X' && cells[1].innerHTML == 'X' && cells[2].innerHTML != 'O') {
            cells[2].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'X' && cells[2].innerHTML == 'X' && cells[1].innerHTML != 'O') {
            cells[1].innerHTML = 'O';
            check();
        }
        else if (cells[1].innerHTML == 'X' && cells[2].innerHTML == 'X' && cells[0].innerHTML != 'O') {
            cells[0].innerHTML = 'O';
            check();
        }
        else if (cells[3].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[4].innerHTML != 'O') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[3].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[5].innerHTML != 'O') {
            cells[5].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[3].innerHTML != 'O') {
            cells[3].innerHTML = 'O';
            check();
        }
        else if (cells[6].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[8].innerHTML != 'O') {
            cells[8].innerHTML = 'O';
            check();
        }
        else if (cells[6].innerHTML == 'X' && cells[8].innerHTML == 'X' && cells[7].innerHTML != 'O') {
            cells[7].innerHTML = 'O';
            check();
        }
        else if (cells[7].innerHTML == 'X' && cells[8].innerHTML == 'X' && cells[6].innerHTML != 'O') {
            cells[6].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'X' && cells[3].innerHTML == 'X' && cells[6].innerHTML != 'O') {
            cells[6].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'X' && cells[6].innerHTML == 'X' && cells[3].innerHTML != 'O') {
            cells[3].innerHTML = 'O';
            check();
        }
        else if (cells[3].innerHTML == 'X' && cells[6].innerHTML == 'X' && cells[0].innerHTML != 'O') {
            cells[0].innerHTML = 'O';
            check();
        }
        else if (cells[1].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[7].innerHTML != 'O') {
            cells[7].innerHTML = 'O';
            check();
        }
        else if (cells[1].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[4].innerHTML != 'O') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[1].innerHTML != 'O') {
            cells[1].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[8].innerHTML != 'O') {
            cells[8].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'X' && cells[8].innerHTML == 'X' && cells[5].innerHTML != 'O') {
            cells[5].innerHTML = 'O';
            check();
        }
        else if (cells[5].innerHTML == 'X' && cells[8].innerHTML == 'X' && cells[2].innerHTML != 'O') {
            cells[2].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[8].innerHTML != 'O') {
            cells[8].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'X' && cells[8].innerHTML == 'X' && cells[0].innerHTML != 'O') {
            cells[0].innerHTML = 'O';
            check();
        }
        else if (cells[0].innerHTML == 'X' && cells[8].innerHTML == 'X' && cells[4].innerHTML != 'O') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[6].innerHTML != 'O') {
            cells[6].innerHTML = 'O';
            check();
        }
        else if (cells[2].innerHTML == 'X' && cells[6].innerHTML == 'X' && cells[4].innerHTML != 'O') {
            cells[4].innerHTML = 'O';
            check();
        }
        else if (cells[4].innerHTML == 'X' && cells[6].innerHTML == 'X' && cells[2].innerHTML != 'O') {
            cells[2].innerHTML = 'O';
            check();
        }

        else err();
    }
}
