function newItem() {

    // add new element
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something')
    } else {
        let list = $('#list');
        list.append(li);
    }

    // add function of strike out the list of items
    function crossOut() {
        li.toggleClass('strike');
    }
    li.on('dblclick', crossOut);

    // add delete button "X"

    let crossOutButton = $('<button></button>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // add class as 'delete' in the list 

    function deleteListItem() {
        li.addClass('delete');
    }

    // reorder the items
    $('#list').sortable();

}

