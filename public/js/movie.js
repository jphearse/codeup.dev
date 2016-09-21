function request(title){
			$.get("https://api.themoviedb.org/3/search/movie?api_key=14a1f11582b84502905c07a48b48bfd6&language=en-US&query="+title, {

			}).done(function(data){
				console.log(data);		//console logs object
				conditions(data);//calls condition function
			}).fail(function (xhr, err, msg){
				alert("something went wrong");			//put requeset in fucntion, make long and 
			});											//lat variables to replace when fuction is 29.427325, -98.491097
		}


			$('html').ready(function(){
    $('#text').keypress(function(e){
      if(e.keyCode==13)
      $('button').click();
    });
});
			$("button").click(function () {

			var $title = $('input').val();
			console.log($title);
			request($title);					//calls request function, gets san antonio coords and shows weather
		    });




		function conditions (movie){
			var moviesSpace = "";
				moviesSpace += movie.results[0].original_title;
				$("#movies").html(moviesSpace);

				var imageSpace = "" 
				imageSpace += "<img src=http://image.tmdb.org/t/p/w500" + movie.results[0].poster_path + ">"
				$("#image").html(imageSpace);

				var infoSpace = '';
				infoSpace += '<strong>Title: ' + movie.results[0].original_title + '</strong> <em>('+ movie.results[0].release_date.substring(0,4) +')</em><br>';
				infoSpace += '<strong>Plot: </strong>' + movie.results[0].overview;
				$("#info").html(infoSpace);
		}