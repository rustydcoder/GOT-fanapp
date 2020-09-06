import React, { Component } from 'react'
import axios from 'axios';

class Cast extends Component {
   state = {
      castInfo: []
   }

   formatData(data) {
      const { person: { name, birthday, country: { name: nationality } } } = data
      const { character: { name: cast, image: { medium: src } } } = data

      const birthYear = (birthDay) =>
         parseInt(birthDay
            .split('-')
            .filter(str => str.length >= 3)
            .join())

      return {
         name,
         nationality,
         age: (new Date()).getFullYear() - birthYear(birthday),
         cast,
         src
      }
   }

   componentDidMount() {
      axios.get('http://api.tvmaze.com/shows/82/cast')
         .then(({ data }) => {
            const formattedData = data.map(data => this.formatData(data))
            this.setState({ castInfo: [...formattedData] })
         })
         .catch(err => console.log(err))
   }

   render() {

      return (
         <main className='got-bg'>
            <div className="container">
               <i className="fa cast-arrows fa-arrow-left" aria-hidden="true"></i>
               <i className="fa cast-arrows fa-arrow-right" aria-hidden="true"></i>
               <div className="row h-100 w-100 justify-content-center align-items-center">
                  <div className="col-md-4">

                  </div>
                  <div className="col-md-4">

                  </div>
                  <div className="col-md-4">

                  </div>
               </div>
            </div>
         </main>
      )
   }

}




export default Cast