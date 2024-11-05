document.addEventListener("DOMContentLoaded", function(){
    
    function Articles(num){
        None(articlesArray);
        for (let i = 0; i < numArticles; i++){
            if((numArticles * (num - 1) + i) < articlesArray.length){
                articlesArray[numArticles * (num - 1) + i].style.display = "block";
            }
        }
        
        ClassRemove(articleSliderElipsArray, 'certificates_number__active');
        articleSliderElipsArray[num-1].classList.add('certificates_number__active');
        numActive = num;
    }
    
    const screenWidth = window.innerWidth;
    var articles = document.getElementById('articles');
    var articleSliderElips = document.getElementById('articleSliderElips');
    var articlesArray = articles.children;
    var numArticles, numRow;
    var numActive = 1;
    
    
    if(screenWidth > 1600){
        numArticles = 4;
    }else if(screenWidth > 1200){
        numArticles = 3;
    }else if(screenWidth > 970){
         numArticles = 2;
    }else if(screenWidth > 740){
         numArticles = 3;
    }else{
         numArticles = 2;
    }
    
    if(articlesArray.length % numArticles == 0){
       numRow = articlesArray.length / numArticles; 
    } else{
       numRow = Math.floor(articlesArray.length / numArticles) + 1; 
    } 
    
     CkrollNumber(numRow, articleSliderElips);
    
     var articleSliderElipsArray = articleSliderElips.children;
    
    
    Articles(numActive);
    
    
    
   for (let i = 0; i < articleSliderElipsArray.length; i++){
        articleSliderElipsArray[i].addEventListener('click', ()=>{
                Articles(i + 1);
            });
   }
   
    
    var articleLeft = document.getElementById('articleLeft');
    var articleRight = document.getElementById('articleRight');
    
    articleLeft.addEventListener('click', ()=>{
        if(numActive > 1){
            numActive--;
            Articles(numActive)
        }
    });
    
    
     articleRight.addEventListener('click', ()=>{
        if(numActive < numRow){
            numActive++;
            Articles(numActive)
        }
    });
     
});


let num = 4
switch(num){
    case 4:
    case 5: num++
    case 6: num++
    case 7: num++
    default: num++
}
