var database = firebase.database();
var $itemContainer = $('#_itemContainer');
/*
firebase.database().ref('product').once('value').then(function (snapshot) {

    snapshot.forEach(function (childSnapshot) {
        var data = childSnapshot.val();
        var $item = $('<div class="col-xs-12 col-sm-4 list-group"></div>');
        console.log(snapshot.key);
        var $id = $(String.format('<div class="list-group-item">{0}</div>', childSnapshot.key));
        console.log(snapshot.Name);
        var $name = $(String.format('<div class="list-group-item">{0}</div>', data.Name));
        console.log(snapshot.UnitPrice);
        var $price = $(String.format('<div class="list-group-item">{0}</div>', data.UnitPrice));
        console.log(snapshot.ImageURL);
        var $image = $(String.format('<div><img class="img-circle" alt="imageSource" src={0} /><div>', data.ImageURL));

        $itemContainer.append($item);
        $item.append($image);
        $item.append($id);
        $item.append($name);
        $item.append($price);     
    });      
});
*/

firebase.database().ref('product').on('child_added', function (snapshot) {
        var data = snapshot.val();
        var $item = $('<div class="col-xs-12 col-sm-4 list-group"></div>');
        console.log(snapshot.key);
        var $id = $(String.format('<div class="list-group-item">{0}</div>', snapshot.key));
        console.log(snapshot.Name);
        var $name = $(String.format('<div class="list-group-item">{0}</div>', data.Name));
        console.log(snapshot.UnitPrice);
        var $price = $(String.format('<div class="list-group-item">{0}</div>', data.UnitPrice));
        console.log(snapshot.ImageURL);
        var $image = $(String.format('<div><img class="img-circle" alt="imageSource" src={0} /><div>', data.ImageURL));

        $itemContainer.append($item);
        $item.append($image);
        $item.append($id);
        $item.append($name);
        $item.append($price);
});