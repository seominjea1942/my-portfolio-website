import React,{useState,useEffect} from 'react';
import UpArrow from '../../imageSource/UpArrow'
import DownArrow from '../../imageSource/DownArrow'


function HeaderNavigationHelper(props) {
    const [pageInfo, setPageInfo] = useState({
        'Project Highlight Reel': [0,'#heroBox'],
        'UX/UI Design Portfolio': [980,'#uxdHeader'],
        'Software Engieering Portfolio': [5000,'#sweHeader'],
    });
    let [textContent, setTextContent] = useState(Object.keys(pageInfo)[0])
    let [upArrowTarget, setUpArrowTarget] = useState()
    let [downArrowTarget, setDownArrowTarget] = useState()

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
          setOffset(window.pageYOffset)
        }
        adjustPageInfo();
      }, []);

    useEffect(()=>{
        const contentTitle = Object.keys(pageInfo)
        const contentStatePosition = Object.values(pageInfo)
        console.log(contentStatePosition)
        if(offset<contentStatePosition[1][0]){
            setTextContent(contentTitle[0])
            setUpArrowTarget(pageInfo['Project Highlight Reel'][1])
            setDownArrowTarget(pageInfo['UX/UI Design Portfolio'][1])
        }
        if(offset>=contentStatePosition[1][0] && offset<contentStatePosition[2][0]){
            setTextContent(contentTitle[1])
            console.log('hi')
            setUpArrowTarget(pageInfo['Project Highlight Reel'][1])
            setDownArrowTarget(pageInfo['Software Engieering Portfolio'][1])
        }
        if(offset>=contentStatePosition[2][0]){
            setTextContent(contentTitle[2])
            console.log('bye')
            setUpArrowTarget(pageInfo['UX/UI Design Portfolio'][1])
            setDownArrowTarget(pageInfo['Software Engieering Portfolio'][1])
        }
    },[offset])

     const adjustPageInfo=()=>{
        let uxdHeader = document.querySelector('#uxdHeader')
        let sweHeader = document.querySelector('#sweHeader')
        setPageInfo({...pageInfo, 'UX/UI Design Portfolio':[uxdHeader.getBoundingClientRect().top,'#uxdHeader']})
        setPageInfo({...pageInfo, 'Software Engieering Portfolio':[sweHeader.getBoundingClientRect().top,'#sweHeader']})
     }

    return (
        <div className="headerNavigationHelper">
            <a href={upArrowTarget}>
                <UpArrow logoColor={'white'}/>
            </a>
            <p>{textContent}</p>
            <a href={downArrowTarget}>
                <DownArrow logoColor={'white'}/>
            </a>
            {console.log(upArrowTarget)}
            {console.log(downArrowTarget)}
        </div>
    );
}

export default HeaderNavigationHelper;
