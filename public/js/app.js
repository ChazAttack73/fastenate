window.onload = function() {
  $.getJSON('./api/get_the_app.json', function( data ) {
    console.log( data.data );
    for( var i = 0; i < 6; i++) {

    var randomChoice = Math.floor(Math.random()*50);

    var thumbnailPic = data.data.children[randomChoice].data.thumbnail;
    var title = data.data.children[randomChoice].data.title;
    var author = data.data.children[randomChoice].data.author;
    var score = data.data.children[randomChoice].data.score;

//========== MAIN CONTENT BOX DIV
      var mainContentBox = $( '<div>' );
        mainContentBox
          .addClass( 'mainContentBox' )
        ;

        $( document.body ).append( mainContentBox );

//========== CONTENT BLOCK DIV
      var contentBlock = $( '<div>' );
        contentBlock
          .addClass( 'contentBlock' )
        ;

        mainContentBox.append( contentBlock );

//========== CONTENT PICTURE DIV
      var contentPic = $( '<div>' );
        contentPic
          .addClass( 'contentPic' )
        ;

        contentBlock.append( contentPic );
        contentPic.append( '<img src=" '+ thumbnailPic +' "/>' );


//========== CONTENT HEADER DIV
      var contentHeader = $( '<div>' );
        contentHeader
          .addClass( 'contentHeader' )
        ;

        contentBlock.append( contentHeader );
        contentHeader.append( title );

//========== CONTENT AUTHOR DIV
      var contentAuthor = $( '<div>' );
        contentAuthor
          .addClass( 'contentAuthor' )
        ;

        contentBlock.append( contentAuthor );
        contentAuthor.append( 'by: ' + author );

//========== CONTENT DATE DIV
      var contentDate = $( '<div>' );
        contentDate
          .addClass( 'contentDate' )
        ;

        contentBlock.append( contentDate );

//========== CONTENT VIEWS DIV
      var contentViews = $( '<div>' );
        contentViews
          .addClass( 'contentViews' )
        ;

        contentBlock.append( contentViews );
        contentViews.append( score + ' views, wahoo!' );

//========== CONTENT TEXT DIV
      var contentText = $( '<div>' );
        contentText
          .addClass( 'contentText' )
        ;

        contentBlock.append( contentText );
        contentText.append( 'Aenean cursus nulla eget libero sodales convallis. Sed metus felis, porta auctor dignissim id, auctor vitae libero. Nunc mollis nec ligula sit amet ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam rhoncus est nec sem viverra, at pulvinar est interdum. Nulla nec varius metus. Etiam sodales nunc ullamcorper erat ornare, at posuere nunc condimentum.' );
      }
  });
};