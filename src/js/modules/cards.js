function cards() {
    const workItems = document.querySelectorAll('.work__item'),
          workItemsOverlays = document.querySelectorAll('.work__item-overlay'),
          workItemsTitles = document.querySelectorAll('.work__item-title'),
          workItemsImages = document.querySelectorAll('.work__item-img'),
          workItemsBtns = document.querySelectorAll('.work__item-btn'),
          width = document.body.clientWidth;
    
    workItems.forEach((item, index) => {
        if (width > 992) {
            item.addEventListener('click', () => {
                workItemsOverlays[index].classList.toggle('work__item-overlay-hidden');
                workItemsTitles[index].classList.toggle('work__item-title-blur');
                workItemsImages[index].classList.toggle('work__item-img-blur');
            });
        }
    });
    
    workItemsBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('work__item-btn-back')) {
                workItemsOverlays[index].classList.add('work__item-overlay-hidden');
                workItemsTitles[index].classList.remove('work__item-title-blur');
                workItemsImages[index].classList.remove('work__item-img-blur');
                btn.classList.remove('work__item-btn-back');
            } else {
                workItemsOverlays[index].classList.remove('work__item-overlay-hidden');
                workItemsTitles[index].classList.add('work__item-title-blur');
                workItemsImages[index].classList.add('work__item-img-blur');
                btn.classList.add('work__item-btn-back');
            }
        });
    });
}

export default cards;