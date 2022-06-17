import './App.css'
import _ from 'lodash'
import 'antd/dist/antd.css';

import { Col, Image, Row } from 'antd';
import moment from 'moment-timezone'

function App() {

  let isBirthday = moment().tz('Asia/Kolkata').diff(moment('18-06-2022', 'DD-MM-YYYY'), 'hours') > 0

  const renderCard = () => (<Row style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'hidden' }}>
    <Col className='textarena' style={{ width: '50%', overflowY: 'scroll', paddingBottom: '100px' }}>
      <div id='moshi'>Moshi Moshi~</div>
      <div id='pattagobhi'>Pattagobhi Desu 🥬</div>
      <div id='skadiwas'>Wishing you a very very very happy birthday! 🎉🎉🎉</div>
      <div id='youoldnowlol'>(Even if that means you are ancient now)</div><br />
      <div id='skaisop'>So well well, basically just wanted to take a moment to thank you, for being such an amazing person and wanted to let you know once again that you are one of the most OP people I know and well, thank you once again for being a Lamp to me in general.</div><br />
      <div>Now that that is out of the way, few more things I wanted to say, I mean, it's nothing major but well, you really need to look after yourself and well, try to relax whenever possible, don't want you to burn out, and this concludes the lecture (Sorry &gt;///&lt;)</div>
      <div>A few more things are there, scroll below and you will find the download heh~ <br /></div>
      <a href='assets/ska.zip' download><div className='downloadbutton'>Happy Birthday!!! 🎂🥳🎉</div></a>
    </Col>
    <Col style={{ display: 'flex', height: '100%', width: '50%', flexDirection: 'column', alignContent: 'flex-end' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Image preview={false} src='assets/transparent-gojo.png' />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '100px' }}>
        <Image preview={false} src='assets/jett.webp' />
        <Image preview={false} src='assets/killjoy.webp' />
        <Image preview={false} src='assets/viper.webp' />
      </div>

    </Col>
  </Row>)

  return (
    <div className="App">
      {isBirthday ? renderCard() : <Col className='textarena' style={{ width: '50%', overflowY: 'scroll', paddingBottom: '100px' }}>
        Loading in {moment().tz('Asia/Kolkata').diff(moment('18-06-2022', 'DD-MM-YYYY'), 'hours') * -1} hours.
      </Col>}

    </div>
  )
}

export default App
