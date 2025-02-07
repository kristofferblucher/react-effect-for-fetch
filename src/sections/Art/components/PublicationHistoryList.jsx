


function PublicationHistory ({pubHistory}) {


    return(
        <ul>
            {pubHistory.map((publication, index ) => (
                <li key={index}>{publication}</li>
            ))}

        </ul>

    )


}

export default PublicationHistory