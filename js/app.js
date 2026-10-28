(() => {
"use strict";
/* ============ EDITA AQUÍ ============ */
const WHATSAPP = "56936971350";   // número con código país, sin + ni espacios. Ej: "56912345678"
const INSTAGRAM = "arachilebeauty";  // usuario sin @
const PRODUCTOS = [
  { id:"tocobo-cica", marca:"TOCOBO", nombre:"Cica Calming Sun Serum SPF50+ PA++++ 50 ml", tipo:"Bloqueador solar", precio:18990, badge:"Piel sensible",
    hook:"Protege y calma pieles sensibles o con rojeces.",
    tagline:"Bloqueador en textura sérum con centella asiática: liviano, calmante y perfecto bajo el maquillaje.",
    pk:"tube", colores:["#E9F5EA","#2F6B4F","#2F6B4F"], fondo:"#FFFFFF", imagen:"img/tocobo-cica.webp",
    beneficios:["Protección solar alta para el día a día","Calma la piel sensible o con rojeces","Textura liviana que se absorbe rápido","Funciona bien como base de maquillaje"],
    ingredientes:[["Cica Complex (centella)","Calma la piel y ayuda a reducir el enrojecimiento."],["Ultra HA-G 10 (ácido hialurónico)","Hidrata mientras protege."],["Extracto de aloe ferox","Refresca y calma."],["Filtros UV","Protección alta SPF50+ PA++++ contra rayos UVA y UVB."]],
    uso:["Úsalo como último paso de tu rutina de la mañana.","Aplica una cantidad generosa (el largo de dos dedos) en rostro y cuello.","Reaplica cada 2 a 3 horas si estás al sol."],
    ideal:["Piel sensible","Rojeces","Uso diario"] },
  { id:"skin1004-clay", marca:"SKIN1004", nombre:"Poremizing Quick Clay Stick Mask 27 g", tipo:"Mascarilla de arcilla en barra", precio:19990, badge:"Poros limpios",
    hook:"Mascarilla de arcilla en barra: limpia poros sin ensuciar tus manos.",
    tagline:"Mascarilla de arcilla en barra con centella de Madagascar. Limpia los poros y deja la piel más fresca, suave y luminosa, y se aplica directo, sin ensuciarte las manos.",
    pk:"tub", colores:["#F7C9D3","#E58AA0","#B84A68"], fondo:"#FFFFFF", imagen:"img/skin1004-clay.webp",
    beneficios:["Limpia los poros y elimina impurezas","Ayuda a controlar el exceso de grasa","Deja la piel más fresca, suave y luminosa","Formato en barra: fácil de usar y sin ensuciar las manos"],
    ingredientes:[["Arcilla","Absorbe el exceso de grasa y las impurezas de los poros."],["Centella de Madagascar","Calma la piel mientras la arcilla limpia."]],
    uso:["Con la piel limpia y seca, desliza la barra directo sobre el rostro, evitando ojos y labios.","Deja actuar entre 10 y 15 minutos.","Enjuaga con agua tibia y sigue con tu rutina.","Úsala 1 o 2 veces por semana."],
    ideal:["Piel mixta","Piel grasa","Poros visibles"] },
  /* ---- Pedido Stylevana, septiembre 2026 ---- */
  { id:"cosrx-salicylic", marca:"COSRX", nombre:"Salicylic Acid Daily Gentle Cleanser 150 ml", tipo:"Limpiador facial", precio:14990, badge:"Nuevo", agotado:true,  // agotado:true = se muestra como "Agotado"; bórralo cuando vuelva
    hook:"Limpiador suave con ácido salicílico para piel con granitos.",
    tagline:"Limpiador en gel espuma con ácido salicílico (BHA). Limpia los poros a fondo y ayuda a prevenir granitos, sin resecar la piel.",
    pk:"tube", colores:["#FFFFFF","#3B3B3B","#1C1C1C"], fondo:"#FFFFFF", imagen:"img/cosrx-salicylic.webp",
    beneficios:["Limpia los poros en profundidad","Ayuda a prevenir granitos y puntos negros","Controla el exceso de grasa","Suave para uso diario"],
    ingredientes:[["Ácido salicílico 0,5% (BHA)","Entra en el poro y ayuda a limpiarlo por dentro, retirando impurezas y exceso de grasa."],["Ingredientes botánicos","Hacen que la limpieza sea suave para el uso diario."]],
    uso:["Moja tu rostro con agua tibia.","Haz espuma con una pequeña cantidad entre las manos.","Masajea suavemente por 30 a 60 segundos, evitando los ojos, y enjuaga.","Úsalo de noche o mañana y noche si tu piel lo tolera."],
    ideal:["Granitos","Poros visibles","Piel grasa"] },
  { id:"skin1004-ampoule", marca:"SKIN1004", nombre:"Centella Tone Brightening Capsule Ampoule 100 ml", tipo:"Sérum", precio:24990, badge:"Favorito de Gabriela", agotado:true,
    hook:"Ampolla de centella para un tono más parejo y luminoso.",
    tagline:"Ampolla ligera con centella asiática y cápsulas iluminadoras, para una piel más pareja y luminosa sin irritar.",
    pk:"drop", colores:["#FFF3D6","#D9A233","#8A5A12"], fondo:"#FFFFFF", imagen:"img/skin1004-ampoule.webp",
    beneficios:["Ayuda a emparejar el tono de la piel","Aporta luminosidad","Calma gracias a la centella","Textura ligera que se absorbe rápido"],
    ingredientes:[["Centella pura de Madagascar","Calma y cuida la piel mientras trabaja la luminosidad."],["Niacinamida","Ayuda a emparejar el tono y dar luminosidad."],["Cápsulas iluminadoras","Se deshacen al aplicarlas y ayudan a dar un tono más uniforme."]],
    uso:["Después del tónico, aplica unas gotas en el rostro.","Presiona suavemente con las palmas hasta que se absorba.","Sella con crema y, de día, termina con bloqueador."],
    ideal:["Tono disparejo","Piel apagada","Piel sensible"] },
  { id:"skin1004-sunserum", marca:"SKIN1004", nombre:"Hyalu-Cica Water-Fit Sun Serum SPF50+ 50 ml", tipo:"Bloqueador solar", precio:18990, badge:"Última unidad",
    hook:"Bloqueador acuoso con centella y ácido hialurónico.",
    tagline:"Bloqueador en sérum, ultraliviano y fresco, con centella asiática y ácido hialurónico. No deja rastro blanco.",
    pk:"tube", colores:["#E4F4EF","#1F6F63","#1F6F63"], fondo:"#FFFFFF", imagen:"img/skin1004-sunserum.webp",
    beneficios:["Protección solar alta SPF50+","Textura acuosa y liviana","Hidrata mientras protege","Sin efecto blanco, ideal bajo maquillaje"],
    ingredientes:[["Centella pura de Madagascar","Calma la piel expuesta al sol."],["Ácido hialurónico","Aporta hidratación y sensación fresca."]],
    uso:["Último paso de tu rutina de la mañana.","Aplica una cantidad generosa en rostro y cuello.","Reaplica cada 2 a 3 horas si estás al sol."],
    ideal:["Piel mixta","Piel grasa","Uso diario"] },
  { id:"dermafactory-aquaporin", marca:"DERMA FACTORY", nombre:"Aquaporin Hydrating Cream 70 ml", tipo:"Crema hidratante", precio:12990, badge:null,
    hook:"Crema que hidrata, calma y refresca. Para piel seca, grasa o áspera.",
    tagline:"Crema hidratante de DERMA FACTORY con pH 5.1, cercano al de la piel. Hidrata, retiene la humedad, calma y deja una sensación fresca. Su textura funciona tanto en piel seca como en piel grasa.",
    pk:"tube", colores:["#FFFFFF","#2B55C9","#2B55C9"], fondo:"#FFFFFF", imagen:"img/dermafactory-aquaporin.webp",
    beneficios:["Hidrata en profundidad","Retiene la humedad para que la piel no se reseque","Calma la piel","Deja una sensación fresca, sin pesadez"],
    ingredientes:[["Fórmula hidratante","Pensada para retener agua en la piel y evitar la sensación tirante."],["pH 5.1","Cercano al pH natural de la piel, para cuidarla sin alterarla."],["Fragancia","Contiene aroma. Si tu piel es muy sensible a los perfumes, pruébala primero en una zona pequeña."]],
    uso:["Aplica como último paso de hidratación, mañana y noche.","Extiende una pequeña cantidad con toques suaves.","De día, termina con bloqueador."],
    ideal:["Piel deshidratada","Piel áspera","Uso diario"] },
  { id:"anjo-365", marca:"ANJO", nombre:"365 Sun Cream SPF50+ PA+++ 70 g", tipo:"Bloqueador solar", precio:12990, badge:"Rinde más",
    hook:"Bloqueador de uso diario en formato grande.",
    tagline:"Bloqueador SPF50+ para todos los días del año, en un formato de 70 g que rinde mucho.",
    pk:"tube", colores:["#FFF6D2","#E38B00","#9A5B00"], fondo:"#FFFFFF", imagen:"img/anjo-365.webp",
    beneficios:["Protección solar alta SPF50+ PA+++","Formato grande de 70 g","Para rostro y zonas expuestas","Buena relación precio-cantidad"],
    ingredientes:[["Filtros UVA y UVB","Protección de amplio espectro: cuida de las quemaduras y del envejecimiento por el sol."]],
    uso:["Aplica al final de tu rutina de la mañana.","Usa una cantidad generosa en rostro, cuello y zonas expuestas.","Reaplica cada 2 a 3 horas si estás al sol."],
    ideal:["Uso diario","Toda la familia","Presupuesto cuidado"] },
  { id:"yukazan-patch", marca:"YUKAZAN", nombre:"Acne Healing Patch Day · 30 parches", tipo:"Parches para granitos", precio:4990, badge:"SOS granitos",
    hook:"Parches invisibles para usar de día sobre granitos.",
    tagline:"Parches delgados que cubren el granito, lo protegen de tus manos y ayudan a que se vea menos durante el día.",
    pk:"sachet", colores:["#F7CDBF","#E8473C","#3A2A2A"], fondo:"#FFFFFF", imagen:"img/yukazan-patch.webp",
    beneficios:["Protegen el granito de la suciedad y las manos","Ayudan a absorber lo que sale del granito","Ayudan a reducir el enrojecimiento y las marcas","Transpirables, resistentes al agua e hipoalergénicos"],
    ingredientes:[["Hidrocoloide","Material que absorbe y protege la zona mientras sana."],["Aceite de árbol de té (Australia)","Ayuda a calmar la zona y cuidar la piel con tendencia a granitos."]],
    uso:["Limpia y seca bien la zona.","Pega el parche sobre el granito, sin cremas debajo.","Cámbialo cuando se vea blanco o después de unas horas."],
    ideal:["Granitos","Uso de día","Emergencias"] },
  { id:"petitfee-patch", marca:"PETITFEE", nombre:"Centella Clearing Spot Patch · 23 parches", tipo:"Parches para granitos", precio:3990, badge:"SOS granitos",
    hook:"Parches con centella, árbol de té y ácido salicílico para granitos.",
    tagline:"Parches hidrocoloides translúcidos con fórmula SOS: aceite de árbol de té, ácido salicílico y 3 tipos de extracto de centella. No lo revientes, solo ponle un parche.",
    pk:"sachet", colores:["#FFFFFF","#1F7D6D","#1F7D6D"], fondo:"#FFFFFF", imagen:"img/petitfee-patch.webp",
    beneficios:["Protegen el granito para que no lo toques","Calman la zona y ayudan a secar el granito","Translúcidos y resistentes al agua","23 parches de dos tamaños por sobre"],
    ingredientes:[["Hidrocoloide","Absorbe y protege la zona."],["Aceite de árbol de té","Ayuda a calmar la piel con tendencia a granitos."],["Ácido salicílico","Ayuda a limpiar el poro."],["3 extractos de centella","Calman la piel enrojecida."]],
    uso:["Limpia y seca la zona.","Pega el parche sobre el granito.","Déjalo varias horas o toda la noche y retíralo con cuidado."],
    ideal:["Granitos","Rojeces","Uso de noche"] },
  { id:"prettyskin-hand", marca:"PRETTYSKIN", nombre:"Romantic Perfume Hand Cream Snail 100 ml", tipo:"Crema de manos", precio:3990, badge:"Regalo ideal",
    hook:"Crema de manos perfumada con mucina de caracol.",
    tagline:"Crema de manos con mucina de caracol y un aroma romántico que dura. Perfecta para la cartera o para regalar.",
    pk:"tube", colores:["#F7D98A","#1C1318","#6B4E12"], fondo:"#FFFFFF", imagen:"img/prettyskin-hand.webp",
    beneficios:["Hidrata y suaviza las manos","Aroma perfumado que dura","Tamaño cómodo para llevar","Buena opción para regalar"],
    ingredientes:[["Mucina de caracol","Aporta hidratación y suavidad."]],
    uso:["Aplica sobre las manos limpias y secas.","Masajea hasta que se absorba.","Repite cuando sientas las manos secas."],
    ideal:["Manos secas","Regalo","Uso diario"] },
  { id:"farmstay-collagen", marca:"Farm Stay", nombre:"Visible Difference Mask Sheet · Collagen", tipo:"Mascarilla de tela", precio:1000, badge:"Precio mini",
    hook:"Mascarilla de tela con colágeno para piel firme y suave.",
    tagline:"Mascarilla de tela empapada en esencia con colágeno. Un momento de spa en 20 minutos.",
    pk:"sachet", colores:["#FDEBEC","#C8394A","#8E2231"], fondo:"#FFFFFF", imagen:"img/farmstay-collagen.webp",
    beneficios:["Hidratación intensa en minutos","Deja la piel suave y elástica","Ideal antes de un evento","Precio para probar sin miedo"],
    ingredientes:[["Colágeno","Aporta hidratación y sensación de piel más firme."]],
    uso:["Después de limpiar y tonificar, coloca la mascarilla.","Déjala actuar 15 a 20 minutos.","Retírala y masajea la esencia restante hasta absorberla."],
    ideal:["Piel seca","Piel apagada","Autocuidado"] },
  { id:"farmstay-snail", marca:"Farm Stay", nombre:"Visible Difference Mask Sheet · Snail", tipo:"Mascarilla de tela", precio:1000, badge:"Precio mini",
    hook:"Mascarilla de tela con mucina de caracol reparadora.",
    tagline:"Mascarilla de tela con mucina de caracol, para hidratar y dar confort a la piel cansada.",
    pk:"sachet", colores:["#F1EEE7","#6F5B3E","#5A4930"], fondo:"#FFFFFF", imagen:"img/farmstay-snail.webp",
    beneficios:["Hidrata y da confort","Ayuda a que la piel se vea descansada","Ideal después de un día largo","Precio para probar sin miedo"],
    ingredientes:[["Mucina de caracol","Hidrata y apoya la recuperación de la piel."]],
    uso:["Después de limpiar y tonificar, coloca la mascarilla.","Déjala actuar 15 a 20 minutos.","Retírala y masajea la esencia restante hasta absorberla."],
    ideal:["Piel cansada","Piel seca","Autocuidado"] },
  { id:"farmstay-aloe", marca:"Farm Stay", nombre:"Real Aloe Vera Essence Mask 23 ml", tipo:"Mascarilla de tela", precio:1000, badge:"Precio mini",
    hook:"Mascarilla de tela con aloe vera, fresca y calmante.",
    tagline:"Mascarilla de tela con aloe vera: refresca y calma la piel, ideal después del sol.",
    pk:"sachet", colores:["#EAF7E1","#4E9A2A","#3B7A1E"], fondo:"#FFFFFF", imagen:"img/farmstay-aloe.webp",
    beneficios:["Hidrata y nutre la piel","Refresca y calma, ideal después del sol","Esencia de 23 ml por mascarilla","Precio para probar sin miedo"],
    ingredientes:[["Aloe vera","Refresca, calma e hidrata."]],
    uso:["Después de limpiar, coloca la mascarilla.","Déjala actuar 15 a 20 minutos.","Retírala y masajea la esencia restante."],
    ideal:["Después del sol","Piel acalorada","Todo tipo de piel"] },
  { id:"numbuzin-eye", marca:"numbuzin", nombre:"No.9 NAD+ Collagen Under Eye Patches", tipo:"Contorno de ojos", precio:1000, badge:"Pocas unidades",
    hook:"Parches para ojeras y mirada cansada.",
    tagline:"Parches de hidrogel para el contorno de ojos con colágeno. Refrescan y dan una mirada más descansada.",
    pk:"jar", colores:["#E9EDF8","#2F3E8C","#2F3E8C"], fondo:"#FFFFFF", imagen:"img/numbuzin-eye.webp",
    beneficios:["Refrescan el contorno de ojos","Aportan hidratación en minutos","Mirada con aspecto más descansado","Selfie friendly: puedes usarlos mientras te arreglas"],
    ingredientes:[["NAD+","Activo que se usa para una piel de aspecto más revitalizado."],["Colágeno","Hidrata y da sensación de firmeza."],["50 péptidos","Apoyan la elasticidad del contorno de ojos."]],
    uso:["Con la piel limpia, coloca un parche bajo cada ojo.","Déjalos actuar 15 a 20 minutos.","Retíralos y masajea con suavidad lo que quede."],
    ideal:["Ojeras","Mirada cansada","Antes de un evento"] },
];
const COMBOS = [
  { tag:"SOS granitos", titulo:"Granitos bajo control, de día y de noche", ids:["yukazan-patch","petitfee-patch"],
    texto:"Parches invisibles para el día y parches con centella para dejar toda la noche. El dúo que tienes que tener en el baño." },
  { tag:"Básicos", titulo:"Hidratación + protección diaria", ids:["dermafactory-aquaporin","anjo-365"],
    texto:"La crema Aquaporin hidrata y el bloqueador ANJO 365 protege todos los días. La rutina mínima que tu piel agradece." },
  { tag:"Glow", titulo:"Piel luminosa con centella", ids:["skin1004-ampoule","skin1004-sunserum"],
    texto:"La ampolla de centella empareja el tono y el sun serum lo protege con un acabado fresco y liviano." },
];
const POSTS = [
  { id:"doble-limpieza", titulo:"Doble limpieza: el paso 1 de toda rutina coreana", min:3, color:"#FFD100", simbolo:"1+1", imagen:"img/blog-limpieza.svg",
    productos:["cosrx-salicylic","skin1004-clay"],
    cuerpo:[
      ["p","La doble limpieza es limpiar el rostro en dos etapas, en la noche. La primera retira lo que se disuelve en aceite (bloqueador, maquillaje, sebo) y la segunda retira lo que se disuelve en agua (sudor y suciedad)."],
      ["h","Cómo hacerla"],
      ["ol",["Con la piel seca, masajea un aceite o bálsamo limpiador por un minuto.","Agrega un poco de agua para emulsionar y enjuaga.","Lava con un limpiador suave a base de agua.","Sigue con el resto de tu rutina."]],
      ["h","¿Todos los días?"],
      ["p","Se recomienda sobre todo en la noche, cuando usaste bloqueador o maquillaje. En la mañana basta con una limpieza suave. Una o dos veces por semana puedes sumar una mascarilla de arcilla para ir más profundo en los poros."],
    ]},
  { id:"centella-asiatica", titulo:"Centella asiática: por qué está en todo", min:3, color:"#B9E4C9", simbolo:"cica", imagen:"img/blog-centella.svg",
    productos:["tocobo-cica","skin1004-ampoule","petitfee-patch"],
    cuerpo:[
      ["p","La centella asiática es una planta que se usa hace siglos en Asia. En skincare aparece como “cica” y es famosa por calmar la piel."],
      ["h","Para qué sirve"],
      ["p","Se usa para calmar irritaciones y rojeces, apoyar la recuperación de la barrera cutánea y dar confort a pieles sensibles. Por eso la vas a encontrar en bloqueadores, cremas y hasta mascarillas de arcilla."],
      ["h","¿Para quién?"],
      ["p","Es una de las opciones más amables para pieles sensibles, reactivas o que están pasando por un momento difícil. Como todo producto nuevo, pruébalo primero en una zona pequeña."],
    ]},
  { id:"adn-de-salmon", titulo:"ADN de salmón: qué es el PDRN y qué esperar", min:4, color:"#FF8A65", simbolo:"PDRN", imagen:"img/blog-pdrn.svg",
    productos:[],
    cuerpo:[
      ["p","El PDRN (polidesoxirribonucleótido) es un activo que se obtiene del ADN de salmón. Nació en tratamientos de clínicas estéticas y hoy está en sérums coreanos."],
      ["h","Qué hace en cosmética"],
      ["p","En productos de uso diario se usa para apoyar la recuperación de la piel y mejorar su textura, elasticidad y luminosidad: el famoso efecto piel de cristal."],
      ["h","Qué esperar"],
      ["p","Los resultados de un sérum son graduales y dependen de la constancia. Úsalo después del tónico, sella con crema y no olvides el bloqueador en la mañana."],
    ]},
];
/* ==================================== */
/* ===== Seguridad: valida los datos antes de mostrarlos ===== */
const okId = v => typeof v==="string" && /^[a-z0-9-]{1,60}$/.test(v);
const okColor = v => typeof v==="string" && /^#[0-9a-fA-F]{6}$/.test(v) ? v : "#FFFFFF";
const okImg = v => typeof v==="string" && /^img\/[a-z0-9-]{1,60}\.(webp|png|jpe?g|svg)$/.test(v) ? v : null;
const okNum = v => Number.isFinite(v) && v>=0 ? v : null;
for (let i=PRODUCTOS.length-1;i>=0;i--){ const p=PRODUCTOS[i];
  if(!okId(p.id)){ PRODUCTOS.splice(i,1); continue; }
  p.fondo=okColor(p.fondo); p.colores=(p.colores||[]).map(okColor); p.imagen=okImg(p.imagen); p.precio=okNum(p.precio); }
for (const b of POSTS){ b.color=okColor(b.color); b.min=okNum(b.min)||1; b.imagen=okImg(b.imagen); }
for (let i=POSTS.length-1;i>=0;i--) if(!okId(POSTS[i].id)) POSTS.splice(i,1);
if(!/^\d{8,15}$/.test(WHATSAPP)) throw new Error("Número de WhatsApp inválido");
if(!/^[A-Za-z0-9._]{1,30}$/.test(INSTAGRAM)) throw new Error("Usuario de Instagram inválido");

// Qué necesidad resuelve cada producto (para los filtros)
const NECESIDADES = {
  "tocobo-cica":["Protección solar","Calmar rojeces"],
  "skin1004-clay":["Poros y grasa"],
  "skin1004-ampoule":["Glow","Calmar rojeces"],
  "skin1004-sunserum":["Protección solar","Hidratación"],
  "dermafactory-aquaporin":["Hidratación","Calmar rojeces"],
  "anjo-365":["Protección solar"],
  "yukazan-patch":["Granitos"],
  "petitfee-patch":["Granitos","Calmar rojeces"],
  "prettyskin-hand":["Cuerpo y manos"],
  "farmstay-collagen":["Hidratación","Glow"],
  "farmstay-snail":["Hidratación","Reparar barrera"],
  "farmstay-aloe":["Calmar rojeces","Hidratación"],
  "numbuzin-eye":["Ojeras"],
  "cosrx-salicylic":["Granitos","Poros y grasa"],
};
const PRECIO_MINI = 5000; // filtro "Hasta $5.000"
// Tipo de piel y momento de uso de cada producto (se muestran en la ficha y en la vitrina)
const PIEL = {
  "tocobo-cica":["Sensible","Con rojeces","Todo tipo"],
  "skin1004-clay":["Grasa","Mixta"],
  "skin1004-ampoule":["Todo tipo","Sensible"],
  "skin1004-sunserum":["Mixta","Grasa","Normal"],
  "dermafactory-aquaporin":["Seca","Grasa","Áspera"],
  "anjo-365":["Todo tipo"],
  "yukazan-patch":["Grasa","Mixta","Con granitos"],
  "petitfee-patch":["Con granitos","Sensible"],
  "prettyskin-hand":["Manos secas"],
  "farmstay-collagen":["Seca","Normal"],
  "farmstay-snail":["Seca","Sensible"],
  "farmstay-aloe":["Todo tipo","Sensible"],
  "numbuzin-eye":["Todo tipo"],
  "cosrx-salicylic":["Grasa","Mixta","Con granitos"],
};
const CUANDO = {
  "tocobo-cica":"En la mañana, último paso",
  "skin1004-clay":"1 o 2 veces por semana",
  "skin1004-ampoule":"Mañana y noche, después del tónico",
  "skin1004-sunserum":"En la mañana, último paso",
  "dermafactory-aquaporin":"Mañana y noche",
  "anjo-365":"En la mañana, último paso",
  "yukazan-patch":"De día, sobre el granito",
  "petitfee-patch":"De noche, sobre el granito",
  "prettyskin-hand":"Cuando sientas las manos secas",
  "farmstay-collagen":"2 o 3 veces por semana",
  "farmstay-snail":"2 o 3 veces por semana",
  "farmstay-aloe":"2 o 3 veces por semana o después del sol",
  "numbuzin-eye":"Antes de maquillarte o de un evento",
  "cosrx-salicylic":"Noche, o mañana y noche",
};

const $ = s => document.querySelector(s);
const CLP = new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0});
const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const byId = id => PRODUCTOS.find(p=>p.id===id);
const wa = t => WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}` : `https://wa.me/?text=${encodeURIComponent(t)}`;
const priceHTML = p => p.precio!=null ? `<div class="price num">${CLP.format(p.precio)}</div>` : `<div class="price ask">Precio por WhatsApp</div>`;
const pedir = p => p.agotado ? `Hola Ara! ¿Me avisas cuando vuelva a llegar ${p.marca} ${p.nombre}?` : `Hola Ara! Quiero pedir ${p.marca} ${p.nombre}${p.precio!=null?` (${CLP.format(p.precio)})`:""}. ¿Tienes stock?`;
const badgeHTML = p => p.agotado ? `<span class="badge out">Agotado</span>` : p.badge ? `<span class="badge">${esc(p.badge)}</span>` : "";
const pack = (p,extra="") => p.imagen
  ? `<img class="ph" src="${esc(p.imagen)}" alt="${esc(p.marca+" "+p.nombre)}" loading="lazy">`
  : `<div class="pk ${p.pk}" style="--c1:${p.colores[0]};--c2:${p.colores[1]};--c3:${p.colores[2]};${extra}"><span class="lbl">${esc(p.marca)}</span></div>`;
