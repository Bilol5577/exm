function createCalculator() {
    const calculatorContainer = document.createElement('div');
    calculatorContainer.style.fontFamily = 'Arial, sans-serif';
    calculatorContainer.style.backgroundColor = '#fff';
    calculatorContainer.style.padding = '30px';
    calculatorContainer.style.borderRadius = '10px';
    calculatorContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    calculatorContainer.style.textAlign = 'center';
    calculatorContainer.style.width = '1000px';
    calculatorContainer.style.margin = 'auto';
    calculatorContainer.style.marginTop = '50px';

    const title = document.createElement('h1');
    title.textContent = 'Kalkulyator';
    title.style.fontSize = '24px';
    title.style.marginBottom = '20px';
    calculatorContainer.appendChild(title);

    const button = document.createElement('button');
    button.textContent = 'Hisoblash';
    button.style.backgroundColor = '#f0c674';
    button.style.padding = '10px 20px';
    button.style.borderRadius = '5px';
    button.style.border = 'none';
    button.style.fontSize = '18px';
    button.style.cursor = 'pointer';
    button.style.transition = 'transform 0.3s, background-color 0.3s';
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.backgroundColor = '#ffd700';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '#f0c674';
    });
    calculatorContainer.appendChild(button);

    const calculatorBox = document.createElement('div');
    calculatorBox.style.display = 'flex';
    calculatorBox.style.backgroundColor = 'orange';
    calculatorBox.style.padding = '20px';
    calculatorBox.style.borderRadius = '8px';
    calculatorBox.style.gap = '10px';
    calculatorBox.style.marginTop = '20px';
    calculatorBox.style.marginBottom = '20px';
    calculatorBox.style.height = '150px';
    calculatorBox.style.alignItems = 'center';
    calculatorBox.style.justifyContent = 'space-around';
    calculatorBox.style.transition = 'opacity 0.5s ease-in-out';
    calculatorContainer.appendChild(calculatorBox);

    const checkButton = document.createElement('button');
    checkButton.textContent = 'Javob';
    checkButton.style.backgroundColor = '#4CAF50';
    checkButton.style.padding = '10px 20px';
    checkButton.style.borderRadius = '5px';
    checkButton.style.border = 'none';
    checkButton.style.fontSize = '18px';
    checkButton.style.cursor = 'pointer';
    checkButton.style.marginTop = '20px';
    checkButton.style.transition = 'transform 0.3s, background-color 0.3s';
    checkButton.addEventListener('mouseover', () => {
        checkButton.style.transform = 'scale(1.1)';
        checkButton.style.backgroundColor = '#45a049';
    });
    checkButton.addEventListener('mouseout', () => {
        checkButton.style.transform = 'scale(1)';
        checkButton.style.backgroundColor = '#4CAF50';
    });
    checkButton.disabled = true; 
    calculatorContainer.appendChild(checkButton);

    const redbox = document.createElement('div');
    redbox.style.display = 'flex';
    redbox.style.backgroundColor = 'red';
    redbox.style.padding = '20px';
    redbox.style.borderRadius = '8px';
    redbox.style.marginTop = '20px';
    redbox.style.marginLeft = '330px';
    redbox.style.height = '150px';
    redbox.style.width = '300px';
    redbox.style.alignItems = 'center';
    redbox.style.justifyContent = 'center';
    redbox.style.color = 'white';
    redbox.style.fontSize = '20px';
    redbox.style.opacity = '0'; 
    redbox.style.transition = 'opacity 0.5s ease-in-out';
    redbox.textContent = 'Natija bu yerda chiqadi!';
    calculatorContainer.appendChild(redbox);

    const createBox = (text) => {
        const box = document.createElement('div');
        box.textContent = text;
        box.style.width = '60px';
        box.style.height = '60px';
        box.style.display = 'flex';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'center';
        box.style.border = '2px solid black';
        box.style.fontSize = '24px';
        box.style.transition = 'transform 0.3s ease';
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.2)';
        });
        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
        });
        return box;
    };

    let result = null;


    button.addEventListener('click', function () {
        let num1 = parseFloat(prompt("1-raqamni kiriting:"));
        if (isNaN(num1)) {
            alert("Iltimos, raqam kiriting!");
            return;
        }

        let choice = prompt("Amalni tanlang: \n1) +\n2) -\n3) *\n4) /");
        if (!["1", "2", "3", "4"].includes(choice)) {
            alert("Noto'g'ri amal tanlandi!");
            return;
        }

        let num2 = parseFloat(prompt("2-raqamni kiriting:"));
        if (isNaN(num2)) {
            alert("Iltimos, raqam kiriting!");
            return;
        }

        let operation = "";
        switch (choice) {
            case "1":
                result = num1 + num2;
                operation = "+";
                break;
            case "2":
                result = num1 - num2;
                operation = "-";
                break;
            case "3":
                result = num1 * num2;
                operation = "*";
                break;
            case "4":
                if (num2 === 0) {
                    alert("0 ga bo'lish mumkin emas!");
                    return;
                }
                result = num1 / num2;
                operation = "/";
                break;
        }

        calculatorBox.innerHTML = ""; 
        const num1Box = createBox(`${num1}`);
        const choiceBox = createBox(`${operation}`);
        const num2Box = createBox(`${num2}`);
        calculatorBox.appendChild(num1Box);
        calculatorBox.appendChild(choiceBox);
        calculatorBox.appendChild(num2Box);
        calculatorBox.style.opacity = '1';

        checkButton.disabled = false; 
    });

    checkButton.addEventListener('click', function () {
        if (result !== null) {
            redbox.textContent = `Javob: ${result}`;
            redbox.style.opacity = '1'; 
        } else {
            redbox.textContent = 'Iltimos, avval hisoblashni bajaring!';
        }
    });

    document.body.appendChild(calculatorContainer);
}

createCalculator(createCalculator);
