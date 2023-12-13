export default function TabButton({children}) {

    function clickHandler (){
        console.log("hello world")
    }


    return (
        <li>
        <button onClick ={clickHandler}>{children}</button>
        </li>
    )
}