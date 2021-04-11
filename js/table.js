var num1 = Number(localStorage.getItem("num"));
				if (num1 == null) {
		    	num1 = 0;
		    	localStorage.setItem('num',num1);
		}

			// var line="<tr><th>Name</th><th>Skill</th><th>Level</th><th>Comment</th></tr>";
			function fun() {
				var f={};
				console.log('hello');
  				f.name=document.getElementById("Name").value;
  					f.skill=document.getElementById("Skill").value;
  				f.level=document.getElementById("sel1").value;
  				f.comment=document.getElementById("comment").value;
				num1 += 1;
  				localStorage.setItem(num1,JSON.stringify(f));
  
  
				localStorage.setItem('num',num1);

  				// forloop();
 				window.location.href = "aboutme.html";
				}


				console.log('hi');


// window.addEventListener('load',(loop) => {
//console.log((localStorage.getItem('num')));
					for (var i = 0; i <localStorage.length ; i++)
  	 				{
					//	console.log('hil');
   					var k = localStorage.key(i);
   					if(k == "on_load_counter" || k == 'num')
   					continue;
 					 var l = JSON.parse(localStorage.getItem(k));
 					var line= "<tr>"+"<td>"+l.name+"</td>"+"<td>"+l.skill+"</td>"+"<td>"+l.level+"</td>"+"<td>"+l.comment+"</td>"+"</tr>";
 					document.getElementById("values").innerHTML= document.getElementById("values").innerHTML + line;
 					console.log(line);

    }