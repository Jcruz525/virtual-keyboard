import { useEmojiData } from "../hooks/useEmojiData";
import React,{useState} from "react"
function EmojiKeyBoard({ handleInputButtonClick }) {
    const emojiCategories = useEmojiData();
    const[filter,setFilter] = useState("")
    const handleChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    };
    return (
        <div className='emoji-keyboard'>
            <input type = "text" onChange = {handleChange}></input>
            {Object.entries(emojiCategories).map(([category, emojis]) => {
                const lowerCategory = category.toLowerCase();
                if (!lowerCategory.includes(filter)) return null;
                return(
                    <div key={category}>
                    <h3>{category}</h3>
                    {emojis.map((emoji, index) => (
                        <button key={index} onClick={() => handleInputButtonClick(emoji)}>
                            {emoji}
                        </button>
                    ))}
                </div>
                )
})}
        </div>
    );
}

export default EmojiKeyBoard;