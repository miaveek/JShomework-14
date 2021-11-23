/*
Создайте функцию user, сделайте так чтобы функция выводила в консоль контекст
Создайте обьект userOne, добавьте к нему свойства имя, фамилия, возраст и функцию,
 которая будет выводить  Привет! Я имя + фамилия  Выведите имя и фамилию пользователя с объекта userOne.
Сделайте так, чтобы контекст в методе объекта userOne был глобальный объект window.
Создайте еще один объект userTwo и заполните его теми же свойствами, но без метода.
Выведите информацию с объекта userTwo используя метод объекта userOne.
*/
window.onload = () =>{
user =()=>{
    let userOne = {
        name:"Vilian",
        sname:"Maxvell",
        age:21,
        showuser:(obj)=>{
            //console.log(this);//this ссылается на глобальный обьект windows так как используется стрелочная функция
            return console.log("Привет! Я " + obj.name +" "+ obj.sname);
        }
    }
    let userTwo = {
        name:"Maxvell",
        sname:"Black",
        age:32
    }
    userTwo.showuser = userOne.showuser.bind(userTwo);//заиствуем метод
    userTwo.showuser(userTwo)
    userOne.showuser(userOne)
}
user();

//Создайте метод который будет умножать элементы массива на то число которое будет передавать пользователь.
//Сделайте так, чтобы метод наследовался каждым массивом подобно методу pop().
let arr = [34,65,78,,34,34],
    arr2 =[2,4,6,8,89,43,23];
Array.prototype.arrayMultiplication = function(userNumber){
    let multipleArr = [];
          this.forEach(function(entry){
         return multipleArr.push(entry*userNumber);
     })
     console.log(multipleArr)
}
arr.arrayMultiplication(23);
arr2.arrayMultiplication(3);
/*
Сделайте функцию, которая считает и выводит количество своих вызовов.
    func(); //выведет 1
    func(); //выведет 2
    func(); //выведет 3
    func(); //выведет 4
*/
drowning =()=> {
	let i = 1;
	return ()=> {return i++};// используем вложенную анонимную функцию для реализации замыкания
}

let func = drowning();

console.log(func());
console.log(func());
console.log(func());
console.log(func());

/*
Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
 Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.
 */
 randomArr =()=> {
	let arr = [];//массив чисел, которые уже были сгенерированы функцией
	return ()=> {
		let randomNum = Math.floor(Math.random() * 100 + 1);//получение случайного числа из диапазона числа
		for (let i = 0; i < arr.length; i++) { //проверка на повторение
			if (arr[i] == randomNum) {return}
		};
		document.querySelector('p').innerHTML += randomNum+', ';//вывод числа после проверки
		arr.push(randomNum);//добавление в массив,который используется для проверки на совпадения
	}
}
document.querySelector('#btn').addEventListener('click', randomArr());
}
