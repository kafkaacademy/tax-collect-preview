

export function createSource(parent, x, y, width, height, tekst, font_size, dialogText) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    addTextToSvg(parent, "kafkaSource", tekst, x, y, width, height, font_size, dialogText);
}

export function createStreamingApp(parent, x, y, width, height, tekst, font_size, dialogText) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    addTextToSvg(parent, "kafkaStreamingApp", tekst, x, y, width, height, font_size, dialogText);
}

function addToList(att, x, y) {
    return att.concat("," + x + "," + y);
}

export function arrow(parent, xA, yA, schachtLengte, lengte, balkDikte, pijlBreedte, hoekPijl) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.classList = ['arrow_polygon'];
    parent.appendChild(polygon);
    const sin = Math.sin(hoekPijl * (Math.PI / 180));
    const cos = Math.cos(hoekPijl * (Math.PI / 180));
    const xB = xA - balkDikte * sin;
    const yB = yA - balkDikte * cos;

    const xC = xB + schachtLengte * cos;
    const yC = yB - schachtLengte * sin;

    const xD = xC - (pijlBreedte - balkDikte) * sin;
    const yD = yC - (pijlBreedte - balkDikte) * cos;

    const xE = xA + cos * (lengte);
    const yE = yA - sin * (lengte);

    const xH = xA + balkDikte * sin;
    const yH = yA + balkDikte * cos;

    const xG = xH + schachtLengte * cos;
    const yG = yH - schachtLengte * sin;

    const xF = xG + (pijlBreedte - balkDikte) * sin;
    const yF = yG + (pijlBreedte - balkDikte) * cos;

    let att = xA + "," + yA;
    att = addToList(att, xB, yB);
    att = addToList(att, xC, yC);
    att = addToList(att, xD, yD);
    att = addToList(att, xE, yE);
    att = addToList(att, xF, yF);
    att = addToList(att, xG, yG);
    att = addToList(att, xH, yH);
    polygon.setAttributeNS(null, 'points', att);
}

export function dblArrow(parent, xA, yA, schachtLengte, lengte, balkDikte, pijlBreedte, hoekPijl) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.classList = ['arrow_polygon'];
    parent.appendChild(polygon);
    const sin = Math.sin(hoekPijl * (Math.PI / 180));
    const cos = Math.cos(hoekPijl * (Math.PI / 180));
    const xB = xA - balkDikte * sin;
    const yB = yA - balkDikte * cos;

    const xC = xB + schachtLengte * cos;
    const yC = yB - schachtLengte * sin;

    const xD = xC - (pijlBreedte - balkDikte) * sin;
    const yD = yC - (pijlBreedte - balkDikte) * cos;

    const xE = xA + cos * (lengte);
    const yE = yA - sin * (lengte);

    const xH = xA + balkDikte * sin;
    const yH = yA + balkDikte * cos;

    const xG = xH + schachtLengte * cos;
    const yG = yH - schachtLengte * sin;

    const xF = xG + (pijlBreedte - balkDikte) * sin;
    const yF = yG + (pijlBreedte - balkDikte) * cos;


    const xA2 = xE;
    const yA2 = yE;

    const hoekPijl2 = hoekPijl + 180;
    const sin2 = Math.sin(hoekPijl2 * (Math.PI / 180));
    const cos2 = Math.cos(hoekPijl2 * (Math.PI / 180));
    const xB2 = xA2 - balkDikte * sin2;
    const yB2 = yA2 - balkDikte * cos2;

    const xC2 = xB2 + schachtLengte * cos2;
    const yC2 = yB2 - schachtLengte * sin2;

    const xD2 = xC2 - (pijlBreedte - balkDikte) * sin2;
    const yD2 = yC2 - (pijlBreedte - balkDikte) * cos2;

    const xE2 = xA2 + cos2 * (lengte);
    const yE2 = yA2 - sin2 * (lengte);

    const xH2 = xA2 + balkDikte * sin2;
    const yH2 = yA2 + balkDikte * cos2;

    const xG2 = xH2 + schachtLengte * cos2;
    const yG2 = yH2 - schachtLengte * sin2;

    const xF2 = xG2 + (pijlBreedte - balkDikte) * sin2;
    const yF2 = yG2 + (pijlBreedte - balkDikte) * cos2;

    let att = xA + "," + yA;
    att = addToList(att, xE2, yE2);
    att = addToList(att, xF2, yF2);
    att = addToList(att, xG2, yG2);
    att = addToList(att, xC, yC);
    att = addToList(att, xD, yD);
    att = addToList(att, xE, yE);
    att = addToList(att, xF, yF);
    att = addToList(att, xG, yG);
    att = addToList(att, xC2, yC2);
    att = addToList(att, xD2, yD2);
    polygon.setAttributeNS(null, 'points', att);
}

export function addServiceBus(parent, x, y, width, height, tekst, font_size, dialogText) {
    addTextToSvg(parent, "serviceBus", tekst, x, y, width, height, font_size, dialogText);
}

const dialog = document.getElementById("dialog");
const dialogText = document.getElementById("dialogText");
const closeBtn = document.getElementById("closeDialog");

closeBtn.addEventListener("click", () => dialog.close());


function openDialog(e, txt) {
    dialogText.innerHTML = txt;
    dialog.style = "left:" + e.clientX + "px;top:" + e.clientY + "px;";
    dialog.showModal();
}

export function addTextToSvg(parent, cls, text, x, y, w, h, font_size, dialogText) {
    const fo = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");
    fo.setAttribute('x', x);
    fo.setAttribute('y', y);
    fo.setAttribute('width', w);
    fo.setAttribute('height', h);
    const div = document.createElement('div');
    div.addEventListener("click", (e) => openDialog(e, dialogText));
    div.style = "width:" + w + ";height:" + h + ";font-size:" + font_size+";";
    div.classList = "genericDiv "+cls;
    div.innerHTML= text;
    fo.appendChild(div);
    parent.appendChild(fo);
}

