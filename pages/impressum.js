import React, { useState } from 'react'

function Impressum() {

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

    return <>
        <main>
            <div className="impressum">
                <h2>Impressum</h2>
                <h4>Notice for international readers:</h4>
                <p><small>The following Impressum includes contact information and detailed insights in our rights and obligations. We are based in Germany and therefore are subject to german law. That&apos;s why the text is in german. If you don&apos;t speak german and have any questions about it, please do not hesitate to contact us via the email below.</small></p>

                <h2>Angaben gemäß §5 TMG</h2>
                <h2>Angaben gemäß §5 TMG</h2>
                { !showImpressum && <button onClick={getImpressum}>Hier klicken um die Kontaktdaten anzuzeigen</button> }
                <p>Firmenname: {`${impressumData.na1} ${impressumData.na3} ${impressumData.na7} ${impressumData.na5}`}<br />
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
                (Achtung: Bitte &apos;at&apos; durch &apos;@&apos; und &apos;dot&apos; durch &apos;.&apos; ersetzen.)<br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                <h2>Umsatzsteuer-ID</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: 
                { showImpressum ?
                    <>
                    {" " + `${impressumData.na4}`} 
                    </>
                :
                    <span> <button onClick={getImpressum}>Hier klicken um die Kontaktdaten anzuzeigen</button> </span>
                }
                </p>
                <h2>Haftung für Inhalte</h2>
                <p>Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                <h2>Haftung für Links</h2>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                <h2>Urheberrecht</h2>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                <p>Quelle des Impressums: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer">e-recht24.de</a></p>
            </div>
        </main>
    </>;
}

export default Impressum;
