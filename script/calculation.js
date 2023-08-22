let totalPrice = 0;
let itemCounter = 0;

function clickHandler(target) {
    
    const dynamicItem = document.getElementById('dynamic-item')
    const content = target.childNodes[3].innerText;
    const ol = document.createElement('ol');
    ol.innerText= `${itemCounter +1}. ${content}`;
    dynamicItem.appendChild(ol);
    ol.classList.add('font-medium')
    itemCounter++;
    const price = target.childNodes[5].innerText.split(" ")[0];
   
    totalPrice = parseInt(totalPrice) + parseInt(price)
    
    const elimentTotal = document.getElementById('total-price').innerText=parseFloat(totalPrice.toFixed(2));
     document.getElementById('final-price').textContent = elimentTotal;


    applyBtn();
    applyDiscount();
    makePurchase();
}


function applyBtn() {
    const applyButton = document.getElementById('apply-btn');
    
    if (totalPrice <= 200) {
        applyButton.disabled = true;
        document.getElementById('input-code').value = '';
    
    } else {
        applyButton.disabled = false;
    }
    applyDiscount();
    document.getElementById('input-code').value = '';

}

function applyDiscount() {
    const inputCode = document.getElementById('input-code').value;
    
    if (inputCode === 'SELL200') {
        const totalPrice = parseFloat(document.getElementById('total-price').textContent);
        const discount = 20;
        const discountAmount = totalPrice * discount / 100; 
        const discountedPrice = totalPrice - discountAmount; 
        
        const totalDiscount = totalPrice - discountedPrice;
        document.getElementById('discounted-price').textContent = totalDiscount.toFixed(2);
        document.getElementById('final-price').textContent = discountedPrice.toFixed(2);
        return ;
    }else{
        return;
    }
    
}



function goHome(event) {
    document.getElementById('dynamic-item').textContent = ' ';
    itemCounter = 0;

    document.getElementById('total-price').textContent = '0.00';
    document.getElementById('discounted-price').textContent = '0.00';
    document.getElementById('final-price').textContent = '0.00';

    document.getElementById('my_modal_6').checked = false;
    document.getElementById('make-Purchase-btn').disabled = false;

    totalPrice = 0;
}

function makePurchase() {
    const makePurchaseBtn = document.getElementById('my_modal_6');
    if (totalPrice <= 0) {
        makePurchaseBtn.disabled = true;
    } else {
        makePurchaseBtn.disabled = false;
    }
}

