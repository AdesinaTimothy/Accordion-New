import React, { useState } from 'react'

const faqs = [
    {
        id: 1,
      title: "Where are these chairs assembled?",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        id: 2,
      title: "How long do I have to return my chair?",
      text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        id: 3,
      title: "Do you ship to countries outside the EU?",
      text:
        "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
  ]; 
      
      


export default function Accord() {

    const [isOpenedItems, setIsOpenedItems] = useState([]);

    function HandleClick (id) {
      if (isOpenedItems.includes(id)) {
        setIsOpenedItems(isOpenedItems.filter((item) => item !== id));
      } else {
        setIsOpenedItems([...isOpenedItems, id]);
      }

    }

  return (
    <div className='accordion'>
      {faqs.map((faq) => (
        <div className='item' key = {faq.id} onClick= {() => HandleClick(faq.id)}>
            <div className="upper-div">
                <div className="number-div">
                    <h3>{faq.index}</h3>
                </div>
                <div className="title-div">
                    <h3>{faq.title}</h3>
                </div>
                <div className="icon-div">
                    {isOpenedItems.includes(faq.id) ? "-" : "+"}
                </div>
            </div>

            <div className="lower-div">
                <div className="answer-div">
                    
                      {isOpenedItems.includes(faq.id) && (
                        <p>{faq.text}</p>

                      )}
                  
                </div>
            </div>  
        </div>
      ))}
    </div>
  )
}
