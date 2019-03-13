(function(){
  var add_image = (article.image) ? `<img src="${article.image}"></p>` : "";
  function buildHTML(article){
    var html = `<h2><%= article.title %></h2>
                  <% if article.image != "" %>
                  <p><img src="<%= article.image %>"></p>
                  <p><%= article.content %></p>
                  <p><%= article.created_at %></p>`
    return html;
  }
  $('#new_article').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/comments'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.list_article').append(html)
    })
  })
});
