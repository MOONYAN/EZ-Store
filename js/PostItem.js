var database = firebase.database();


$('#_pushButton').click(function ()
{
    var newItem =
        {
            Name: $('#_nametext').val(),
            ImageURL: $('#_imageUrlText').val(),
            UnitPrice: $('#_unitPriceText').val(),
        };
    database.ref('item').push(newItem);
    location.reload();
});