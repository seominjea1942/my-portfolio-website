import React,{useState,useEffect} from 'react';

function HeaderNavigationHelper(props) {
    let [textContent,setTextContent] = useState('Scroll Down')
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
          setOffset(window.pageYOffset)
        }
      }, []);

    return (
        <div className="headerNavigationHelper">
            {console.log(offset)}
            <p>{textContent}</p>
        </div>
    );
}

export default HeaderNavigationHelper;