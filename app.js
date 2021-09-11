
// api_access key  = 358b2a93cca3bc5fc7026b4f06985e78



document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('form').onsubmit = function(){


        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=358b2a93cca3bc5fc7026b4f06985e78&format=1')
        .then(response => response.json())
        .then(data => {
            const input_val =document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[input_val];
            if(rate !== undefined){
                document.querySelector('.rate').innerHTML = `1 EUR is ${rate.toFixed(2)} ${input_val}`;
            }else{
                document.querySelector('.rate').innerHTML = `try again :(`;
            }
            
        });

        return false;
    }
});



