import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { revokeCookies } from '../store/actions/usersActions';

function Datenschutz() {

    // redux
    const dispatch = useDispatch();
    const resetCookies = () => {
        localStorage.removeItem("acceptedCookies");
        dispatch(revokeCookies());
    };

    const [showImpressum, setShowImpressum] = useState(false);
    const [impressumData, setImpressumData] = useState({
      na1: "B****",
      na2: "F****",
      na3: "S******",
      na4: "2**/5***/3***",
      na5: "(E***************)",
      na6: "S***********",
      na7: "M*****",
      ad1: "W****",
      ad2: "J***",
      ad3: "S**",
      ad4: "5****",
      ad5: "B***",
      ad6: "**",
      em1: "b******",
      em2: "d**",
      em3: "a*",
      em4: "f****",
      em5: "d*"
    })
  
    const getImpressum = () => {
      fetch("https://provider-api.belowsurface.de/provider/bs-impressum", {
        method: 'GET',
        redirect: 'follow'
      })
      .then(response => response.json())
      .then(result => {
        setShowImpressum(true);
        setImpressumData({
          "na1": result.na1,
          "na2": result.na2,
          "na3": result.na3,
          "na4": result.na4,
          "na5": result.na5,
          "na6": result.na6,
          "na7": result.na7,
          "ad1": result.ad1,
          "ad2": result.ad2,
          "ad3": result.ad3,
          "ad4": result.ad4,
          "ad5": result.ad5,
          "ad6": result.ad6,
          "em1": result.em1,
          "em2": result.em2,
          "em3": result.em3,
          "em4": result.em4,
          "em5": result.em5
        } 
      )})
      .catch(error => console.log('error', error));
    }

    return (
        <main>
            <div className="impressum">
                <h2>Datenschutz</h2>
                <h2>Notice for international readers:</h2>
                <p>The following Datenschutzerklärung includes contact information and detailed insights in our rights and obligations. We are based in Germany and therefore are subject to german law. That&apos;s why the text is in german. If you don&apos;t speak german and have any questions about it, please do not hesitate to contact us via the email below.</p>

                {/* RESET COOKIE SETTINGS  */}
                <p><b>Remove Cookie Settings for this website:</b> <button onClick={resetCookies}>Reset Cookie Settings</button><br />
                Notice: This button does not affect cookies on your device by third party entities. The reset will just remove your local entry that was created when you accepted cookies for this website. You can later on agree on the usage of cookies again.</p>

                <h2>Datenschutzerklärung</h2>
                <p><b>1. Allgemeine Hinweise</b><br />
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                Datenerfassung auf dieser Website<br />
                <b>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</b><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
                entnehmen.<br />
                <b>Wie erfassen wir Ihre Daten?</b><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                Daten handeln, die Sie in ein Kontaktformular eingeben.
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-
                Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
                des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.<br />
                <b>Wofür nutzen wir Ihre Daten?</b><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.<br />
                <b>Welche Rechte haben Sie bezüglich Ihrer Daten?</b><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.<br />
                <b>Analyse-Tools und Tools von Drittanbietern</b><br />
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
                allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                Datenschutzerklärung.<br /><br />
                <b>2. Hosting</b><br />
                Externes Hosting<br />
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die
                auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
                a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.<br />
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
                Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.<br />
                Wir setzen folgenden Hoster ein:<br />
                <b>checkdomain GmbH</b><br />
                a dogado group company<br />
                Große Burgstraße 27/29<br />
                23552 Lübeck, Deutschland<br />
                <a href="https://www.checkdomain.net/en/about/">https://www.checkdomain.net/en/about/</a><br /><br />
                <b>3. Allgemeine Hinweise und Pflichtinformationen</b><br />
                Datenschutz<br />
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.<br />
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                und zu welchem Zweck das geschieht.<br />
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                möglich.<br />
                <b>Hinweis zur verantwortlichen Stelle</b><br />
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                
                { !showImpressum && <button onClick={getImpressum}>Hier klicken um die Kontaktdaten anzuzeigen</button> }<br />
                Firmenname: {`${impressumData.na1} ${impressumData.na3} ${impressumData.na7} ${impressumData.na5}`}<br />
                Postanschrift:<br />
                {`${impressumData.na2} ${impressumData.na6}`}<br />
                {`${impressumData.ad2}-${impressumData.ad1}-${impressumData.ad3}. ${impressumData.ad6}`}<br />
                {`${impressumData.ad4} ${impressumData.ad5}`}</p>
                <h2>Kontakt</h2>
                <p>Per Post an die angegebene Adresse oder per E-Mail an: 
                { showImpressum ?
                <>
                    {" " + `${impressumData.em4} ${impressumData.em3} ${impressumData.em1} ${impressumData.em2} ${impressumData.em5}`} </>
                :
                    <span> <button onClick={getImpressum}>Hier klicken um die Kontaktdaten anzuzeigen</button> </span>
                } 
                (Achtung: Bitte &apos;at&apos; durch &apos;@&apos; und &apos;dot&apos; durch &apos;.&apos; ersetzen.)<br /><br />
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
                entscheidet.<br /><br />
                <b>Speicherdauer</b><br />
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.<br /><br />
                <b>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</b><br />
                Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
                datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
                personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
                hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
                Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden
                herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht
                ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
                Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese
                Verarbeitungstätigkeiten keinen Einfluss.<br /><br />
                <b>Widerruf Ihrer Einwilligung zur Datenverarbeitung</b><br />
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unberührt.<br />
                <b>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                Direktwerbung (Art. 21 DSGVO)</b><br />
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 6 1 Lit. E oder F DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die Verarbeitung ihrer personenbezogenen Daten Widerspruch einzulegen; Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende Schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).<br />
                Werden Ihre personenbezogenen Daten verarbeitet um Direktwerbung zu betreiben, so haben Sie das Recht jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie Widersprechen, werden ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).<br /><br />
                <b>Beschwerderecht bei der zuständigen Aufsichtsbehörde</b><br />
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.<br /><br />
                <b>Recht auf Datenübertragbarkeit</b><br />
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.<br /><br />
                <b>SSL- bzw. TLS-Verschlüsselung</b><br />
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
                Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
                von Dritten mitgelesen werden.<br /><br />
                <b>Auskunft, Löschung und Berichtigung</b><br />
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.<br /><br />
                <b>Recht auf Einschränkung der Verarbeitung</b><br />
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                folgenden Fällen:<br />
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                statt der Löschung die Einschränkung der Datenverarbeitung verlangen.<br />
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen.<br />
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten - von
                ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
                eines Mitgliedstaats verarbeitet werden.<br />
                <b>Widerspruch gegen Werbe-E-Mails</b><br />
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
                nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
                Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen, etwa durch Spam-E-Mails, vor.<br /><br />
                <b>4. Datenerfassung auf dieser Website</b><br />
                <b>Cookies</b><br />
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf
                Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
                werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
                gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie
                unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter
                Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
                Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
                von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur
                Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z. B. für die
                Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums)
                erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
                Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
                von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine
                Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden
                Cookies ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
                jederzeit widerrufbar.<br />
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
                sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
                Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.<br />
                Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber
                im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.<br /><br />

                {/* RESET COOKIE SETTINGS */}
                <b>Cookie Zustimmung für diese Webseite widerrufen (reset):</b> <button onClick={resetCookies}>Cookie Einstellungen zurücksetzen</button><br />
                Achtung: Diese Funktion ändert nichts an Cookies die durch Drittanbieter bei Ihnen gespeichert wurden. Es werden lediglich keine weiteren Inhalte angezeigt, für deren Nutzung eine erneute Nutzung von Cookies notwendig wäre. Sie können Ihre Zustimmung jederzeit wieder geben und diese Seite wie gewohnt nutzen.
                
                <br /><br /><b>Kontaktformular</b><br />
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
                und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
                Einwilligung weiter.<br />
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
                der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.<br />
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
                (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen -
                insbesondere Aufbewahrungsfristen - bleiben unberührt.<br /><br />
                <b>Anfrage per E-Mail und Post</b><br />
                Wenn Sie uns per E-Mail oder Post kontaktieren, wird Ihre Anfrage inklusive aller daraus
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
                bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
                der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.<br />
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
                (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen -
                insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.<br /><br />
                <b>5. Newsletter</b><br />
                <b>Newsletterdaten</b><br />
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-
                Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
                angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere
                Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für
                den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.<br />
                Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf
                Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
                Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
                widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
                Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.<br />
                Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
                Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
                Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir
                behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen
                unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.<br />
                Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
                Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, um künftige Mailings zu verhindern. Die Daten
                aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt.
                Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben
                beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
                Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern
                Ihre Interessen unser berechtigtes Interesse überwiegen.<br /><br />
                <b>6. Plugins und Tools</b><br />
                <b>Youtube</b><br />
                Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited
                („Google“), Gordon House, Barrow Street, Dublin 4, Irland.<br />
                Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu
                den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie
                besucht haben.<br />
                Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endgerät speichern oder vergleichbare
                Technologien zur Wiedererkennung verwenden (z. B. Device-Fingerprinting). Auf diese Weise kann
                YouTube Informationen über Besucher dieser Website erhalten. Diese Informationen werden u. a.
                verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und
                Betrugsversuchen vorzubeugen.<br />
                Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt
                Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-
                Account ausloggen.<br />
                Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.
                Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
                Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
                DSGVO; die Einwilligung ist jederzeit widerrufbar.<br />
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube
                unter:<br />
                <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">https://policies.google.com/privacy?hl=de</a><br /><br />
                <b>Google Web Fonts</b><br />
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google
                bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
                Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Aus Datenschutzgründen sind diese Web Fonts jedoch lokal gespeichert und werden für diese Seite nicht von Google Servern geladen.<br />
                <b>Font Awesome</b><br />
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten und Symbolen Font Awesome. Anbieter ist
                die Fonticons, Inc., 6 Porter Road Apartment 3R, Cambridge, Massachusetts, USA.<br />
                Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte, Schriftarten
                und Symbole korrekt anzuzeigen. Aus Datenschutzgründen sind diese Web Fonts jedoch lokal gespeichert und werden für diese Seite nicht von Font Awesome Servern geladen.<br /><br />
                <b>Soundcloud</b><br />
                Auf dieser Website können Plugins des sozialen Netzwerks SoundCloud (SoundCloud Limited, Berners
                House, 47-48 Berners Street, London W1T 3NF, Großbritannien.) integriert sein. Die SoundCloud-Plugins
                erkennen Sie an dem SoundCloud-Logo auf den betroffenen Seiten.
                Wenn Sie diese Website besuchen, wird nach Aktivierung des Plugins eine direkte Verbindung zwischen
                Ihrem Browser und dem SoundCloud-Server hergestellt. SoundCloud erhält dadurch die Information, dass
                Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den „Like-Button“ oder „Share-Button“
                anklicken, während Sie in Ihrem SoundCloud- Benutzerkonto eingeloggt sind, können Sie die Inhalte dieser
                Website mit Ihrem SoundCloud-Profil verlinken und/oder teilen. Dadurch kann SoundCloud Ihrem
                Benutzerkonto den Besuch dieser Website zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten
                keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch SoundCloud erhalten.
                Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den
                Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur
                Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
                DSGVO; die Einwilligung ist jederzeit widerrufbar.<br />
                Großbritannien gilt als datenschutzrechtlich sicherer Drittstaat. Das bedeutet, dass Großbritannien ein
                Datenschutzniveau aufweist, das dem Datenschutzniveau in der Europäischen Union entspricht.
                Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von SoundCloud unter:<br />
                <a href="https://soundcloud.com/pages/privacy" target="_blank" rel="noreferrer">https://soundcloud.com/pages/privacy</a><br />
                Wenn Sie nicht wünschen, dass SoundCloud den Besuch dieser Website Ihrem SoundCloud- Benutzerkonto
                zuordnet, loggen Sie sich bitte aus Ihrem SoundCloud-Benutzerkonto aus bevor Sie Inhalte des SoundCloud-
                Plugins aktivieren.<br /><br />
                Quelle der Datenschutzerklärung: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer">e-recht24.de</a></p>
            </div>
        </main>
    );
}

export default Datenschutz;
