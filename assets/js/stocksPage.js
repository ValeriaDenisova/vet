document.addEventListener("DOMContentLoaded", function () {



    var stockPageContent = document.getElementById('stockPageContent');
    var stockPageContentArray = stockPageContent.children;
    var stoksSliderElipsPage = document.getElementById('stoksSliderElipsPage');
    var stocksPageBreadCrumbs = document.getElementById('stocksPageBreadCrumbs');
    var stocksPageBreadCrumbsArray = stocksPageBreadCrumbs.children;


    NewElement(stockPageContentArray.length, 'div', "elips", stoksSliderElipsPage);

    var stoksSliderElipsPageArray = stoksSliderElipsPage.children;
    var stoksPageLeft = document.getElementById('stoksPageLeft');
    var stoksPageRight = document.getElementById('stoksPageRight');

    numStocksPage = localStorage.getItem('stocksKey');
    
    if(numStocksPage == null){
        numStocksPage = 0;
    }

    Slider(numStocksPage, stockPageContentArray, 'block', stoksSliderElipsPageArray, 'elips_active')
    stocksPageBreadCrumbsArray[numStocksPage].style.display = "block"

    stoksPageLeft.addEventListener('click', (e) => {

        numStocksPage = SliderArray(e, 'stoksPageLeft', 'stoksPageRight', Slider, numStocksPage, stockPageContentArray, 'block', stoksSliderElipsPageArray, 'elips_active');
        None(stocksPageBreadCrumbsArray);
        stocksPageBreadCrumbsArray[numStocksPage].style.display = "block";

    });

    stoksPageRight.addEventListener('click', (e) => {

        numStocksPage = SliderArray(e, 'stoksPageLeft', 'stoksPageRight', Slider, numStocksPage, stockPageContentArray, 'block', stoksSliderElipsPageArray, 'elips_active');
        None(stocksPageBreadCrumbsArray);
        stocksPageBreadCrumbsArray[numStocksPage].style.display = "block";

    });


    for (let i = 0; i < stoksSliderElipsPageArray.length; i++) {
        stoksSliderElipsPageArray[i].addEventListener('click', () => {
            numStocksPage = i;
            Slider(numStocksPage, stockPageContentArray, 'block', stoksSliderElipsPageArray, 'elips_active');
            None(stocksPageBreadCrumbsArray);
        stocksPageBreadCrumbsArray[numStocksPage].style.display = "block";
        });
    }
    
//    localStorage.removeItem("stocksKey");


});
