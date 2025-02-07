import ArtListItem from "./ArtListItem.jsx";

function ArtList({data}) {

    return(

        <ul className="art-list">
            
        {data.map((Painting) => (
            <ArtListItem key={Painting.id} Painting={Painting} />
        ))}

        </ul>

    )
    
}

export default ArtList