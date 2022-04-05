import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <h1 className='blog-heading'>Answer To Question</h1>
            <div className='blog-container'>
                <div className='cart-container'>
                    <h3>What is Context API?</h3>
                    <p><strong>Context</strong> API is a new feature added in version 16.3 of react that allows one to share state across the entire app lightly and with ease.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>

                </div>
                <div className='cart-container'>
                    <h3>What is semantic Tag?</h3>
                    <p><strong>Semantic</strong> HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a (p) tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                        On the flip side of this equation, tags such as (b) and (i) are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.The benefit of writing semantic HTML stems from what should be the driving goal of any web page:  By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;