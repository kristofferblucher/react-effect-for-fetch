import PublicationHistory from "./PublicationHistoryList.jsx"


function ArtListItem({Painting}) {

    return (

        <li>
        <div className="frame">
          <img
            src={"https://boolean-uk-api-server.fly.dev" + Painting.imageURL}
            alt = "image"
          />
        </div>

        <h3>{Painting.title}</h3>
        <p>Artist: {Painting.artist}</p>
        <h4> Publication history: </h4>
        <PublicationHistory pubHistory = {Painting.publicationHistory} />

        </li>

    )

}


export default ArtListItem