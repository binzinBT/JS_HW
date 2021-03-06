/*
Задание №1. ECMAScript 5. Основы
Дан массив размера N. Отсортируйте его по возрастанию методом 
"Быстрой сортировки". Отличительной особенностью быстрой 
сортировки является операция разбиения массива на две части
относительно опорного элемента. Например, если последовательность
требуется упорядочить по возрастанию, то в левую часть будут
помещены все элементы, значения которых меньше значения опорного 
элемента, а в правую элементы, чьи значения больше или равны опорному.
Вне зависимости от того, какой элемент выбран в качестве опорного,
массив будет отсортирован, но все же наиболее удачным считается 
ситуация, когда по обеим сторонам от опорного элемента оказывается
примерно равное количество элементов. Если длина какой-то из 
получившихся в результате разбиения частей превышает один элемент,
то для нее нужно рекурсивно выполнить упорядочивание, т.е.
 повторно запустить алгоритм на каждом из отрезков.

Таким образом, алгоритм быстрой сортировки включает в себя два основных этапа:
1. Разбиение массива относительно опорного элемента;
2. Рекурсивная сортировка каждой части массива.

*/

// функия start_1 используется для запуска скрипта в index.html 
function start_1() {

	var arrTest = [];
	var lengthArr = Math.floor( Math.random() * (13 - 10) + 10 );
	
	for (var i = 0; i < lengthArr; i++){
		arrTest[i] = Math.floor( Math.random() * (99 - 10) + 10  );
	}
	console.log("Исх. масив: " + arrTest);

	function swapElemenArr(arrSwap, firstIndex, secondIndex){
		var tmp = 0;

		tmp = arrSwap[firstIndex];
		arrSwap[firstIndex] = arrSwap[secondIndex];
		arrSwap[secondIndex] = tmp;
	}
	
	function quickSort( arr, firstEl, lastEl ){
		var i = firstEl;
		var j = lastEl;
		var pivot = arr[lastEl];

		while ( i <= j ) {
			while ( arr[i] < pivot ){
				i++;
			}

			while ( arr[j] > pivot ){
				j--;
			}

			if ( i <= j ) {
				swapElemenArr(arr, i, j);
				i++;
				j--;
			}
		}
		
		if ( i < lastEl ){
			quickSort(arr, i, lastEl );
		}
		if ( j > firstEl ){
			quickSort(arr, firstEl, j );
		}
	}	

 	quickSort(arrTest, 0, arrTest.length-1);
	console.log("Результат:  " + arrTest);
	
}


