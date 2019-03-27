(() => {

// All of our arrays that aren't specifically needed for 1-2 things
	
	let iconHolder = document.querySelector("#iconsBox"),
		 dropZones = document.querySelectorAll('.dropZone'),
		 audio = document.querySelectorAll('audio');
		
		initDrag();

	//handling drag n drop functionality
	function initDrag() {
		iconHolder.querySelectorAll('svg').forEach(div => {
			div.addEventListener("dragstart", function(e) {
				console.log('draggin...');


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
			let icons = e.dataTransfer.getData("text/plain");
			e.preventDefault();
			// logging that the instrument icon was dropped
			console.log(`${icons} was dropped`);

			// creating a new audio element specific to the instrument
			let newSound = document.createElement("audio");
				newSound.src = `assets/sounds/${icons}.wav`;

				// this creates a copy/clone of the original icon, allowing for multiple instruments to be on the page at once
				// We went with this idea after we couldn't get the libraries working the way we wanted with pitch changing
				// this allows us to make use out of all three bars.

				e.target.appendChild(document.querySelector(`#${icons}`).cloneNode(true));

				// overly complicated stack prevention

			let prevDrop = e.target;
				while (prevDrop !== 0 && !prevDrop.classList.contains("dropZone")) {
				prevDrop = prevDrop.parentNode;
				return false;
			}

			// repeat the sound after it finishes
			
				newSound.play();
		newSound.addEventListener('ended', function() {
    		this.currentTime = 0;
    			this.play();
    		});
		});
	});
})();