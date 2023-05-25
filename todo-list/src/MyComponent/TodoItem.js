export const TodoItem= (props)=>
{
    console.log("hello",props);
    return (
        <div>
            <p>{props.props.sno}</p>
            <p>{props.props.title}</p>
            <p>{props.props.desc}</p>
        </div>
    )
}