import {createContext, useState} from "react";
import FeedbackData from "../data/FeedbackData";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext(undefined)

export const FeedbackProvider = ({children}) => {
    //set feeback
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm(`Are you sure you want to delete?`)) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateItem} : item))
    }


    return <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext