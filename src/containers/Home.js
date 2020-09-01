import React, { Component } from 'react';
import GotFont from '../images/got-font.png'

class Home extends Component {
   state = {
      quotes: [
         {
            text: 'There is only one war that matters. The Great War. And it is here',
            by: 'Jon Snow'
         },
         {
            text: 'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.',
            by: 'Tyrion Lannister'
         },
         {
            text: 'There is only one thing we say to death. Not today.',
            by: 'Syrio Forel'
         }
      ],
      currentIndex: 2
   }

   randomizeIndex() {
      this.setState(state => {
         state.currentIndex -= 1
         console.log(state)
      })
   }

   componentDidMount() {
      const intervalId = setInterval(() => this.randomizeIndex(), 2000);
      this.setState({ intervalId })
   }

   render() {
      return (

         <header className='header-bg header'>
            <div className='overlay'>
               <div className='description'>
                  <img className='description-img' src={GotFont} alt='got-font' />
                  <div className="card description-card">
                     <div className="card-body">
                        <blockquote className="blockquote">
                           <p className='quote'>  </p>
                           <footer className="card-blockquote blockquote-footer"><cite title="Source title">  </cite></footer>
                        </blockquote>
                     </div>
                  </div>
                  <a name="youtube-trailer" className="btn btn-primary" href="#youtube" role="button">Watch Trailer <i className="fa fa-play-circle" aria-hidden="true"></i></a>
               </div>
            </div>
         </header>
      )
   }
}

export default Home