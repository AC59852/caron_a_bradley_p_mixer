(() => {

	// // set up the puzzle pieces and boards
	let	dropZones = document.querySelectorAll('.dropZone');
		
		initDrag();

	//handling drag n drop functionality
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin...')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	//handle dragover n drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('you dragged me over!');
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('ouch! you dropped me!');

			let prevDrop = e.target;
				while (prevDrop !== 0 && !prevDrop.classList.contains("dropZone")) {
				prevDrop = prevDrop.parentNode;
				return false;
			}

 			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));

			let kick = document.getElementById("drag1"),
				snare = document.getElementById("drag2"),
				kBoard = document.getElementById("drag3"),
				hihat = document.getElementById("drag4"),
				tri = document.getElementById("drag5"),
				bass = document.getElementById("drag6"),
				horn = document.getElementById("drag7");

  if (document.getElementById("musicBox").contains(kick)) {
  	document.querySelector("#kickdrum").play();
  }
   if (document.getElementById("musicBox").contains(snare)) {
  	document.querySelector("#snare").play();
  }
  if (document.getElementById("musicBox").contains(bass)) {
  	document.querySelector("#bass").play();
  }
  if (document.getElementById("musicBox").contains(tri)) {
  	document.querySelector("#triangle1").play();
  }
  if (document.getElementById("musicBox").contains(hihat)) {
  	document.querySelector("#hihat").play();
  }
  if (document.getElementById("musicBox").contains(kBoard)) {
  	document.querySelector("#keyboard").play();
  }
  if (document.getElementById("musicBox").contains(horn)) {
  	document.querySelector("#horn").play();
  }
  if (document.getElementById("musicBox").contains(test)) {
  	document.querySelector("#snare").play();
  }
		});
	});

})();