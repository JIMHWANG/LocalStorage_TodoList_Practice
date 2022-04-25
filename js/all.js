
function updateList() {
    if (getListAry == null) { getListAry = []; return; }
    var getListAryLen = getListAry.length;
    var TodoListItem = document.querySelector('.TodoList');
    var str = '';
    for (var i = 0; i < getListAryLen; i++) {
        str += '<li class="item"><a href="#" data-num=' + i + '>刪除</a> ' + getListAry[i].Item + '</li>';
    }
    TodoListItem.innerHTML = str;
    console.log(str);

}

function addItem(e) {
    var TodoListItem = document.querySelector('.TodoListItem').value;
    var ItemObj = {
        Item: TodoListItem
    };
    getListAry.push(ItemObj);
    var ItemListStr = JSON.stringify(getListAry);
    localStorage.setItem('ItemList', ItemListStr);
    updateList();
}

function deleteItem(e) {
    if (e.target.nodeName !== 'A') { return; }
    var ItemNum = e.target.dataset.num;
    getListAry.splice(ItemNum, 1);
    updateList();
}

var getList = localStorage.getItem('ItemList');
var getListAry = JSON.parse(getList);

var TodoListInput = document.querySelector('.TodoListInput');
TodoListInput.addEventListener('click', addItem, false);

var Item = document.querySelector('.TodoList');
Item.addEventListener('click', deleteItem, false);

updateList();