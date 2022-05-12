export const sources = ["rdw", "bank", "bevolkings&shy;register", "handels&shy;register"]
export const streamingApps = ["heffen", "innen", "toekennen betalingen", "debiteuren beheer"]

export const commentsNL = [
    ['Sneak Preview: Een  generiek belasting inning systeem, toegepast op de motorrijtuig belasting',``],
    ['Initieer de Apache Kafka Cluster',`        
     <ul>
            <li>Hier worden alle events, messages, en feiten opgeslagen</li>
            <li>De data wordt automatisch gerepliceerd (replicationFactor>1)</li>
            <li>Dus backup'en is helmemaal niet nodig, mits Apache Kafka goed geconfigureerd is</li>
            <li>De opslag is bovendien consistent (<a href="https://www.youtube.com/watch?v=BuE6JvQE_CY" target="blank"> Zie Kleppman</a>)</li>
            <li>Er is dus geen enkele reden om een andere database ernaast te zetten, dat zou het alleen maar onnodig ingewikkeld maken</li>
            <li>Bovendien kan Kafka per topic(~tabel) ingeregeld worden, opslag oneindig lang, of 7 jaar (wettelijke termijn), of 2 weken (tijdelijke data)</li>                        
            <li>Een database administrator heeft dus zeer veel minder werk</li>                        
      </ul>
    `],

    [`Externe bronnen: onze belastingplichtigen`,`
        <p>Het systeem moet verbonden zijn met het handelsregister voor de bedrijven en de personen wonend in ons land</p>
        <p>Ons systeem moet geabonneerd zijn op de relevante data uit deze systemen.</p>
        <p>NB. Dit zal nog niet voldoende zijn, er zijn ook in het buitenland wonende personen, of in het buitenland gevestigde bedrijven, die belastingplichtig zijn.</p>
   `],
["RDW (de Haven)",`<p>Ook zal het systeem geabonneerd zijn op data van de RDW, liefst live, zodat we alle registraties, zowel nieuwe, veranderde, of opgezegde registraties  binnenkrijgen.</p>
     <p>Deze gegevns moeten bevatten het voertuig en de eigenaar van het voertuig, met de datum van ingang</p>
   `],

  ["Heffen is het proces, dat bepaald welke belasting op het voertuig moet worden geheven, en per wanneer",`
   <ul>
        <li>Het "Heffen" proces abonneert zich op binnenkomende gebeurtenissen van de  RDW registratie</li>
        <li>Als er een RDW registratie event binnenkomt, wordt het "Heffen" proces uitgevoerd voor deze registratie.</li>
        <li>Dit is een voorbeeld van een "streaming application" en gaat geheel automatisch.</li>
     </ul>
      <br/>
      <h4>streaming applications</h4>
      <ul>
            <li>Gaan volledig automatisch</li>
            <li>Bij een technisch probleem, wordt technisch support automatisch gewaarschuwd (een web applicatie).</i>
            <li>Bij een functioneel probleem, bijv. een soort auto die niet door het systeem herkend wordt,  wordt de support helpdesk(web applicatie) gewaarschuwd.</li>
        </ul>       
        
    `],

   ['Het proces "Innen" besluit hoe de belasting ge&iuml;nd gaat worden',`
        <ul>     
            <li>Het "Innen" proces abonneerd zich op inkomende events van het proces "Heffen".</li>
            <li>Er kunnen verschillende methoden zijn hoe de belastingplichtige wil betalen (incasso, met de bank, contant ...).</li>
            <li>Hier wordt een betalingsverplichting gecre&euml;erd.</li>            
            <li>Ook dit is een "streaming application" en gaat volledig automatisch.</li>            
        </ul>
    `],

    ["De verbinding met de bank met de rekeningen van de belastingdienst zelf.",`
        <p>Zodra er een betaling binnenkomt, wordt er een betalings event in Apache Kafka geregistreed.</p>
    `],

    ['"Toekenning" is het proces, waar  beslissingen genomen worden over hoe binnenkomende betalingen verwerkt worden.',`
    <ul>
     
            <li>Het "toekenning" proces abonnert zich op binnenkomende events van de "Banc" en op binnenkomende betalingsverplichtingen van "Innen" .</li>
            <li>Er wordt geprobeerd een betaling te koppelen aan een betalingsverplichting.</li>
            <li>Dit proces kan redelijk ingewikkeld worden, het is de kunst hier goede algortitmes voor te maken.</li>            
            <li>Een goede web applicatie voor de helpdesk is hier absoluut noodzakelijk</li>            
        </ul> 
    `],

   ['"Debiteuren beheer" is het proces waar behandeld wordt bij niet of te laat voldoen aan de betalingsverplichtingen.',`
    <ul>
     
            <li>Het "Debiteuren Beheer" proces abonneert zich op de events  "Betalings Verplichtingen", gefilterd op overschrijding van de uiterste betaaldatum.</li>
            <li>Het kan bijvoorbeeld aanmaningen initi&euml;ren. (voor bijv. afdrukken en versturen zie later)
        </ul>
    `],


    ['CQRS',`
        <p>
            CQRS : Command Query Responsibility Segregation is de manier om data beschikbaar te maken een externe systemen.
            Externe applicaties kunnen zich op bapaalde subsets van de events in Kafka abonneren.
        </p>
      
        <p>
        De data kan op diverse manieren beschikbaar gemnaakt worden door Kafka
        <ul type="1">
     
            <li>op allerlei manieren gefiltered, zoals per periode, ...</li> 
            <li>gecomprimeerd, per dag, week,maand etc., gesommeerd, gemiddeld,...</li> 
        </ul>
        </p>
     `],

   [ 'Export naar duizenden applicaties', `
       <p>
            <p>
            Duizenden applicaties hebbeb al een Apache Kafka connectie, technisch is dit zeer eenvoudig te realisren. 
            Een goede authenticatie/autorisatie is hier wel van belang.
        </p>
       Voorbeelden
       <ul type="1">     
            <li>Export naar financi&euml;le rapportage</li>
            <li>Data om brieven per post (afdruk afdeling) of per email naar belastingplichtigen te sturen)</li>
         </div>
        </ul>
    `],

   ['Tot slot : alles is heel compact, de streaming applicaties zijn deel van het Kafka Ecosysteem', `
    <p>
    En draaien dus onafhankelijk van de buitenwereld, zijn schaalbaar. 
        </p>    
        <p>
    Belangrijk : ontwikkeling van streaming applicaties is zeer eenvoudig, alleen basaal Java en Kafka kennis nodig. (zie <a href="http://www.kafka.academy" target="blank"> Kafka Academy<a>)
        </p>             
    `]];