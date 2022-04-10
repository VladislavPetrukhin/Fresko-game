let exercise = document.querySelector('.exercise')
let exerciseBox = document.querySelector('.exerciseBox')
let header = document.querySelector('.header')
let input = document.querySelector('.input')
let answerButton = document.querySelector('.answerButton')
let startButton = document.querySelector('.startButton')
let hText = document.querySelector('.hText')
let image = document.querySelector('.jak2')
let body = document.querySelector('.body')
exerciseBox.style.display = 'none'
image.style.display= 'none'
let count = 0

document.querySelector('#but1').onclick = function (){
    header.style.display = 'none'
    exerciseBox.style.display = 'inline'
    exerciseGo(count)
    let timeout = setInterval(() => exerciseGo(count),5000)
    setTimeout(() => {clearInterval(timeout); res(count)}, 24800)
}


function randomExercise() {
    oper = Math.trunc(Math.random() * 10);
    if (oper < 4) {
        a = Math.trunc(Math.random() * 100)
        b = Math.trunc(Math.random() * 100)
        c = a + b
        d = a + '+' + b
    } else if (oper<8){
        a = Math.trunc(Math.random() * 100)
        b = Math.trunc(Math.random() * 100)
        c = a - b
        d = a + '-' + b
    } else{
        a = Math.trunc(Math.random() * 10)
        b = Math.trunc(Math.random() * 10)
        c = a * b
        d = a + '*' + b
    }
    console.log(d)
    console.log(c)
    return [c,d]
}


function exerciseGo(count) {
    console.log('2')
    hText.textContent = 'СЧИТАЙ ДЕБИЛ!!!'
    //smoothly(hText,'textContent','СЧИТАЙ ДЕБИЛ!!!')
    let value = randomExercise()
    exercise.textContent = value[1] + '=???'
    //smoothly(exercise,'textContent',value[1] + '=???')
    document.querySelector('#but2').onclick = function () {
        let answer = document.querySelector('input').value
        hText.style.display = 'inline'
        if (isNaN(answer)) {
            hText.textContent = 'ЭТО НЕ ОТВЕТ'
            //smoothly(hText,'textContent','ЭТО НЕ ОТВЕТ')
        } else if (answer == value[0]) {
            count++
            hText.textContent = 'ПРАВИЛЬНО'
            //smoothly(hText,'textContent','ПРАВИЛЬНО')
        } else {
            hText.textContent = 'НЕПРАВИЛЬНО'
            //smoothly(hText,'textContent','НЕПРАВИЛЬНО')
        }
        document.querySelector('input').value = ''
    }

    return count
}

function res(count){
    exercise.textContent = ''
    answerButton.textContent = 'В меню'
    answerButton.style.fontSize = '60px'
    document.querySelector('input').value = ''
    exercise.style.display = 'none'
    document.querySelector('input').style.display = 'none'
    console.log(count)
    switch (count){
        case 0:
            hText.textContent = 'ИДИОТ'
            image.style.display = 'flex'
            document.querySelector('.jak').display = 'inline'
            break
        case 1:
            hText.textContent = 'ТВОЙ МОЗГ НИЧТОЖНО МАЛ'
            break
        case 2:
            hText.textContent = 'ТВОЙ ИНТЕЛЛЕКТ СОПОСТАВИМ С ИНТЕЛЛЕКТОМ ОБЕЗЬЯНЫ'
            break
        case 3:
            hText.textContent = 'Ты немного туповат'
            break
        case 4:
            hText.textContent = 'Ты достаточно неплохо считаешь, как для ученика начальной школы'
            break
        case 5:
            hText.textContent = 'Никогда не поверю, что это ты сам считал'
            break
        default:
            hText.textContent = 'В мои расчеты закралась ошибка'
    }
    document.querySelector('#but2').onclick = function () {
        location.reload()
    }
}
