const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)  

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if(height === '' || height < 0 || isNaN(height)){
       results.innerHTML = `Please give a valid height ${height}`;
       results.style.color = "red";
   }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
    results.style.color = "red";
    }else{
        const bmi = parseFloat((weight/((height*height)/10000)).toFixed(2)); 
        if(bmi < 18.6){
            const msg = 'Underweight'
            results.innerHTML = `<span>your BMI is ${bmi}, and your value is ${msg}</spn>.`
            results.style.color="#8B8000"
        }else if(bmi > 24.9){
         results.innerHTML = `<span>your BMI is ${bmi},and your value is Overweight</spn>.`
         results.style.color="red"
        }else{
            const msg = 'Normal Range'
            results.innerHTML = `<span>your BMI is ${bmi}, and your value is ${msg}</spn>.`
            results.style.color="green"
        }
    }

})