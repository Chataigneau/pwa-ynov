//import { response } from "express";

window.onload = function () {
	Promise.resolve(imagePaths).then(resImagePaths => {
			resImagePaths.forEach((imagePath, index) => {
				const aElement = document.createElement("a");

				aElement.classList.add("full");
				aElement.classList.add("progressive");
				aElement.classList.add("replace");

				aElement.setAttribute("href", imagePath);

				const tinyImagePath = tinyImagesPaths.filter(
					tinyPath => {
						const splittedImagePath = imagePath.split('/');
						const imageName = splittedImagePath[splittedImagePath.length - 1];
						return tinyPath.includes(imageName);
					}
				);

				aElement.innerHTML = `<img src="${tinyImagePath[0]}" class="preview" loading="lazy" width="20" height="15" alt="preview"/>`

				const likeButton = document.createElement('button');
				likeButton.innerHTML = '♡';
				likeButton.classList.add("img");
				likeButton.setAttribute("id", `${tinyImagePath[0]}`);
				likeButton.setAttribute("test", "test");


				const galleryImage = document.createElement('div');
				galleryImage.classList.add("gallery-image")
				const imgHolder = document.createElement('div');
				imgHolder.classList.add("img-holder");
				
				imgHolder.append(aElement);
				imgHolder.append(likeButton);

				galleryImage.append(imgHolder);

				document.getElementById("gallery").appendChild(galleryImage);

				let like = document.getElementById(`${tinyImagePath[0]}`);

				like.addEventListener("click", () =>{
					fetch("localhost:3000/favorite" + `${tinyImagePath[0]}` )
					.then((response) => console.log(response))
				})
			})
		})
		.catch(err => {
			const messageElement = document.createElement("p");
			messageElement.innerText = err;
			document.getElementById("gallery").appendChild(messageElement)
	})
};