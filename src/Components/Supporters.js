import React, { useEffect } from 'react';

function Supporters() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>
    <main>
      <div className="supporters">
        <h2>A selected overview of Supporters!</h2>
        <div className="support">
          <a href="https://www.beatport.com/release/9-hours-ep/2964729" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2020_08apple.png")} alt="BESURE022 on Apple Music" /><p>Apple Music</p></a>
          <a href="https://www.beatport.com/release/archives-ep/2781302" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2019_12clubbingspain.png")} alt="BESURE019 on Clubbing Spain" /><p>Clubbing Spain</p></a>
          <a href="https://www.beatport.com/release/be-sure/2540660" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2019_03mnmt.png")} alt="BESURE018 on Monument" /><p>Monument</p></a>
          <a href="https://www.beatport.com/release/be-sure/2540660" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2019_03future.png")} alt="BESURE018 on NovaFuture" /><p>Novafuture Blog</p></a>
          <a href="https://www.youtube.com/watch?v=PwzkRUTl0fU" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2019_01youtube.png")} alt="Absorbed set on Youtube" /><p>Youtube Comment</p></a>
          <a href="https://www.beatport.com/release/on-the-run/2196603" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2019_01florido.png")} alt="BESURE012 by Fabio Florido" /><p>Fabio Florido</p></a>
          <a href="https://www.beatport.com/release/on-the-run/2196603" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2018_02kennedy.png")} alt="BESURE012 on by Inigo Kennedy" /><p>Inigo Kennedy</p></a>
          <a href="https://www.beatport.com/release/advanced-state/2167793" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2017_12update.png")} alt="BESURE011 in Update magazine" /><p>Update Magazine</p></a>
          <a href="https://www.beatport.com/release/tension/1771625" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2016_06update.png")} alt="BESURE008 in Update magazine" /><p>Update Magazine</p></a>
          <a href="https://www.beatport.com/release/tension/1771625" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2016_05larsson.png")} alt="BESURE008 by Larsson" /><p>Larsson</p></a>
          <a href="https://www.beatport.com/release/tension/1771625" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2016_05clubbingspain.png")} alt="BESURE008 on Clubbing Spain" /><p>Clubbing Spain</p></a>
          <a href="https://www.beatport.com/release/time-lord-ep/1686647" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2016_01farceb.png")} alt="BESURE006 by Farceb" /><p>Farceb</p></a>
          <a href="https://www.beatport.com/release/waves-from-the-past/1654450" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_12hawtin.png")} alt="BESURE005 by Richie Hawtin" /><p>Richie Hawtin</p></a>
          <a href="https://www.beatport.com/release/waves-from-the-past/1654450" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_12angelis.png")} alt="BESURE005 by Dimi Angelis" /><p>Dimi Angelis</p></a>
          <a href="https://www.beatport.com/release/waves-from-the-past/1654450" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_11altroverso.png")} alt="BESURE005 on)} Altroverso" /><p>Altroverso</p></a>
          <a href="https://www.beatport.com/release/below-surface/1591854" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_10beat.png")} alt="BESURE003 on Beat" /><p>Beat Magazine</p></a>
          <a href="https://www.beatport.com/release/below-surface/1591854" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_09update.png")} alt="BESURE003 in Update magazine" /><p>Update Magazine</p></a>
          <a href="https://www.beatport.com/release/below-surface/1591854" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_09kennedy.png")} alt="BESURE003 by Inigo Kennedy" /><p>Inigo Kennedy</p></a>
          <a href="https://www.beatport.com/release/below-surface/1591854" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_08ohm.png")} alt="BESURE003 on Ohm" /><p>Ohm</p></a>
          <a href="https://www.beatport.com/release/triebmensch-ep/1554123" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_07carnal.png")} alt="BESURE002 by Keith Carnal" /><p>Keith Carnal</p></a>
          <a href="https://www.beatport.com/release/be-pure/1515615" target="_blank" rel="noreferrer"><img src={require("../pics/supported/2015_03kennedy.png")} alt="BESURE001 by Inigo Kennedy" /><p>Inigo Kennedy</p></a>
        </div>
      </div>
    </main>
  </>;
}

export default Supporters;
