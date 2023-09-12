function displayList() {
  let fruitsList = document.getElementById('fruits');
  let fruits = document.querySelectorAll('p');

  let ul_element = document.createElement('ul');

  // pタグの要素をli要素に変換し、ul要素の子要素にする
  fruits.forEach((fruit) => {
    let li_element = document.createElement('li');
    li_element.textContent = fruit.textContent;
    ul_element.appendChild(li_element);
  });

  // div要素配下のpタグ要素を削除
  while(fruitsList.lastChild) {
    fruitsList.removeChild(fruitsList.lastChild);
  }

  // div要素をul要素に置換
  fruitsList.appendChild(ul_element);
}