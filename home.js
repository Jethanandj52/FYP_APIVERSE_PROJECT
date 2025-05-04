 

 window.apis = function apis() {
     document.getElementById("home").style.display = "block"
     document.getElementById("doc").style.display = 'none'
     document.getElementById("team").style.display = "none"
     document.getElementById("about").style.display = "none"
     document.getElementById("contact").style.display = "none"
     document.getElementById("weatherAPI").style.display="none"
     document.getElementById("newsAPI").style.display="none"
     document.getElementById("paymentAPI").style.display="none"
     document.getElementById("communicationAPI").style.display="none"
     document.getElementById("entertainmentAPI").style.display="none"
     document.getElementById("developmentAPI").style.display="none"
     document.getElementById("geoLocationAPI").style.display="none"
     document.getElementById("allAPI").style.display="none"
    
 }

 window.doc = function doc() {
     document.getElementById("doc").style.display = ' block'
     document.getElementById("home").style.display = "none"
     document.getElementById("team").style.display = "none"
     document.getElementById("about").style.display = "none"
     document.getElementById("contact").style.display = "none"

     document.getElementById("weatherAPI").style.display="none"
     document.getElementById("newsAPI").style.display="none"

     document.getElementById("paymentAPI").style.display="none"

     document.getElementById("communicationAPI").style.display="none"

     document.getElementById("entertainmentAPI").style.display="none"

     document.getElementById("developmentAPI").style.display="none"

     document.getElementById("geoLocationAPI").style.display="none"
     document.getElementById("allAPI").style.display="none"
    
 }

 window.team = function team() {
     document.getElementById("doc").style.display = 'none'
     document.getElementById("home").style.display = "none"
     document.getElementById("team").style.display = "block"
     document.getElementById("about").style.display = "none"
     document.getElementById("contact").style.display = "none"

     document.getElementById("weatherAPI").style.display="none"
     document.getElementById("newsAPI").style.display="none"

     document.getElementById("paymentAPI").style.display="none"

     document.getElementById("communicationAPI").style.display="none"

     document.getElementById("entertainmentAPI").style.display="none"

     document.getElementById("developmentAPI").style.display="none"

     document.getElementById("geoLocationAPI").style.display="none"
     document.getElementById("allAPI").style.display="none"
    



 }


 window.information = function information() {
     document.getElementById("doc").style.display = 'none'
     document.getElementById("home").style.display = "none"
     document.getElementById("team").style.display = "none"
     document.getElementById("about").style.display = "block"
     document.getElementById("contact").style.display = "none"

     document.getElementById("weatherAPI").style.display="none"
     document.getElementById("newsAPI").style.display="none"

     document.getElementById("paymentAPI").style.display="none"

     document.getElementById("communicationAPI").style.display="none"

     document.getElementById("entertainmentAPI").style.display="none"

     document.getElementById("developmentAPI").style.display="none"

     document.getElementById("geoLocationAPI").style.display="none"
     document.getElementById("allAPI").style.display="none"
    



 }

 window.contact = function contact() {
     document.getElementById("doc").style.display = 'none'
     document.getElementById("home").style.display = "none"
     document.getElementById("team").style.display = "none"
     document.getElementById("about").style.display = "none"
     document.getElementById("contact").style.display = "block"
     document.getElementById("weatherAPI").style.display="none"
     document.getElementById("newsAPI").style.display="none"

     document.getElementById("paymentAPI").style.display="none"

     document.getElementById("communicationAPI").style.display="none"

     document.getElementById("entertainmentAPI").style.display="none"

     document.getElementById("developmentAPI").style.display="none"
     document.getElementById("geoLocationAPI").style.display="none"
     document.getElementById("allAPI").style.display="none"
    


 }
 
 
 async function fetchData() {
     const apisCollection = collection(db, "apis");
     const querySnapshot = await getDocs(apisCollection);
     const container = document.getElementById("apiHomeCardContainer");
     const countDiv = document.getElementById("apiCountDiv"); // <-- Count div

     container.innerHTML = ""; // Clear the container

     // Show total count
     countDiv.innerText = ` ${querySnapshot.size}`;

     querySnapshot.forEach((doc) => {
         const data = doc.data();
         const apiCard = document.createElement("div");
         apiCard.className = "apiCard";
         apiCard.setAttribute('data-api-id', doc.id);
         apiCard.innerHTML = `
            <div class="cardHeader">
                <h2>${data.name}</h2>
                <i class="fa fa-trash delete-icon" onclick="deleteAPI('${doc.id}', '${data.name}')" title="Delete API"></i>
            </div>
            <p>${data.description}</p>
            <p><b>Languages: </b>${data.language.join(', ')}</p>
            <p><b>Security: </b>${data.security}</p>
            <p><b>License: </b>${data.license}</p>
            <div class="veiwBtn">
                <button onclick="viewDocumentation('${doc.id}')" class="edit-btn">View Doc</button>
                <button onclick="viewIntegration('${doc.id}')" class="edit-btn integrate-btn">Integration</button>
            </div>
        `;
         container.appendChild(apiCard);
     });
 }