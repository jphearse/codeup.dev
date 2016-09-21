function request(){
			$.get("https://api.themoviedb.org/3/search/movie?api_key=14a1f11582b84502905c07a48b48bfd6&language=en-US&query=juno", {

			}).done(function(data){
				console.log(data);		//console logs object
				conditions(data);//calls condition function
			}).fail(function (xhr, err, msg){
				alert("something went wrong");			//put requeset in fucntion, make long and 
			});											//lat variables to replace when fuction is 29.427325, -98.491097
		}
		request();					//calls request function, gets san antonio coords and shows weather
		
		function conditions (movie){
			var moviesSpace = "";
				moviesSpace += "<h2 id='header'><strong>" + movie.results[0].original_title + "</strong></h2>" + "<br>";
				
			
				$("#movies").append(moviesSpace);

		}