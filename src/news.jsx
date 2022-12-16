import React from "react";

{/*Komma åt skickad data genom att göra det till objekt this.props . . .*/} 
class News extends React.Component {
    constructor(props) {
      super(props);

     {/*Sätter en "state" för att lagra data, sätter att visa först loading innan den hämtat API. . .*/} 
      this.state = { name: "Loading. . ."};
    }

    async componentDidMount() {
      let res = await fetch(
        `https://gnews.io/api/v4/search?q=${this.props.NameNews}&token=2e0da53b09c18b1214e379d4da58c92c&lang=en&max=8`
      ); {/*Gnews API, 100 request per dag. Datan "NameNews" som skickats sätts in i API efterfågan.*/}
      
      let data = await res.json();
      let arr = data.articles.map((p) => { {/*Sätter array data i "arr", hämtar ut data från articles från API*/}
        return (

          <div class="flex p-8">  
          <div class="max-w-sm flex flex-col rounded-lg overflow-hidden bg-gray-900">
            <img class="w-full" src={p.image}/>
            <div class="px-6 py-3">
              <div class="font-bold text-xl mb-2 text-gray-500">{p.title}</div>
              <p class="text-gray-600 text-base">
                {p.description}
              </p>
              <button class="mt-5 bg-gray-600 hover:bg-gray-700 rounded-full px-3 font-bold text-gray-900 text-xl"> <a href={p.url}>Read more</a></button>
            </div>
            <div class="px-3 pt-3 pb-3">
            </div>
          </div>
        </div>
        );
      });
      this.setState({ name: arr }); {/*Byter ut innehållet till array datan*/}
    }
    render() {
      return  <div class="flex p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{this.state.name} </div>; {/*Renderar kolumner och den utvalda array datan*/}
  }}

export default News;