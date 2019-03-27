(() => {

	
	let iconHolder = document.querySelector("#iconsBox"),
		 dropZones = document.querySelectorAll('.dropZone'),
		 audio = document.querySelectorAll('audio'),
		 dropZoneTop = document.querySelector("#div1"),
		 dropZoneMiddle = document.querySelector("#div2"),
		 dropZoneBottom = document.querySelector("#div3");
		
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
			console.log(`${icons} was dropped`);
			let newSound = document.createElement("audio");
				newSound.src = `assets/sounds/${icons}.wav`;

				e.target.appendChild(document.querySelector(`#${icons}`).cloneNode(true));

			let prevDrop = e.target;
				while (prevDrop !== 0 && !prevDrop.classList.contains("dropZone")) {
				prevDrop = prevDrop.parentNode;
				return false;
			}

				newSound.play();
		newSound.addEventListener('ended', function() {
    		this.currentTime = 0;
    			this.play();
    		});
		});
	});
})();