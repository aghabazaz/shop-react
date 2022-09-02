import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Loading = () => {


const render = Array(5).fill({}).map(()=>{
        return <article className="item fix-width-278">
        <div className="item-info">
          <Skeleton width={210} height={210} circle={true} />
        </div>
        <Skeleton height={48}  className="skeleton" />
      </article>
})
        return (
            <>
                {render}
            </>
        )
}

export default Loading