const submitBtn = document.getElementById('submitBtn')

const getInfo=(event)=>{
    event.preventDefault();
    alert('hii');
}

submitBtn.addEventListener('click', getInfo);
