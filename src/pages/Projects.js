import React, {useState} from 'react'
import demo_video from '../media/kanjihunt_demo.mp4'
import './Projects.css'

const Projects = () => {

  document.body.style.backgroundColor= "rgb(112, 44, 44)";

  const [showVideo, setShowVideo] = useState(false)
  
  const videoHandler = () => {
    showVideo ? setShowVideo(false) : setShowVideo(true)
    let videoElement = document.getElementById('demo-video')
    videoElement.pause()
    videoElement.currentTime = 0
  }

  return (
    <div className='project-container'>

      <div className='project-section' onClick={() => window.open('https://trunglam7.github.io/pokemon-randomizer/')}>
        <div className='project-name'>Pokemon Team Randomizer</div>
        <div className='project-tools'>Tools: HTML, CSS, Javascript, React.js</div>
        <p>Using a REST API from pokeapi.co, this web application randomly selects your Pokemon team for you.
          Users have the option of selecting a region of their desired team or stick to the default selection,
          which is national. After which, this application will display information about your team: their name,
          image, type, abilities, and 4 random moveset of that Pokemon.
        </p>
      </div>

      <div className='project-section' onClick={() => window.open('https://github.com/trunglam7/FishCryptoTraderV2')}>
        <div className='project-name'>Crypto Fish Trader</div>
        <div className='project-tools'>Tools: Python, PyGame</div>
        <p>Using a CoinGecko API to access the names of the cryptocurrencies token, 
          this program displays two random crypto names from the top 50 based on marketcap. 
          Which ever side the fish spends the most amount of time in a given time duration, that cryptocurrency wins.
        </p>
      </div>

      <div className='project-section' onClick={() => window.open('https://trunglam7.github.io/login_sim_encryption/')}>
        <div className='project-name'>Login Simulation with Salted MD5 Encryption</div>
        <div className='project-tools'>Tools: HTML, CSS, Javascript</div>
        <p>A simple login simulation that demonstrates how a salted MD5 encryption works on a password.
          This simulation utilizes a blueimp-md5 node module to encrypt the password, along with a randomly generated
          8 character salt.
        </p>
      </div>

      <div className='project-section' onClick={() => window.open('https://trunglam7.github.io/pokemon-app/')}>
        <div className='project-name'>Pokemon Pagination</div>
        <div className='project-tools'>Tools: HTML, CSS, Javascript, React.js</div>
        <p>Using a REST API from pokeapi.co, this web application is a simple pagination of the entire Pokemon database,
          which is displayed with their names, image, and type.
        </p>
      </div>

      <div className='project-section' onClick={() => window.open('https://github.com/trunglam7/AdjustTheCounters')}>
        <div className='project-name'>A-Star Search - Adjust the Counters</div>
        <div className='project-tools'>Tools: C++</div>
        <p>Using an A-Star search algorithm with the misplaced tile heuristic, this algorithm will solve the adjust the counter puzzle with the smallest amount of moves.
          The puzzle description is in the Github repository.
        </p>
      </div>

      <div className='project-section' onClick={videoHandler}>
        <div className='project-name'>Unity Project - Kanji Hunt</div>
        <div className='project-tools'>Tools: Unity, C#, Blender</div>
        <p>A game developed using Unity. The objective of the game is given a single english word and 10 random Kanji tokens scattered across the map,
          the player must find the correct token before time expires. More information, including a video demo, is displayed in the Github repo.
        </p>
      </div>


      <div className={showVideo ? 'video-container-active' : 'video-container-hidden'}>
        <div className='background-cover' />
        <div className='video-container'>
          <button onClick={videoHandler}>X</button>
          <video id='demo-video' width='720' height='480' controls>
            <source src={demo_video} type='video/mp4' />
          </video>
        </div>
      </div>
      

    </div>
  )
}

export default Projects