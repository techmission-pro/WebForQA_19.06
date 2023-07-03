document.querySelector('.calc-calculate').addEventListener('click', function () {
const num1 = +document.querySelector('[name="num1"]').value;
const num2 = +document.querySelector('[name="num2"]').value;
const op = document.querySelector('[name="op"]').value;

let result;

if (op === 'plus') {
	result = num1 + num2;
} else if (op === 'minus') {
	result = num1 - num2;
} else if (op === 'multiply') {
	result = num1 * num2;
}else if (op === 'divide') {
	result = num1 / num2;
}
	<style>
document.querySelector('.calc-result').value = result;
});
/* Stylizacja przycisków */
    .custom-button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .custom-button:hover {
      background-color: #45a049;
    }

    .custom-button.primary {
      background-color: #007bff;
    }

    .custom-button.primary:hover {
      background-color: #0056b3;
    }

    .custom-button.secondary {
      background-color: #6c757d;
    }

    .custom-button.secondary:hover {
      background-color: #5a6268;
    }
	
	</style>