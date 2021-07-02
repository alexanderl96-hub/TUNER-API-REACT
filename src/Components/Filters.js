import MapingSongs from "./MapingSongs"

export default function Filters({songs}) {
    return (
        <div className="table">
            <h3>Todas mis canciones</h3>
            <section>
              <td className= "titulos">
                    <h2>Favorite</h2> 
                    <h2>Title</h2>
                    <h2>Album</h2>
                    <h2>Artist's</h2>
                </td>
                <tbody>
                    {songs.map((song, index)=>{
                        return <MapingSongs key={index} song={song} index={index}/>
                    })}
                </tbody>
            </section>
            
        </div>
    )
}