// menu one

function menuOne() {
    let menuBox = document.querySelector('.menu_dop__menu');
    let menuBtn = document.querySelector('.head__btn1');
    let emptyArea = document.querySelector('.home1__slider');

    function menuOpen() {
        menuBox.classList.toggle('active');
        menuBtn.classList.toggle('active');
    }
    menuBtn.addEventListener('click', menuOpen);

    function menuClose() {
        menuBox.classList.remove('active');
        menuBtn.classList.remove('active');
    }
    emptyArea.addEventListener('click', menuClose);
}
menuOne();


// sub menu one

function subMenu() {
    let subMenuOne = document.querySelector('.menu_dop__sub1_hide');
    let subMenuOneBtn = document.querySelector('.menu_dop__sub1_btn');
    let subMenuTwo = document.querySelector('.menu_dop__sub2_hide');
    let subMenuTwoBtn = document.querySelector('.menu_dop__sub2_btn');

    function subMenuOneActive() {
        subMenuOne.classList.toggle('active');
        subMenuOneBtn.classList.toggle('active');
    }
    subMenuOneBtn.addEventListener('click', subMenuOneActive);
    
    function subMenuTwoActive() {
        subMenuTwo.classList.toggle('active');
        subMenuTwoBtn.classList.toggle('active');
    }
    subMenuTwoBtn.addEventListener('click', subMenuTwoActive);
}
subMenu();


// menu search

function dopMenuSearch() {
    let dopMenuSeachPopup = document.querySelector('.menu_dop__search2');
    let dopMenuSeachBtn = document.querySelector('.head__adress');
    let dopMenuSeachBtnMap = document.querySelector('.menu_dop__search2_map');
    let dopMenuSeachMap = document.querySelector('.menu_dop__map_popup');
    let dopMenuSeachBtnEmpty = document.querySelector('.menu_dop__map_popup_shadow');
    let dopMenuSeachBtnClose = document.querySelector('.menu_dop__map_popup_exit');

    function dopMenuSearchOpen() {
        dopMenuSeachPopup.classList.toggle('active');
    }
    dopMenuSeachBtn.addEventListener('click', dopMenuSearchOpen);

    function dopMenuSearchMap() {
        dopMenuSeachPopup.classList.remove('active');
        dopMenuSeachMap.classList.add('active');
        dopMenuSeachBtnEmpty.classList.add('active');
    }
    dopMenuSeachBtnMap.addEventListener('click', dopMenuSearchMap);

    function dopMenuSearchMapExit() {
        dopMenuSeachMap.classList.remove('active');
        dopMenuSeachBtnEmpty.classList.remove('active');
    }
    dopMenuSeachBtnEmpty.addEventListener('click', dopMenuSearchMapExit);
    dopMenuSeachBtnClose.addEventListener('click', dopMenuSearchMapExit);
}
dopMenuSearch();


// cart popup

function cartPopup() {
    let cartPopupBox = document.querySelector('.cart_pupup');
    let cartPopupOpenBtn = document.querySelector('.head__btn_cart');
    let cartPopupCloseBtn = document.querySelector('.cart_pupup__close');

    function cartPopupOpen() {
        cartPopupBox.classList.toggle('active');
    }
    cartPopupOpenBtn.addEventListener('click', cartPopupOpen);

    function cartPopupClose() {
        cartPopupBox.classList.remove('active');
    }
    cartPopupCloseBtn.addEventListener('click', cartPopupClose);
}
cartPopup();


// active tags

function activeTags() {
    let activeTag = document.querySelectorAll('.home1__tag');
    for (let i = 0; i < activeTag.length; i++) {
        activeTag[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}
activeTags();


// btn add to cart

function addToCart() {
    document.querySelectorAll('.card').forEach(v => {
        v.querySelector(".card__add").addEventListener('click', () => {
            v.classList.add('active');
        });
    });
}
addToCart();


// slider top

function sliderFunc() {
    let sliderBox = document.querySelector('.home1__slider_box');
    let tapToRightBtn = document.querySelector('.slider__next_btn');
    let index = 0;
    sliderBox.style.width = '500px';
    sliderBox.style.left = '0px';
  
    function sliderNext() {
        setTimeout(() => {
            index++;
            let child = sliderBox.querySelector(`div:nth-child(${index})`);
            let cloneNode = child .cloneNode(true);
            sliderBox.style.width = `${(5 + index) * 100}px`;
            sliderBox.appendChild(cloneNode);
        }, 300);
        // clone and move the element to bottom
        let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace('px', '')) : 0;
        let nextLeftPosition = currentLeftPosition - 203;
        sliderBox.style.left = `${nextLeftPosition}px`;
    }
    tapToRightBtn.addEventListener('click', sliderNext);
}
sliderFunc();


// card preview

function cardPreview() {
    let cardImg = document.querySelector('.card__img');
    let cardActive = document.querySelector('.card_preview__item');
    let cardCloseBtn = document.querySelector('.card_preview__close');

    function cardPreviewActive() {
        cardActive.classList.add('active');
    }
    cardImg.addEventListener('click', cardPreviewActive);

    function cardPreviewExit() {
        cardActive.classList.remove('active');
    }
    cardCloseBtn.addEventListener('click', cardPreviewExit);
}
cardPreview();