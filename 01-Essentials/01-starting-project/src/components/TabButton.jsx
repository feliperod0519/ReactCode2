export default function TabButton({children,onSelect,isSelected}){
    console.log('Executing TabButton one for instance') 
    return (
            <li>
                <button className={isSelected?'active':undefined} onClick={onSelect}>{children}</button>
            </li>
    );
}