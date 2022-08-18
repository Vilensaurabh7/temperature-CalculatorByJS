let tempConversion=() =>{
    let numericVal=document.getElementById('cel').value;
    // console.log(numericVal);  first get the numberic value.. then get the temperature value and convert by passing the numberic value..!  

    const tempSelected =document.getElementById('temp');
    const valueTem= tempSelected.options[tempSelected.selectedIndex].value; // it gives the value of value attribute used in option tag.
     console.log(valueTem);


     const celToFah = (val) => {
        return (Math.round((val*9)/5+32));
        // (°C × 9/5) + 32
     }
     
     const fahToCel =  (val) => {
        return (Math.round((val-32)*5/9));
     }


    let output ;

    if(valueTem == 'cel'){
        output=celToFah(numericVal);
        document.getElementById('result').innerHTML = `= ${output} °Fahrenheit` ;
        // result
    }
    else{
        output= fahToCel(numericVal);
        document.getElementById('result').innerHTML= `= ${output} °Celsius` ;
    }

}