window.onload = function() {
  $.getJSON('./api/random.json', function( data ) {
    console.log( data.data.children[1].data );

    var thumbnailPic = data.data.children[1].data.thumbnail;
    var title = data.data.children[1].data.title;
    var author = data.data.children[1].data.author;
    var score = data.data.children[1].data.score;

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

      $( '.mainContentBox' ).append( contentBlock );

//========== CONTENT PICTURE DIV
    var contentPic = $( '<div>' );
      contentPic
        .addClass( 'contentPic' )
      ;

      $( '.contentBlock' ).append( contentPic );
      $( '.contentPic' ).append( '<img src=" '+ thumbnailPic +' "/>' );


//========== CONTENT HEADER DIV
    var contentHeader = $( '<div>' );
      contentHeader
        .addClass( 'contentHeader' )
      ;

      $( '.contentBlock' ).append( contentHeader );
      $( '.contentHeader' ).append( title );

//========== CONTENT AUTHOR DIV
    var contentAuthor = $( '<div>' );
      contentAuthor
        .addClass( 'contentAuthor' )
      ;

      $( '.contentBlock' ).append( contentAuthor );
      $( '.contentAuthor' ).append( 'by: ' + author );

//========== CONTENT DATE DIV
    var contentDate = $( '<div>' );
      contentDate
        .addClass( 'contentDate' )
      ;

      $( '.contentBlock' ).append( contentDate );

//========== CONTENT VIEWS DIV
    var contentViews = $( '<div>' );
      contentViews
        .addClass( 'contentViews' )
      ;

      $( '.contentBlock' ).append( contentViews );
      $( '.contentViews' ).append( score + ' views, wahoo!' );

//========== CONTENT TEXT DIV
    var contentText = $( '<div>' );
      contentText
        .addClass( 'contentText' )
      ;

      $( '.contentBlock' ).append( contentText );
  });
};