function bindWa(root=document){ root.querySelectorAll("[data-wa]").forEach(a=>a.href=wa(a.dataset.wa)); }
if(INSTAGRAM) $("#igLink").href=`https://www.instagram.com/${INSTAGRAM}/`;

/* home */
const NUEVOS = ["cosrx-salicylic","tocobo-cica","skin1004-clay","skin1004-ampoule","skin1004-sunserum","dermafactory-aquaporin","anjo-365","yukazan-patch","petitfee-patch","prettyskin-hand","farmstay-collagen","farmstay-snail","farmstay-aloe","numbuzin-eye"];
PRODUCTOS.sort((a,b)=>((a.agotado?2:0)+(NUEVOS.includes(a.id)?0:1))-((b.agotado?2:0)+(NUEVOS.includes(b.id)?0:1)));
const MINI = "Hasta $5.000", NUEVO = "Recién llegados";
const FILTROS = ["Todos", ...new Set(Object.values(NECESIDADES).flat()), MINI];
let filtro = "Todos";
const inF = (p,f) => f==="Todos" || (f===NUEVO ? NUEVOS.includes(p.id) : f===MINI ? p.precio!=null && p.precio<=PRECIO_MINI : (NECESIDADES[p.id]||[]).includes(f));
const match = p => inF(p,filtro);
function renderChips(){
  $("#chips").innerHTML = FILTROS.map(f=>{ const n = PRODUCTOS.filter(p=>inF(p,f)).length;
    return `<button class="chip" aria-pressed="${f===filtro}" data-f="${esc(f)}">${esc(f)} <small>${n}</small></button>`; }).join("");
}
function renderGrid(){
  const list = PRODUCTOS.filter(match);
  $("#count").textContent = filtro==="Todos" ? `${list.filter(p=>!p.agotado).length} productos en stock` : filtro===NUEVO ? `${list.length} productos recién llegados de Corea` : filtro===MINI ? `${list.length} productos de hasta ${CLP.format(PRECIO_MINI)}` : `${list.length} ${list.length===1?"producto":"productos"} para ${filtro.toLowerCase()}`;
  $("#grid").innerHTML = list.map(p=>`
  <article class="card">
    <a class="open" href="#producto-${p.id}">
      <div class="shot${p.agotado?" out":""}" style="--bgc:${p.fondo}">${badgeHTML(p)}${pack(p)}</div>
      <div class="txt"><span class="brand">${esc(p.marca)} · ${esc(p.tipo)}</span><h3>${esc(p.nombre)}</h3><p class="hook">${esc(p.hook)}</p><p class="skinline">Piel: ${esc((PIEL[p.id]||["Todo tipo"]).slice(0,2).join(", ").toLowerCase())}</p>${priceHTML(p)}</div>
    </a>
    <div class="buy"><a class="btn soft sm block" data-wa="${esc(pedir(p))}" target="_blank" rel="noopener noreferrer" aria-label="${p.agotado?"Avisarme cuando llegue":"Pedir"} ${esc(p.marca+" "+p.nombre)} por WhatsApp">${p.agotado?"Avisarme cuando llegue":"Pedir por WhatsApp"}</a></div>
  </article>`).join("");
  bindWa($("#grid"));
}
$("#chips").addEventListener("click",e=>{ const b=e.target.closest(".chip"); if(!b) return; filtro=b.dataset.f; renderChips(); renderGrid(); });
renderChips(); renderGrid();
$("#combosList").innerHTML = COMBOS.filter(c=>c.ids.every(id=>{const p=byId(id);return p&&!p.agotado;})).map(c=>{ const [a,b]=c.ids.map(byId); return `
  <article class="combo">
    <div class="duo">${pack(a)}<span class="plus" aria-hidden="true">+</span>${pack(b)}</div>
    <span class="tag">${esc(c.tag)}</span>
    <h3>${esc(c.titulo)}</h3>
    <p class="items">${esc(a.marca+" "+a.nombre)} + ${esc(b.marca+" "+b.nombre)}</p>
    <p>${esc(c.texto)}</p>
    <a class="btn fx block" data-wa="${esc(`Hola Ara! Quiero el dúo "${c.titulo}": ${a.marca} ${a.nombre} + ${b.marca} ${b.nombre}. ¿Tienes stock?`)}" target="_blank" rel="noopener noreferrer">Pedir el dúo por WhatsApp</a>
  </article>`; }).join("");
