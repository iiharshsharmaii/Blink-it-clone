var total_value = 0;
var total_items = 0;
if (window.innerWidth > 800) {
    var tally = document.getElementById('cart');
}
else {
    var tally = document.getElementById('cart2');
}

var numbers = {
    number1: 0, number2: 0, number3: 0, number4: 0, number5: 0, number6: 0, number7: 0, number8: 0, number9: 0, number10: 0, number11: 0,
    number12: 0, number13: 0, number14: 0, number15: 0, number16: 0, number17: 0, number18: 0
}



function total(div_num) {

    if (numbers['number' + div_num] > 9) {
        alert('You cannot select more than 10')
    }

    else {
        if (window.innerWidth < 801) {
            document.getElementById('phone_cart').style.display = 'flex';
        }
        var button_value = parseFloat(document.getElementById("button" + div_num).value);
        total_value += button_value;
        total_items += 1;
        tally.innerHTML = total_items + ' items <br>' + "&#8377;" + total_value;
        document.getElementById('button' + div_num).style.display = 'none';
        document.getElementById('item_count' + div_num).style.display = 'flex';
        numbers['number' + div_num]++;
        document.getElementById('number' + div_num).innerHTML = numbers['number' + div_num];
        document.getElementById('price').innerHTML = '&#8377;' + total_value;
        document.getElementById('bill_details').style.display = 'flex';
        document.getElementById('cancelation').style.display = 'flex';

        if (numbers['number' + div_num] > 0) {
            document.getElementById('cart_item' + div_num).style.display = 'flex';
        }

        if (total_items > 0) {
            document.getElementById('empty').style.display = 'none';
        }

        if (total_value < 200) {
            document.getElementById('del_charge').innerHTML = '&#8377;22';
            let x = total_value + 22;
            document.getElementById('grand_total').innerHTML = '&#8377;' +  x;
        } 

        if ( total_value > 199){
            document.getElementById('del_charge').innerHTML = '&#8377;0';
            let x = total_value + 0;
            document.getElementById('grand_total').innerHTML = '&#8377;' +  x;
        }

    }
}


function decrease_each_item_number(div_item_number) {
    if (numbers['number' + div_item_number] <= 1) {
        numbers['number' + div_item_number]--;
        document.getElementById('number' + div_item_number).innerHTML = numbers['number' + div_item_number];
        total_value = total_value - document.getElementById("button" + div_item_number).value;
        total_items -= 1;
        document.getElementById('price').innerHTML = '&#8377;' + total_value;
        tally.innerHTML = total_items + ' items <br>' + "&#8377;" + total_value;
        document.getElementById('button' + div_item_number).style.display = 'block';
        document.getElementById('item_count' + div_item_number).style.display = 'none';
        document.getElementById('phone_cart').style.display = 'none';
        
        if (total_items == 0) {

            tally.innerHTML = 'My Cart';
            document.getElementById('empty').style.display = 'flex';
            document.getElementById('bill_details').style.display = 'none';
            document.getElementById('cancelation').style.display = 'none';
        }
        document.getElementById('cart_item' + div_item_number).style.display = 'none';
        if( total_value > 199){
            document.getElementById('del_charge').innerHTML = '&#8377;0';
            let x = total_value + 0;
            document.getElementById('grand_total').innerHTML = '&#8377;' +  x;
        }
        
        if (total_value < 200) {
            document.getElementById('del_charge').innerHTML = '&#8377;22';
            let x = total_value + 22;
            document.getElementById('grand_total').innerHTML = '&#8377;' +  x;
        } 
    }
    else {
        numbers['number' + div_item_number]--;
        document.getElementById('number' + div_item_number).innerHTML = numbers['number' + div_item_number];
        total_value = total_value - document.getElementById("button" + div_item_number).value;
        total_items -= 1;
        tally.innerHTML = total_items + ' items <br>' + "&#8377;" + total_value;
        document.getElementById('price').innerHTML = '&#8377;' + total_value;

    }
}

function display_none() {
    let display = document.getElementById('aside');
    display.style.display = 'none';
    console.log(total_items);
    if( total_items > 0 && window.innerWidth < 801){
        document.getElementById('phone_cart').style.display = 'flex';
    }
}

function added_items() {
    let display = document.getElementById('aside');
    let display2 = document.getElementById('phone_cart');
    display.style.display = 'block';
    display2.style.display = 'none';
    if (total_items > 0) {
        document.getElementById('empty').style.display = 'none';
    }
    
}
