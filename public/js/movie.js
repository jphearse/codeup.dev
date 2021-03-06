function request(title){
			$.get("https://api.themoviedb.org/3/search/movie?api_key=14a1f11582b84502905c07a48b48bfd6&language=en-US&query="+title, {

			}).done(function(data){
				console.log(data);		//console logs object
				movieInfo(data);
			}).fail(function (xhr, err, msg){
				alert("something went wrong");			
			});											
		}

		function requestCast(movieId){
			$.get("https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key=14a1f11582b84502905c07a48b48bfd6", {

			}).done(function(data){
				console.log(data);		//console logs object
				if (typeof data.cast[0] !== 'undefined') {
					console.log(data.cast[0]);
					movieCast(data);
				};
			}).fail(function (xhr, err, msg){
				alert("something went wrong");			
			});											
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
			request($title);					
	    });




		function movieInfo (movie){
			var moviesSpace = "";
				moviesSpace += movie.results[0].title;
				$("#movies").html(moviesSpace);

				var imageSpace = "" 
				imageSpace += "<img src=http://image.tmdb.org/t/p/w500" + movie.results[0].poster_path + ">"
				$("#image").html(imageSpace);

				var infoSpace = '';
				infoSpace += '<strong>Title: </strong>' + movie.results[0].title + ' <em>('+ movie.results[0].release_date.substring(0,4) 
					+')</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><i class="fa fa-star"> '+movie.results[0].vote_average+'</i><br>';
				infoSpace += '<strong>Plot: </strong>' + movie.results[0].overview;
				$("#info").html(infoSpace);


				requestCast(movie.results[0].id);

		}
		function movieCast(cast){

				var castSpace = '';			
				for(var i = 0; i < cast.crew.length; i++){
					if(cast.crew[i].job == 'Director'){
						castSpace += '<div id="directorInfo"><strong>Director: </strong>'+ cast.crew[i].name + "</div>";
					}
				}
				castSpace += '<h3><strong>Cast</strong></h3>';

				for (i = 0; i <= 4; i++) {
				if (cast.cast[i].profile_path != null) {
					castSpace += "<div id='castImages' class='col-lg-3 col-md-3 col-sm-3 col-xs-3'>";
					castSpace += "<img src=http://image.tmdb.org/t/p/w500" + cast.cast[i].profile_path + "><br>";
					castSpace += "<strong>"+ cast.cast[i].name + "</strong><br> as " + cast.cast[i].character;
				}
					castSpace += "</div>"
				}

				$("#cast").html(castSpace);
		}