$("#postsList").innerHTML = POSTS.map(b=>`
  <a class="post" href="#blog-${b.id}">
    <div class="art" style="background:${b.color}">${b.imagen?`<img class="ph" src="${esc(b.imagen)}" alt="" loading="lazy">`:esc(b.simbolo)}</div>
    <div class="pt"><small>${b.min} min de lectura</small><h3>${esc(b.titulo)}</h3></div>
  </a>`).join("");


/* product view */
function renderProduct(p){
  const rel = COMBOS.find(c=>c.ids.includes(p.id));
  const partner = rel ? byId(rel.ids.find(i=>i!==p.id)) : null;
  $("#v-product").innerHTML = `
    <a class="back" href="#favoritos">← Volver al catálogo</a>
    <div class="pd">
      <div class="shot${p.agotado?" out":""}" style="--bgc:${p.fondo}">${badgeHTML(p)}${pack(p)}</div>
      <div>
        <span class="eyebrow">${esc(p.marca)} · ${esc(p.tipo)}</span>
        <h1 style="margin-top:8px">${esc(p.nombre)}</h1>
        ${priceHTML(p)}
        <div class="glance" aria-label="Resumen">
          <div><small>Para qué sirve</small><b>${esc(p.hook)}</b></div>
          <div><small>Tipo de piel</small><b>${esc((PIEL[p.id]||["Todo tipo"]).join(", "))}</b></div>
          <div><small>Cuándo usar</small><b>${esc(CUANDO[p.id]||"")}</b></div>
        </div>
        <div class="acc-wrap">
          <details class="acc" open><summary>Descripción</summary><div class="in"><p class="desc-l">${esc(p.tagline)}</p></div></details>
          <details class="acc" open><summary>Para qué sirve</summary><div class="in"><ul class="checks">${p.beneficios.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></details>
          <details class="acc" open><summary>Cómo se usa</summary><div class="in"><ol class="steps">${p.uso.map(x=>`<li><span>${esc(x)}</span></li>`).join("")}</ol></div></details>
          <details class="acc" open><summary>Para qué tipo de piel</summary><div class="in"><div class="ideal">${(PIEL[p.id]||["Todo tipo"]).map(x=>`<span class="skin">${esc(x)}</span>`).join("")}</div><p class="fine" style="margin-top:10px">También ideal para: ${esc(p.ideal.join(", ").toLowerCase())}.</p></div></details>
          <details class="acc"><summary>Ingredientes clave</summary><div class="in"><div class="ingr">${p.ingredientes.map(([n,d])=>`<div><b>${esc(n)}</b><span>${esc(d)}</span></div>`).join("")}</div></div></details>
        </div>
        ${partner?`<div class="block"><h2>Combínalo con</h2><a class="post" href="#producto-${partner.id}" style="grid-template-columns:84px 1fr"><div class="art" style="background:${partner.fondo};font-size:9px">${pack(partner)}</div><div><small>${esc(partner.marca)}</small><h3>${esc(partner.nombre)}</h3></div></a></div>`:""}
      </div>
    </div>`;
  $("#buybar").innerHTML = `<div class="in"><div class="p"><small>${esc(p.marca)}</small><b>${p.agotado?"Agotado":p.precio!=null?CLP.format(p.precio):"Consulta el precio"}</b></div><a class="btn fx block" data-wa="${esc(pedir(p))}" target="_blank" rel="noopener noreferrer">${p.agotado?"Avisarme cuando llegue":"Pedir por WhatsApp"}</a></div>`;
  bindWa($("#v-product")); bindWa($("#buybar"));
}

