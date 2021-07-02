import Filters from "../Components/Filters"

export default function Index({songs}) {
    return (
        <div>
            <h2>Index</h2>
            <Filters songs={songs}/>
            
        </div>
    )
}
