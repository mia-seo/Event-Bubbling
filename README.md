# Event-Bubbling
## Event Bubbling
HTML 문서의 계층적 구조 특징 때문에 자식에서 이벤트가 발생하게 되면 부모에게 까지 연속적으로 이벤트가 흘러 올라가게 된다.
![이벤트 버블링](https://user-images.githubusercontent.com/117281717/232691751-199493da-e1b6-43b9-bac4-5948256ef3f0.gif)
<br />
위의 예시를 보면 상품을 클릭하면 상세페이지로 이동하고 장바구니 버튼을 클릭하면 장바구니로 이동해야한다. <br/>
하지만 장바구니 버튼을 클릭하면 상품과 장바구니 버튼 모두 클릭이벤트를 등록해두었기 때문에 장바구니 버튼을 클릭하면 장바구니 버튼에 등록해두었던 동작과 그 부모에 등록해두었던 동작까지 함께 작동하는 것을 볼 수 있다.<br/>
<br>
이를 막기 위한 메서드로 **stopPropagation()**이라는 메서드가 있다.
![stopPropagation](https://user-images.githubusercontent.com/117281717/232692949-d7b70e0e-8794-4692-8781-11c7f3f5af66.gif)
<br/>
위는 장바구니 버튼에 stopPropagation()을 적용한 것이다. <br/>
장바구니 버튼을 클릭 했을 때 부모에 등록해두었던 동작은 일어나지 않는다.
## 이벤트 위임
이벤트 버블링을 활용하여 조금 더 코드를 간결하고 메모리가 절약될 수 있는 방법이 바로 이벤트 위임이다.<br/>
이벤트 위임은 **상위 요소에서 하위 요소의 이벤트를 제어하는 방식**이다.
<br>
이벤트 위임을 하면 하위 요소마다 핸들러를 등록하지 않고 상위 요소에 하나의 이벤트 핸들러를 할당하여 하위 요소를 핸들링 할 수 있다.<br/>

![이벤트 위임](https://user-images.githubusercontent.com/117281717/232698146-c7f69051-8dd7-4096-9697-6e441a87329c.gif)
<br/>
위는 이벤트 위임의 예시이다. <br/>
ul 태그안의 여러개의 li 태그를 클릭 했을 때 해당 태그의 innerText를 alert로 띄우는 것이다.<br/>
li 태그 하나하나 이벤트를 등록하는 방법도 있지만 이벤트 위임을 통해 ul 태그에만 이벤트 핸들러를 등록하여 모든 작업이 가능했다.
<br>
하지만 li 태그 사이사이에 빈 공간을 클릭하면 ul 태그가 선택되어 ul 태그가 가지고 있는 모든 innerText 가 alert 창에 띄워지는 것을 볼 수 있다.<br/>
그래서 조건문을 통해 tagName 이 li 라면 alert 창에 띄워주도록 설정했다.<br/>
단, tagName은 항상 대문자 문자열만 가지는 점은 유의하자!<br/>

![tagName](https://user-images.githubusercontent.com/117281717/232699268-cc16af55-a913-4e93-bcd3-962c4029c895.gif)
## 모달창 만들기
모달창을 만드는데에는 많은 방법이 있지만 이벤트 버블링을 이용해 모달창을 구현해보았다.<br/>

![이벤트 버블링 - modal](https://user-images.githubusercontent.com/117281717/233767704-eec73391-d249-4845-a8d7-186bc2ab64fd.gif)

### 모달창 닫기
모달창 닫기 버튼을 눌렀을 때와 검은 바탕을 클릭했을 때 모두 모달창이 닫혀야했다.
```html
// html
 <div class="modal hidden">
    <div class="modalContent">
        <h1>모달창입니다! 🙏</h1>
        <button class="closeBtn">모달창 닫기 ❌</button>
    </div>
</div>
```
```js
// js
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalContent");
const closeBtn = document.querySelector(".closeBtn");

const HIDDEN_CLASSNAME = "hidden";

const closeModal = () => {
  modal.classList.add(HIDDEN_CLASSNAME);
};

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
```
뒤의 배경인 modal 에 이벤트를 달면 자동으로 흰 배경인 modalContent 를 클릭했을 때도 모달창이 닫아지는 현상이 발생한다.
따라서 modalContent에 stopPropagation 메서드를 추가해 해당 동작이 작동하지 않도록 막았다.
