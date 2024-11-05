document.addEventListener("DOMContentLoaded", function(){
    
    function ActiveAdress(num){
       ClassRemove(contactButtonArray, 'place_active');
       contactButtonArray[num].classList.add('place_active');
       None(contactSliderArray);
       contactSliderArray[num].style.display = "flex";
       
       ClassRemove(contactButtonArray, 'before_active');
       if(num != 0){
           contactButtonArray[num - 1].classList.add('before_active');
       }
        
        
        numAdress = num;
        ActiveStep(numAdress, 0);
        
   }
    
    function ActiveStep(numAdress, numStep){
        for (let i = 0; i < contactSliderArray.length; i++){
            None(contactSliderStepArray[i]);
            ClassRemove(contactNumberElips[numAdress], 'certificates_number__active');
        }
        
        contactSliderStepArray[numAdress][numStep].style.display = "flex";
        contactSliderStepArray[numAdress][contactSliderStepArray[numAdress].length - 1].style.display = "flex";
        contactNumberElips[numAdress][numStep].classList.add('certificates_number__active');
        numStep = numStep;
    }
    
    var contactButton = document.getElementById('contactButton');
    var contactSlider = document.getElementById('contactSlider');
    var contactButtonArray = contactButton.children;
    var contactSliderArray = contactSlider.children;
    var contactSliderStepArray = [];
    var numAdress, numStep = 0;
    var contactNumberElips = [];
    var arrayLeft = [], arrayRight = [];
    
    
    
    
    for (let i = 0 ; i < contactButtonArray.length; i++){
        contactButtonArray[i].addEventListener('click', ()=>{
            numStep = 0;
            ActiveAdress(i);
        });
        contactSliderStepArray[i] = contactSliderArray[i].children[1].children;
        let num = contactSliderStepArray[i].length - 1;
        CkrollNumber(num, contactSliderStepArray[i][num]);
        contactNumberElips[i] = contactSliderStepArray[i][num].children;
        arrayLeft[i] = contactSliderArray[i].children[0];
        arrayRight[i] = contactSliderArray[i].children[contactSliderArray[i].children.length - 1];
    }
    
    ActiveAdress(0);
    
    for(let i = 0; i < arrayLeft.length; i++){
        arrayLeft[i].addEventListener('click', ()=>{
            if(numStep > 0){
                numStep--;
                ActiveStep(numAdress, numStep);
            }
        });
        
        arrayRight[i].addEventListener('click', ()=>{
            if(numStep < contactNumberElips[i].length - 1){
                numStep++;
                ActiveStep(numAdress, numStep);
            }
        });
        
        for(let j = 0; j < contactNumberElips[i].length; j++){
            contactNumberElips[i][j].addEventListener('click', ()=>{
                ActiveStep(numAdress, j);
                numStep = j;
            });
        
        }
    }
    
    
   
    

});