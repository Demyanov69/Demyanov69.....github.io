const prices = {
    healthyMind: 1000000,
    extraTime: 500,
    goodHealth: 5,
    option1: 200,
    option2: 343,
};

document.addEventListener('DOMContentLoaded', function() {
    const quantityField = document.getElementById('quantityField');
    const totalPriceField = document.getElementById('totalPriceField');
    const optionsContainer = document.getElementById('optionsContainer');
    const propertiesContainer = document.getElementById('propertiesContainer');
    const propertyCheckbox = document.getElementById('property');
    const optionsSelect = document.getElementById('options');

    function updateVisibility() {
        const selectedProduct = document.querySelector('input[name="serviceType"]:checked').value;
        optionsContainer.style.display = selectedProduct === 'extraTime' ? 'block' : 'none';
        propertiesContainer.style.display = selectedProduct === 'goodHealth' ? 'block' : 'none';
        calculateTotal(); 
    }

    function calculateTotal() {
        const selectedProduct = document.querySelector('input[name="serviceType"]:checked').value;
        const quantity = parseInt(quantityField.value) || 0;
        let price = prices[selectedProduct] || 0;
    
        if (selectedProduct === 'extraTime') {
            if (optionsSelect.value === 'option1') {
                price += prices.option1;
            } else if (optionsSelect.value === 'option2') {
                price += prices.option2;
            }
        }
    
        if (selectedProduct === 'goodHealth' && propertyCheckbox.checked) {
            price -= 1;
        }
    
        totalPriceField.value = price * quantity;
    }

    document.querySelectorAll('input[name="serviceType"]').forEach(radio => {
        radio.addEventListener('change', function() {
            updateVisibility();
            calculateTotal(); 
        });
    });

    optionsSelect.addEventListener('change', function() {
        calculateTotal(); 
    });
    
    propertyCheckbox.addEventListener('change', function() {
        calculateTotal(); 
    });

    document.getElementById('button1').addEventListener('click', function() {
        quantityField.value += '1';
        calculateTotal(); 
    });
    document.getElementById('button2').addEventListener('click', function() {
        quantityField.value += '2';
        calculateTotal(); 
    });
    document.getElementById('button3').addEventListener('click', function() {
        quantityField.value += '3';
        calculateTotal(); 
    });
    document.getElementById('button4').addEventListener('click', function() {
        quantityField.value += '4';
        calculateTotal(); 
    });
    document.getElementById('button5').addEventListener('click', function() {
        quantityField.value += '5';
        calculateTotal(); 
    });
    document.getElementById('button6').addEventListener('click', function() {
        quantityField.value += '6';
        calculateTotal(); 
    });
    document.getElementById('button7').addEventListener('click', function() {
        quantityField.value += '7';
        calculateTotal(); 
    });
    document.getElementById('button8').addEventListener('click', function() {
        quantityField.value += '8';
        calculateTotal(); 
    });
    document.getElementById('button9').addEventListener('click', function() {
        quantityField.value += '9';
        calculateTotal(); 
    });
    document.getElementById('button0').addEventListener('click', function() {
        quantityField.value += '0';
        calculateTotal(); 
    });
    
    updateVisibility();
});