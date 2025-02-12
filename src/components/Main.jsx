export default function Main(props) {
    const { data } = props
    return (
        <div className="imgContainer">
            {data.media_type === 'video' ? (  
                <iframe src={data.url} title={data.title} ></iframe>
            ) : (<img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
        )
            }
            </div>
            
    )
}