/* article view */
function renderArticle(b){
  const body = b.cuerpo.map(([t,v])=> t==="h"?`<h2>${esc(v)}</h2>` : t==="ol"?`<ol>${v.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>` : `<p>${esc(v)}</p>`).join("");
  const prods = b.productos.map(byId).filter(p=>p&&!p.agotado);
  $("#v-article").innerHTML = `
    <div class="article">
      <a class="back" href="#comunidad">← Volver a Comunidad</a>
      <span class="eyebrow" style="display:block">Comunidad Ara · ${b.min} min</span>
      <h1>${esc(b.titulo)}</h1>
      <div class="art" style="background:${b.color}">${b.imagen?`<img class="ph" src="${esc(b.imagen)}" alt="" loading="lazy">`:esc(b.simbolo)}</div>
      <div class="body">${body}</div>
      <div class="callout"><h2 style="font-size:1.2rem">${prods.length?"Para probarlo":"¿Quieres saber qué va con tu piel?"}</h2>
        ${prods.map(p=>`<a class="post" href="#producto-${p.id}" style="grid-template-columns:72px 1fr"><div class="art" style="background:${p.fondo};font-size:8px">${pack(p)}</div><div><small>${esc(p.marca)}</small><h3>${esc(p.nombre)}</h3></div></a>`).join("")}
        <a class="btn line block" href="#test">Hacer test de piel</a>
        <a class="btn fx block" data-wa="${esc(`Hola Ara! Leí "${b.titulo}" y quiero una recomendación para mi piel.`)}" target="_blank" rel="noopener noreferrer">Escríbeme por WhatsApp</a>
      </div>
    </div>`;
  bindWa($("#v-article"));
}

/* test de piel */
const PREGUNTAS = [
  { k:"piel", t:"¿Cómo es tu piel durante el día?", help:"Piensa en cómo se siente unas horas después de lavarla.",
    o:[["grasa","Grasa","Brilla en todo el rostro"],["mixta","Mixta","Brilla en la zona T, seca en mejillas"],["seca","Seca","Se siente tirante o descamada"],["normal","Normal","Sin brillo ni tirantez marcada"]] },
  { k:"foco", t:"¿Qué te gustaría mejorar primero?", help:"Elige lo que más te importa hoy.",
    o:[["rojeces","Rojeces o sensibilidad","Se irrita o enrojece fácil"],["poros","Poros y brillo","Poros visibles o exceso de grasa"],["hidra","Deshidratación","Falta de agua y luminosidad"],["barrera","Piel dañada","Ardor o irritación tras productos o exfoliar"],["glow","Piel apagada","Textura irregular, quieres efecto glow"],["granitos","Granitos","Me salen granitos de vez en cuando"]] },
  { k:"spf", t:"¿Usas bloqueador todos los días?", help:"Es el paso más importante de cualquier rutina.",
    o:[["si","Sí, siempre",""],["aveces","A veces","Sobre todo cuando hay sol"],["no","Casi nunca",""]] },
  { k:"rutina", t:"¿Cómo es tu rutina hoy?", help:"",
    o:[["cero","Estoy partiendo","Solo me lavo la cara"],["basica","Básica","Limpiador y crema"],["completa","Completa","Uso sérum, tónico o mascarillas"]] },
];
const LBL = Object.fromEntries(PREGUNTAS.map(q=>[q.k,Object.fromEntries(q.o.map(o=>[o[0],o[1]]))]));
let qi=0, ans={};
function recomendar(a){
  const sensible = a.foco==="rojeces"||a.foco==="barrera";
  const grasa = a.piel==="grasa"||a.piel==="mixta";
  const sol = sensible ? "tocobo-cica" : grasa||a.foco==="poros"||a.foco==="granitos" ? "skin1004-sunserum" : "anjo-365";
  const manana=[], noche=[], semanal=[];
  if(a.foco==="glow"||a.foco==="rojeces") manana.push("skin1004-ampoule");
  if(a.piel==="seca"||a.foco==="hidra") manana.push("dermafactory-aquaporin");
  manana.push(sol);
  if(a.foco==="granitos") manana.splice(manana.length-1,0,"yukazan-patch");
  if(!sensible && (a.foco==="granitos"||a.foco==="poros"||a.piel==="grasa")) noche.push("cosrx-salicylic");
  if(a.foco==="glow") noche.push("skin1004-ampoule");
  if(sensible) noche.push("dermafactory-aquaporin");
  else if(a.piel==="seca"||a.piel==="normal"||a.foco==="hidra") noche.push("dermafactory-aquaporin");
  if(a.foco==="granitos") noche.push("petitfee-patch");
  if(a.foco==="poros"||grasa) semanal.push("skin1004-clay");
  semanal.push(sensible||a.foco==="granitos" ? "farmstay-aloe" : a.piel==="seca"||a.foco==="hidra" ? "farmstay-snail" : "farmstay-collagen");
  const tip = a.spf!=="si" ? ["Tu primer paso: bloqueador todos los días, incluso nublado. Sin eso, ningún otro producto rinde igual.", null]
    : a.foco==="granitos" ? ["No revientes los granitos: el parche los protege y evita que quede marca.","centella-asiatica"]
    : a.foco==="rojeces"||a.foco==="barrera" ? ["La centella asiática es tu aliada: calma y ayuda a recuperar la piel.","centella-asiatica"]
    : a.foco==="glow" ? ["El glow llega con constancia: ampolla mañana y noche, y bloqueador todos los días.","centella-asiatica"]
    : ["Si usas bloqueador o maquillaje, la doble limpieza de noche cambia el juego.","doble-limpieza"];
  const hay = id => { const p=byId(id); return p && !p.agotado; };
  return {manana:[...new Set(manana)].filter(hay), noche:[...new Set(noche)].filter(hay), semanal:semanal.filter(hay), tip};
}
const rprod = (id,nota) => { const p=byId(id); return `<a class="rprod" href="#producto-${p.id}"><div class="art" style="background:${p.fondo}">${pack(p)}</div><div><small>${esc(p.marca)}</small><h3>${esc(p.nombre)}</h3><p>${esc(nota||p.hook)}</p></div></a>`; };
function renderTest(){
  const v=$("#v-test");
  if(qi<PREGUNTAS.length){
    const q=PREGUNTAS[qi], sel=ans[q.k];
    v.innerHTML = `<div class="quiz">
      <div class="qtop"><a class="back" href="#inicio" style="padding:0">← Salir</a><span class="qstep">Pregunta ${qi+1} de ${PREGUNTAS.length}</span></div>
      <div class="qprog" role="progressbar" aria-valuemin="0" aria-valuemax="${PREGUNTAS.length}" aria-valuenow="${qi}"><i style="width:${qi/PREGUNTAS.length*100}%"></i></div>
      <div class="qhost"><img src="img/gato-cientifico.webp" alt="" width="424" height="520"><p class="bubble">${["¡Hola! Soy la doctora Ara. Vamos a conocer tu piel.","Mmm… interesante. Sigamos.","Ya casi termino mi análisis…","¡Última pregunta!"][qi]||""}</p></div>
      <h1>${esc(q.t)}</h1>${q.help?`<p class="help">${esc(q.help)}</p>`:""}
      <div class="opts" role="group" aria-label="${esc(q.t)}">${q.o.map(([val,l,d])=>`<button class="opt" data-v="${val}" aria-pressed="${sel===val}"><div><b>${esc(l)}</b>${d?`<span>${esc(d)}</span>`:""}</div></button>`).join("")}</div>
      <div class="qnav"><button class="btn line" id="qBack" ${qi===0?"disabled":""}>Atrás</button><button class="btn fx" id="qNext" ${sel?"":"disabled"}>${qi===PREGUNTAS.length-1?"Ver mi rutina":"Siguiente"}</button></div>
    </div>`;
    v.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ ans[q.k]=b.dataset.v; qi++; renderTest(); window.scrollTo(0,0); });
    $("#qBack").onclick=()=>{ qi=Math.max(0,qi-1); renderTest(); };
    $("#qNext").onclick=()=>{ if(ans[q.k]){ qi++; renderTest(); window.scrollTo(0,0);} };
    return;
  }
  const r=recomendar(ans);
  const all=[...new Set([...r.manana,...r.noche,...r.semanal])];
  const nombres = all.map(id=>{const p=byId(id); return `${p.marca} ${p.nombre}`;});
  const msg = `Hola Ara! Hice el test de piel en tu web.\nPiel: ${LBL.piel[ans.piel]}\nQuiero mejorar: ${LBL.foco[ans.foco]}\nBloqueador: ${LBL.spf[ans.spf]}\nRutina: ${LBL.rutina[ans.rutina]}\nMe recomendó: ${nombres.join(" + ")}.\n¿Me ayudas a armarla?`;
  const post = r.tip[1] && POSTS.find(b=>b.id===r.tip[1]);
  v.innerHTML = `<div class="quiz res">
    <div class="qtop"><a class="back" href="#inicio" style="padding:0">← Inicio</a><button class="btn line sm" id="qAgain">Repetir test</button></div>
    <div class="qprog"><i style="width:100%"></i></div>
    <div class="qhost"><img src="img/gato-feliz.webp" alt="" width="421" height="520"><p class="bubble">¡Listo! Analicé tu piel y te armé esta rutina.</p></div>
    <span class="eyebrow">Tu resultado</span>
    <h1>Tu rutina Ara está lista</h1>
    <div class="who"><span>Piel ${esc(LBL.piel[ans.piel].toLowerCase())}</span><span>${esc(LBL.foco[ans.foco])}</span><span>Bloqueador: ${esc(LBL.spf[ans.spf].toLowerCase())}</span></div>
    <div class="moment"><h2><i>Mañana</i></h2>${r.manana.map(id=>rprod(id, id===r.manana[r.manana.length-1]?"Último paso, todos los días.":null)).join("")}</div>
    ${r.noche.length?`<div class="moment"><h2><i>Noche</i></h2>${r.noche.map(id=>rprod(id)).join("")}</div>`:""}
    ${r.semanal.length?`<div class="moment"><h2><i>1 a 3 veces por semana</i></h2>${r.semanal.map(id=>rprod(id, id==="skin1004-clay"?"Para limpiar poros a fondo, antes de tu rutina de noche.":null)).join("")}</div>`:""}
    <p class="tip">${esc(r.tip[0])}${post?` <a href="#blog-${post.id}">Lee: ${esc(post.titulo)}</a>`:""}</p>
    <a class="btn fx block" data-wa="${esc(msg)}" target="_blank" rel="noopener noreferrer">Enviar mi resultado por WhatsApp</a>
    <p class="fine">Es una orientación general, no un diagnóstico. Si tienes una condición de la piel, consulta con un dermatólogo.</p>
  </div>`;
  $("#qAgain").onclick=()=>{ qi=0; ans={}; renderTest(); };
  bindWa(v);
}

