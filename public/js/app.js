window.onload = function() {
  $.getJSON('./api/random.json', function( data ) {

//========== Header Button Container for different API access
    var headerBtnContainer = $( '<div>' );
      headerBtnContainer
        .addClass( 'headerBtnContainer' )
      ;

      $( '.header' ).append( headerBtnContainer );

//========== Header Button for accessing Random API
    var headerRandomBtn = $( '<div>' );
      headerRandomBtn
        .addClass( 'headerRandomBtn' )
      ;

      headerBtnContainer.append( headerRandomBtn );

//========== Header Button for accessing Get the App API
    var headerGetTheAppBtn = $( '<div>' );
      headerGetTheAppBtn
        .addClass( 'headerGetTheAppBtn' )
      ;

      headerBtnContainer.append( headerGetTheAppBtn );

//========== Header Button for accessing My Boards API
    var headerMyBoardsBtn = $( '<div>' );
      headerMyBoardsBtn
        .addClass( 'headerMyBoardsBtn' )
      ;

      headerBtnContainer.append( headerMyBoardsBtn );

//========== Generate first batch of content
    for( var i = 0; i < 6; i++) {

    var randomChoice = Math.floor(Math.random()*50);
    var childData = data.data.children[randomChoice].data;
    var thumbnailPic = childData.thumbnail;
    var title = childData.title;
    var author = childData.author;
    var date = moment( childData.created, 'X' ).fromNow();
    var score = childData.score;
    var loremText = 'Aenean cursus nulla eget libero sodales convallis. Sed metus felis, porta auctor dignissim id, auctor vitae libero. Nunc mollis nec ligula sit amet ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam rhoncus est nec sem viverra, at pulvinar est interdum. Nulla nec varius metus. Etiam sodales nunc ullamcorper erat ornare, at posuere nunc condimentum.';

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
        contentDate.append( date );

//========== CONTENT VIEWS DIV
      var contentViews = $( '<div>' );
        contentViews
          .addClass( 'contentViews' )
        ;

        contentBlock.append( contentViews );
        contentViews.append( score + ' views, yeye!' );

//========== CONTENT TEXT DIV
      var contentText = $( '<div>' );
        contentText
          .addClass( 'contentText' )
        ;

        contentBlock.append( contentText );
        contentText.append( loremText );
      }
  });
};