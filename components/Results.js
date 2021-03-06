import FlipMove from 'react-flip-move';
import Thumbnail from './Thumbnail';

function Results({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {
                results.map(result => (
                    <Thumbnail key={result.id} result={result}/>
                    // console.log(result)
                ))
            }
        </FlipMove>
    )
}

export default Results