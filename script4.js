const places = [
  {id:"white-beach",name:"White Beach",location:"Boracay",category:"beaches",description:"Aklan's most famous shoreline, known for its long stretch of powdery white sand and unforgettable sunsets.",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",best:"Sunset & late afternoon",type:"Beach"},
  {id:"puka-shell-beach",name:"Puka Shell Beach",location:"Boracay",category:"beaches",description:"A quieter Boracay coastline where natural textures, sea breeze, and rocky shores create a more laid-back escape.",image:"https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Beach"},
  {id:"wasak-wasak-beach",name:"Wasak-Wasak Beach",location:"Buruanga",category:"beaches",description:"A less-familiar coastal destination in Buruanga for travelers looking beyond the island's busiest shores.",image:"https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1400&q=85",best:"Early morning",type:"Beach"},
  {id:"aroma-beach",name:"Aroma Beach",location:"Batan",category:"beaches",description:"A coastal stop in Batan that invites you to slow down, take in the sea, and enjoy a quieter side of Aklan.",image:"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85",best:"Late afternoon",type:"Beach"},
  {id:"hinugtan-beach",name:"Hinugtan Beach",location:"Buruanga",category:"beaches",description:"A scenic Buruanga beach framed by natural landscapes — ideal for a peaceful day away from crowded tourist routes.",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Beach"},
  {id:"jawili-beach",name:"Jawili Beach",location:"Tangalan",category:"beaches",description:"A local coastal escape in Tangalan that pairs naturally with the area's famous waterfall.",image:"https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=85",best:"Late afternoon",type:"Beach"},

  {id:"mt-luho",name:"Mt. Luho",location:"Boracay, Malay",category:"mountains",description:"This is Boracay Island’s highest viewpoint. It’s a short paved walk with stairs leading to open viewing decks. From the top you get a full 360 degree view that includes White Beach, Bulabog Beach and the Visayan Sea. Lush green trees and plants line the whole path. There is also a small zoo and ATV or zipline activities nearby.",image:"https://www.shoreexcursions.asia/wp-content/uploads/2017/06/Mount-Luho-Viewpoint.jpg",best:"November to May is the dry season and gives you the clearest skies. You can go from June to October too but go early in the morning because the path can get slippery.",type:"Mountain",difficulty:"Easiest and perfect for absolute beginners. It only takes 15 to 30 minutes to walk up. Anyone can do it and you do not need any special equipment."},
  {id:"ingus-ingus-hills",name:"Ingus-Ingus Hills",location:"Buruanga",category:"mountains",description:"These grassy hills have a history and were once used as lookouts long ago. There is a cave here that comes with local stories and folklore. The open slopes give you views of the Sibuyan Sea and nearby beaches. It is quiet and peaceful and not crowded like other places.",image:"https://scontent.filo1-1.fna.fbcdn.net/v/t39.30808-6/673512543_36049957287937048_2208163873062412012_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx2048x1153&ctp=s2048x1153&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF9dNgMk8OoIgWFADbPboG8oyrla51Y2VajKuVrnVjZVjsZMc-owX-HzW7TpWSw9YLHR3ZaMFkn41vJSfozGXGV&_nc_ohc=e44ab4QpKW0Q7kNvwEY59v_&_nc_oc=Ado2Rg_ncas1kpBo3PcQ2ekbbS-8DRAaOnPAXtf_ue0M82eu8if-pKp46zwSDhbAx18&_nc_zt=23&se=-1&_nc_ht=scontent.filo1-1.fna&_nc_gid=zo_ciWSNgPzQRolaZFSmFA&_nc_ss=7b2a8&oh=00_AQOcOjNIi-at3Vf3-AbNms7jkneBJALgJcyW1k1InBAeyQ&oe=6AD0DE37",best:"November to April is best. The weather is cooler and the ground stays firm. In the wet season the trail becomes slippery and tall grass grows over the path.",type:"Mountain",difficulty:"Easy and great for beginners. It takes 30 to 45 minutes to hike up. The slopes are gentle so it is ideal for casual walkers and people trying hiking for the first time."  },
  {id:"mt-timbahan",name:"Mt. Timbahan",location:"Madalag",category:"mountains",description:"A mountain destination in Madalag for travelers looking for elevation, greenery, and a more adventurous route.",image:"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Mountain"},
  {id:"mt-maylumay",name:"Mt. Maylumay",location:"Madalag",category:"mountains",description:"A scenic Madalag mountain destination surrounded by the province's lush inland landscape.",image:"https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Mountain"},
  {id:"mt-balinsayaw",name:"Mt. Balinsayaw",location:"Pandan",category:"mountains",description:"A Pandan mountain escape for those who want to trade busy roads for fresh air and open views.",image:"https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Mountain"},

  {id:"jawili-falls",name:"Jawili Falls",location:"Tangalan",category:"waterfalls",description:"A multi-tiered waterfall destination in Tangalan, perfect for combining with a coastal day around Jawili.",image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Waterfall"},
  {id:"kipot-falls",name:"Kipot Falls",location:"Malinao",category:"waterfalls",description:"A hidden-feeling waterfall in Malinao surrounded by the lush landscapes of inland Aklan.",image:"https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Waterfall"},
  {id:"nasuraan-falls",name:"Nasuraan Falls",location:"Libacao",category:"waterfalls",description:"A nature-focused destination in Libacao for travelers drawn to river trails and refreshing cascades.",image:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Waterfall"},
  {id:"agtyghangin-falls",name:"Agtyghangin Falls",location:"Madalag",category:"waterfalls",description:"A Madalag waterfall destination surrounded by greenery and the quieter character of inland Aklan.",image:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Waterfall"},
  {id:"suli-falls",name:"Suli Falls",location:"Ibajay",category:"waterfalls",description:"A natural waterfall escape in Ibajay where the journey is part of the adventure.",image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Waterfall"},

  {id:"alejandro melchor's birthplace",name:"Alejandro Melchor's Birthplace",location:"Ibajay",category:"sights-museums",description:"Alejandro Melchor's Birthplace (Ibajay).The place where Alejandro Melchor was born. He was a well-known Filipino engineer and public servant who came from Ibajay. It's a quiet heritage stop for visitors interested in famous Aklanons.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-jXtI2BaCQoYubgXLMLISOsCUXtBkB8LxiAO4Mgn_cj1tk0Y7S4kN3g&s=10",best:"Afternoon",type:"Museum"},
  {id:"aklan freedom shrine",name:"Aklan Freedom Shrine",location:"Kalibo",category:"sights-museums",description:"A monument and mausoleum for the Nineteen Martyrs of Aklan, with a stairway of 19 steps, one for each martyr. It has been a National Historical Shrine since 2019, and it's a good first stop to learn about Aklan's fight for freedom.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJq1I6Wco7XImFHgxNWDgGUSpDtBvRQRPrCj9eBsxNPXxeNQnEGM2ZvdO5&s=10",best:"Afternoon",type:"Sight"},
  {id:"General Ananias Diokno Historical Marker",name:"General Ananias Diokno Historical Marker",location:"Altavas",category:"sights-museums",description:"A marker commemorating General Ananias Diokno and his connection to Altavas during the Philippine Revolution. It's a short stop that is better combined with Altavas's caves and waterfalls.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMubxy1yLUi15dgnl0bNN15Lgju-WiqBVFKb4fFjfcviK3Tlt3so4plY&s=10",best:"Morning",type:"Eco Park"},
  {id:"Candido Iban Monument",name:"Candido Iban Monument",location:"Malinao",category:"sights-museums",description:"A monument honoring Candido Iban, a hero of the Aklan revolution against Spanish rule. It's worth a stop on a trip through Malinao, especially if you like local history..",image:"https://scontent.fklo1-1.fna.fbcdn.net/v/t39.30808-6/500074421_4169258306629218_730441636422653663_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEwXiB0BCyODH4UykwjWt2GtJO30WRI6Om0k7fRZEjo6ff625vpofApukXq5vNlkLDwzp57hdEPvdgcBAWqkWQE&_nc_ohc=Q1MTBa65kQkQ7kNvwHWRcK-&_nc_oc=AdqntiWDns8EpofDwjgH0ehUjnu-d_T3ZZsjWnjekCWtcvLt6_aqpo3jnHRYKrJBbvQ&_nc_zt=23&_nc_ht=scontent.fklo1-1.fna&_nc_gid=DpjQwgSXdyiJ_WKOfiDkkA&_nc_ss=7b2a8&oh=00_AQPvWJfqFqflm6M3cXsSYICMw7AtyhaRQAIOjzVKTv_FJA&oe=6ACC1CD6",best:"Morning",type:"Natural Sight"},
  {id:"Hanging Bridge of Panipiason ",name:"Hanging Bridge of Panipiason ",location:"Madalag",category:"sights-museums",description:"A suspension bridge over a river in Madalag. It's popular for photos and for the view of the countryside around it, and it pairs well with a visit to Liktinon White Rocks nearby.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwes4hyxJlPgeuySTaUFDohjVx2rTu9dr-Mb_gW7mI17wmXfIiEQI6RLg&s=10",best:"Afternoon",type:"Garden"},
  {id:"Jaime L. Sin Monument",name:"Jaime L. Sin Monument",location:"New Washington",category:"sights-museums",description:"A monument to Cardinal Jaime Sin, the late Archbishop of Manila, who was born in New Washington. He is remembered for his role in the 1986 EDSA People Power Revolution. It's close to the Pink Sisters Convent, so the two make an easy pair.",image:"https://pbs.twimg.com/media/D4MBk15U0AEAiAv?format=webp&name=large",best:"Morning",type:"Farm"},

  {id:"bakhawan-ecopark",name:"Bakhawan Ecopark",location:"New Buswang",category:"nature-parks",description:"Walk beneath a canopy of mangroves and experience one of Aklan's best-known examples of community-led coastal restoration.",image:"https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Nature Park"},
  {id:"katunggan-ibajay",name:"Katunggan it Ibajay Mangrove Ecopark",location:"Ibajay",category:"nature-parks",description:"A mangrove-focused destination in Ibajay where the landscape reveals the quiet beauty of coastal ecosystems.",image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Nature Park"},
  {id:"lugutan-mangrove",name:"Lugutan Mangrove Park",location:"Malay",category:"nature-parks",description:"A peaceful mangrove destination in Malay for travelers interested in wetlands, wildlife, and local ecosystems.",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Nature Park"},
  {id:"arge-fruity-flower-farm",name:"ARGE Fruity Flower Farm",location:"Balete",category:"nature-parks",description:"A colorful farm destination in Balete where plants, flowers, and rural scenery create a slower travel experience.",image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Farm"},
  {id:"boracay-wetland",name:"Boracay Wetland Conservation Park",location:"Boracay",category:"nature-parks",description:"A reminder that Boracay's natural story extends beyond its beaches, with wetlands supporting a wider coastal ecosystem.",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",best:"Morning",type:"Conservation Park"}
];

const categoryInfo = {
  beaches:{label:"Beaches",description:"Salt air, open horizons, and coastlines worth slowing down for.",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"},
  mountains:{label:"Mountains",description:"Climb higher, breathe deeper, and see Aklan from another angle.",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"},
  waterfalls:{label:"Waterfalls",description:"Follow the sound of rushing water into the greener side of Aklan.",image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85"},
  "sights-museums":{label:"Sights & Museums",description:"History, culture, art, and unexpected places that tell Aklan's story.",image:"https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1200&q=85"},
  "nature-parks":{label:"Nature Parks",description:"Mangroves, farms, wetlands, and green spaces made for curious explorers.",image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85"}
};

const categoryOrder=["beaches","mountains","waterfalls","sights-museums","nature-parks"];

function card(place){
  return `<a class="destination-card" href="destination.html?place=${place.id}">
    <div class="destination-image" style="background-image:url('${place.image}')"><span class="tag">${categoryInfo[place.category].label.toUpperCase()}</span></div>
    <div class="destination-info"><h3>${place.name}</h3><p>${place.location}</p><span class="arrow">↗</span></div>
  </a>`;
}

function initMenu(){
  const btn=document.getElementById("menuBtn"), nav=document.querySelector(".site-nav");
  if(btn) btn.addEventListener("click",()=>nav.classList.toggle("open"));
}
initMenu();

const categoryGrid=document.getElementById("categoryGrid");
if(categoryGrid){
  categoryGrid.innerHTML=categoryOrder.map((cat,i)=>`<a class="category-card" href="category.html?category=${cat}" style="background-image:url('${categoryInfo[cat].image}')"><div class="cat-content"><span class="number">0${i+1}</span><h3>${categoryInfo[cat].label}</h3><p>${places.filter(p=>p.category===cat).length} destinations →</p></div></a>`).join("");
  document.getElementById("featuredGrid").innerHTML=places.filter(p=>["white-beach","mt-luho","jawili-falls","museo-it-akean","bakhawan-ecopark"].includes(p.id)).map(card).join("");
}

const destinationGrid=document.getElementById("destinationGrid");
if(destinationGrid){
  const params=new URLSearchParams(location.search);
  let selected=params.get("category")||"all";
  const title=document.getElementById("categoryTitle"), desc=document.getElementById("categoryDescription");
  const filterBar=document.getElementById("filterBar");
  filterBar.innerHTML=`<button class="filter-btn ${selected==="all"?"active":""}" data-cat="all">All places</button>`+categoryOrder.map(c=>`<button class="filter-btn ${selected===c?"active":""}" data-cat="${c}">${categoryInfo[c].label}</button>`).join("");
  function render(){
    const q=(document.getElementById("searchInput").value||"").toLowerCase();
    let arr=selected==="all"?places:places.filter(p=>p.category===selected);
    arr=arr.filter(p=>(p.name+" "+p.location+" "+categoryInfo[p.category].label).toLowerCase().includes(q));
    destinationGrid.innerHTML=arr.map(card).join("");
    document.getElementById("resultCount").textContent=`${arr.length} ${arr.length===1?"DESTINATION":"DESTINATIONS"}`;
    if(selected==="all"){title.innerHTML="Every place has<br>a <em>story.</em>";desc.textContent="Browse beaches, mountains, waterfalls, cultural sites, and nature parks across Aklan."}
    else{title.innerHTML=`${categoryInfo[selected].label}<br>for the <em>curious.</em>`;desc.textContent=categoryInfo[selected].description}
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.toggle("active",b.dataset.cat===selected));
  }
  filterBar.addEventListener("click",e=>{if(e.target.classList.contains("filter-btn")){selected=e.target.dataset.cat;history.replaceState(null,"",`category.html?category=${selected}`);render()}});
  document.getElementById("searchInput").addEventListener("input",render);
  render();
}

const destinationPage=document.getElementById("destinationPage");
if(destinationPage){
  const id=new URLSearchParams(location.search).get("place");
  const p=places.find(x=>x.id===id)||places[0];
  document.title=`${p.name} — Aklan Escapes`;
  destinationPage.innerHTML=`
    <section class="detail-hero" style="background-image:url('${p.image}')">
      <div class="detail-content">
        <a class="back-link" href="category.html?category=${p.category}">← Back to ${categoryInfo[p.category].label}</a>
        <p class="detail-category">${categoryInfo[p.category].label.toUpperCase()}</p>
        <h1 class="detail-title">${p.name}</h1>
        <p class="detail-location">📍 ${p.location}, Aklan</p>
      </div>
    </section>
    <section class="section detail-body">
      <div>
        <p class="eyebrow gold">ABOUT THE DESTINATION</p>
        <h2>A place worth<br><em>taking your time.</em></h2>
        <p>${p.description}</p>
        <div class="nearby"><a class="btn btn-outline" href="category.html?category=${p.category}">Discover more ${categoryInfo[p.category].label.toLowerCase()} <span>→</span></a></div>
      </div>
      <aside class="detail-facts">
        <div class="fact"><span>CATEGORY</span><strong>${p.type}</strong></div>
        <div class="fact"><span>LOCATION</span><strong>${p.location}, Aklan</strong></div>
        <div class="fact"><span>BEST SEASON TO GO</span><strong>${p.best}</strong></div>
        <div class="fact"><span>TRAVEL STYLE</span><strong>Nature • Culture • Exploration</strong></div>
        <div class="fact"><span>DIFFICULTY LEVEL</span><strong>${p.difficulty}</strong></div>
      </aside>
    </section>`;
}
