import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import AWS from 'aws-sdk'
import AudioPlayer from './components/AudioPlayer';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_CLIENTID ,
  secretAccessKey: process.env.REACT_APP_SECRETKAY ,
  region: 'us-west-1'
}
)
const polly = new AWS.Polly()
function App() {

  const [text, setText] = useState('');

  const [audioFile, setAudioFile] = useState();

  const convertTexttoSpeech = () => { 
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: 'Salli'
      },
      (error, data) => {
        if(error) {
          console.log(error)
        }else{
          console.log(data);
          setAudioFile(data);
        }
      }
    )
  }

  return (
   <>
    <div className='container'>
      <Header/>
      <Section text = {text} setText = {setText} convertTexttoSpeech = {convertTexttoSpeech}/>
    </div>
    <AudioPlayer audioFile={audioFile}/>
  </> 
  );
}

export default App;
