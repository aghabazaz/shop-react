import Skeleton from 'react-loading-skeleton'

const Loading = () => {


const render = Array(6).fill({}).map(()=>{
        return <div className='col-4 test-center'>
            <Skeleton  variant="circular" sx={{ bgcolor: 'red.900' }} height={100} width={100} className="mb-3"></Skeleton>
        </div>
})
        return (
            <>
                {render}
            </>
        )
}

export default Loading