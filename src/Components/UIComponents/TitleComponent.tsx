

const TitleComponent = (props: {title: string}) => {
    return (
        <>
            <h1 className="text-gray-100 text-3xl p-2 font-bold">
                {props.title}
            </h1>
        </>
    )
}

export default TitleComponent;