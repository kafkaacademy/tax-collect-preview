import './index.css';
import { addServiceBus, createSource, createStreamingApp, addTextToSvg, arrow, dblArrow } from './functions.js';
import { sources,streamingApps,commentsNL } from './data.js';

console.log(window.navigator.language);
console.log( document.getElementsByTagName("html")[0].getAttribute("lang"));
const goldenRule = 1.62;
const goldenRuleInverse = 1 / goldenRule;

const container = document.getElementById('kafka_container');
const defaultContainerWidth=1200;

const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const comment_el = document.getElementById('comment');

function doit(step) {

    const containerWidth = window.innerWidth*0.66;
    const commentWidth= window.innerWidth;
    const resizeFactor=containerWidth/defaultContainerWidth;
    const busDikte = 90*resizeFactor; 
    const balkDikte = 15*resizeFactor;
    const pijlDikte = 40*resizeFactor;  
    const defaultMargin = 15*resizeFactor;
    const font_size_medium=25*resizeFactor;
    const font_size_large=font_size_medium*1.3;
    const containerHeight = containerWidth * goldenRuleInverse;
   
    comment_el.style="width:"+commentWidth+";min-width:200;margin-top: "+defaultMargin+";margin-left: "+defaultMargin+";font-size: "+font_size_medium;
    container.style = "width:" + containerWidth + ";height:" + containerHeight + "; margin:-top" + defaultMargin ;
    const svgWidth = containerWidth - 2 * defaultMargin;
    const svgHeight = containerHeight - 2 * defaultMargin;
    const svbWidth = svgWidth - 330*resizeFactor;
    const svbHeight = svgHeight;
    svgNode.style = "width:" + svgWidth + ";height:" + svgHeight + "; margin:" + defaultMargin;
    container.appendChild(svgNode);
    const svbY = svbHeight / 2 - busDikte / 2;
    const pijlLengte = svbY - 3 * defaultMargin - busDikte;//-3*defaultMargin-balkDikte;
    const nrOfSources = sources.length;
    const sourceWidth = (svbWidth - defaultMargin * (nrOfSources + 1)) / nrOfSources;
    const xCqrs = svbWidth;
    const yCqrs = svbHeight / 2;

    let x = defaultMargin;
    let y = defaultMargin;

  
    comment_el.innerHTML = '<b style="font-size:'+font_size_large+'">' + commentsNL[step][0] + "</b>" + commentsNL[step][1];
    switch (step) {
        case 0: {
            svgNode.innerHTML = "";
            addTextToSvg(svgNode,"previewTitle", "Sneak Preview Motorrijtuigenbelasting",defaultMargin,containerHeight/2-busDikte/2,containerWidth-4*defaultMargin,busDikte,font_size_large,"Click on next"); 
            break;
        }

        case 1: {
            svgNode.innerHTML = "";
            addServiceBus(svgNode, defaultMargin, svbY, svbWidth - 2 * defaultMargin, busDikte, "Kafka Eventbus",font_size_large,"the servicebus");
            break;
        }

        case 2: {
            x = x + 2 * (sourceWidth + defaultMargin);
            createSource(svgNode, x, y, sourceWidth, busDikte, sources[2],font_size_medium,"Hier moet een connectie met het bevolkingsregister komen");
            arrow(svgNode, x + sourceWidth / 2, 2 * defaultMargin + busDikte, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 270);
            x = x + sourceWidth + defaultMargin;
            createSource(svgNode, x, y, sourceWidth, busDikte, sources[3],font_size_medium,"Hier moet een connectie met het handelsregister komen");
            let xArrow = x + sourceWidth / 2;
            let yArrow = 2 * defaultMargin + busDikte;
            arrow(svgNode, xArrow, yArrow, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 270);
            break;
        }

        case 3: {
            createSource(svgNode, x, y, sourceWidth, busDikte, sources[0],font_size_medium,"Hier moet een connectie met het RDW komen");
            let xArrow = x + sourceWidth / 2;
            let yArrow = 2 * defaultMargin + busDikte;
            arrow(svgNode, xArrow, yArrow, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 270);
            break;
        }

        case 4: {
            y = svbHeight - defaultMargin - busDikte;
            createStreamingApp(svgNode, x, y, sourceWidth, busDikte, streamingApps[0],font_size_medium,"Dit proces leest events van RDW en creert een inning event");
            let xArrow = x + sourceWidth / 2;
            let yArrow = y - defaultMargin;
            dblArrow(svgNode, xArrow, yArrow, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 90);
            break;
        }

        case 5: {
            y = svbHeight - defaultMargin - busDikte;
            x = x +  (sourceWidth + defaultMargin);
            createStreamingApp(svgNode, x, y, sourceWidth, busDikte, streamingApps[1],font_size_medium,"Dit proces leest inning events en creert een betalingsverplichting");
            let xArrow = x + sourceWidth / 2;
            let yArrow = y - defaultMargin;
            dblArrow(svgNode, xArrow, yArrow, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 90);
            break;
        }

        case 6: {
            x = x +  (sourceWidth + defaultMargin);
            createSource(svgNode, x, y, sourceWidth, busDikte, sources[1],font_size_medium,"Hier moet een connectie met de bank komen om betalingen binnen te krijgen");
            let xArrow = x + sourceWidth / 2;
            let yArrow = y - defaultMargin;
            arrow(svgNode, xArrow, 2 * defaultMargin + busDikte, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 270);
            break;
        }

        case 7: {
            y = svbHeight - defaultMargin - busDikte;
            x = x + 2 * (sourceWidth + defaultMargin);
            createStreamingApp(svgNode, x, y, sourceWidth, busDikte, streamingApps[2],font_size_medium,"Hier komen betaling events binnen en worden aan een betalingstoewijzing gekoppeld");
            let xArrow = x + sourceWidth / 2;
            let yArrow = y - defaultMargin;

            dblArrow(svgNode, xArrow, yArrow, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 90);
            break;
        }

        case 8: {
            y = svbHeight - defaultMargin - busDikte;
            x = x + 3 * (sourceWidth + defaultMargin);
            createStreamingApp(svgNode, x, y, sourceWidth, busDikte, streamingApps[3],font_size_medium,"hier komen betalingsverplictingen binnen waar de betalingtermijn van verstreken is");
            let xArrow = x + sourceWidth / 2;
            let yArrow = y - defaultMargin;
            dblArrow(svgNode, xArrow, yArrow, pijlLengte * goldenRuleInverse, pijlLengte, balkDikte, pijlDikte, 90);
            break;
        }

        case 9: {
            const d1=80*resizeFactor;
            const d2=100*resizeFactor;
            const y3=50*resizeFactor;
            const d3=3*resizeFactor;
            const d4=10*resizeFactor;
            arrow(svgNode, svbWidth, yCqrs +y3, d1, d2, d3,d4, -10);
            arrow(svgNode, svbWidth, yCqrs, d1, d2, d3, d4, 0);
            arrow(svgNode, svbWidth, yCqrs - y3,d1, d2, d3, d4, 10);

            const cqrsTitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            cqrsTitle.className.baseVal = "cqrs_title";
            cqrsTitle.setAttribute('x', xCqrs - 15*resizeFactor);
            cqrsTitle.setAttribute('y', yCqrs - 80*resizeFactor);
            cqrsTitle.setAttribute('font-size', font_size_large);
            cqrsTitle.textContent = "CQRS";
            svgNode.appendChild(cqrsTitle);
            break;
        }

        case 10: {
            addTextToSvg(svgNode, "reporting", "reporting", xCqrs + 100*resizeFactor + defaultMargin, yCqrs - 100*resizeFactor, 200*resizeFactor, 200*resizeFactor,font_size_medium,"All kinds of output can be send to other parties");
            break;
        }

        case 11: {
            const bigRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bigRect.className.baseVal = "bigbus";
            bigRect.setAttributeNS(null, 'x', defaultMargin);
            bigRect.setAttributeNS(null, 'y', svbY);
            bigRect.setAttributeNS(null, 'width', svbWidth - 2 * defaultMargin);
            bigRect.setAttributeNS(null, 'height', svbHeight / 2 + 2 * defaultMargin);
            svgNode.appendChild(bigRect);
            break;
        }
    }
}


let step = 0;


function previousStep() {
    step--;
    if (step < 0) step = 0;
  
    allSteps(step);
}


function nextStep() {
    step++;
    if (step > 11) step = 11;
    allSteps(step);
}

function allSteps (step){
    for (let i = 0; i <= step; i++)
    doit(i);
}

function resize(){
    svgNode.innerHTML = "";allSteps(step);
}

document.getElementById("prevStep").addEventListener("click", previousStep);
document.getElementById("nextStep").addEventListener("click", nextStep);
window.addEventListener("resize", ()=>{ resize()});

resize();