/* router (plain #tokens only) */
function route(){
  const h = location.hash.slice(1);
  let view="home";
  if(h.startsWith("producto-") && byId(h.slice(9))){ renderProduct(byId(h.slice(9))); view="product"; }
  else if(h.startsWith("blog-") && POSTS.find(b=>b.id===h.slice(5))){ renderArticle(POSTS.find(b=>b.id===h.slice(5))); view="article"; }
  else if(h==="test"){ renderTest(); view="test"; }
  else if(h==="nosotros"){ view="about"; }
  const prev = document.querySelector(".view:not([hidden])")?.id;
  $("#v-home").hidden = view!=="home"; $("#v-product").hidden = view!=="product"; $("#v-article").hidden = view!=="article"; $("#v-test").hidden = view!=="test"; $("#v-about").hidden = view!=="about";
  document.body.classList.toggle("pdp", view==="product");
  $("#buybar").hidden = view!=="product";
  const tab = view==="product" ? "favoritos" : view==="article" ? "comunidad" : view==="test" ? "test" : (["favoritos","comunidad"].includes(h) ? h : "inicio");
  document.querySelectorAll(".tabbar a[data-tab]").forEach(a=>{ if(a.dataset.tab===tab) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  if(view!=="home") window.scrollTo(0,0);
  else if(prev!=="v-home"){ const t=h&&document.getElementById(h); if(t) t.scrollIntoView(); else window.scrollTo(0,0); }
}
window.addEventListener("hashchange",route);
bindWa(); route();
})();
