
function handleButtonClick(buttonId, message) {
  const btn = document.querySelector(`#${buttonId}`);   //вытянули кнопку из iddex.html
 
  if (btn) {
    btn.addEventListener("click", () => {      //Реєстрація обробника події: "click"
      console.log(message);
    });
  } else {
    console.warn(`Button with ID "${buttonId}" not found.`);  //Кнопка з таким ID не знайдена
  }
  return btn;
}

 
function trackMousePosition() {
  document.addEventListener("mousemove", (e) => {    //Реєстрація обробника події: "mousemove"
    const x = e.clientX;
    const y = e.clientY;

  console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
  });
}


function createTestList() {

    /*document.body.innerHTML*/
    const listHTML= `                    
    <ul id="testList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>`

    document.body.insertAdjacentHTML('beforeend', listHTML);
}
createTestList();

function setupEventDelegation(selector) { 

  //Отримуємо доступ до батьківського елементу
  const list = document.getElementById("testList"); 

    // Призначаємо обробник подій батьківському елементу
    list.addEventListener("click", function(event) {

      //При кліку на наступний "LI" відбувається скидання фону для попереднього "LI" 
      for (const elem of list.querySelectorAll("li")) {

        //При кліку на наступний "ul" відбувається скидання фону для "li"
        if (event.target.tagName === 'UL') {
          elem.classList.remove(selector);   
        } 
        //При кліку на наступний "li" відбувається скидання фону для попереднього "li"
        else {
          elem.classList.remove(selector);
        }
        //При кліку на наступний "LI" відбувається скидання фону для "ul"
        list.classList.remove(selector);           
      }

      const li = event.target.closest("li");
      
      // Перевіряємо, чи клік було здійснено по елементу li
      if (li) {
        li.classList.add(selector);
        const text = li.textContent.trim();
        console.log(`Item clicked: ${text}`);
      } 
      // Перевіряємо, чи клік було здійснено по елементу ul
      else if (event.target.tagName === 'UL') {
        event.target.classList.add(selector);
      }
    });
}


export { handleButtonClick, trackMousePosition, setupEventDelegation }