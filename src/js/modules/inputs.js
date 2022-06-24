import IMask from 'imask';

function inputs() {
    const element = document.querySelectorAll('.tel');
    
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    
    element.forEach((item) => {
        const mask = IMask(item, maskOptions);
    });
}

export default inputs;