import { Carousel} from 'antd';
import { useRef,useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import "./index.scss"

function SelectedSongs(props){
    console.log(props.ishover)   
    const state1=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:7,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:8,
        url:"./20220426145251992457.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:9,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:10,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:11,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:12,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:13,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:14,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
    ]
    const state2=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易2"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易2"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:7,
        url:"./20220427172809612319.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:8,
        url:"./20220426145251992457.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:9,
        url:"./20220424151634414065.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:10,
        url:"./20220427172809612319.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
    ]
    const state3=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:7,
        url:"./20220427172809612319.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:8,
        url:"./20220426145251992457.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:9,
        url:"./20220424151634414065.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:10,
        url:"./20220427172809612319.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
    ]
    const state4=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:7,
        url:"./20220427172809612319.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:8,
        url:"./20220426145251992457.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:9,
        url:"./20220424151634414065.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:10,
        url:"./20220427172809612319.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
    ]
    const states = [state1,state2,state3,state4]
    
    const state = states[props.ishover.indexOf(true)].slice((props.isCount-1)*10,props.isCount*10)
    
    return(
        state.map(item=>(
            <div className='song-list' key={item.key}>
                <div className='songimg'>
                    <img className='songimg-img' alt="" src={require(`${item.url}`)}/>
                </div>
                <div className='songimg-msg'>
                    <div className='song-msg'>
                        <h3>{item.music}</h3>
                        <p>{item.singer}</p>
                    </div>
                    <div className='playblack'></div>
                    <div className='downloadblack'></div>
                </div>
            </div>
        ))
    )
}
function TSSelectedSongs(props){ 
    const TSstate1=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:7,
        url:"./20220427172809612319.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:8,
        url:"./20220426145251992457.jpg",
        music:"遥远的她",
        singer:"毛不易"},
        {key:9,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易"},
    ]
    const TSstate2=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她",
        singer:"毛不易2"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她2",
        singer:"毛不易2"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她2",
        singer:"毛不易2"}
    ]
    const TSstate3=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:7,
        url:"./20220427172809612319.jpg",
        music:"遥远的她3",
        singer:"毛不易3"},
        {key:8,
        url:"./20220426145251992457.jpg",
        music:"遥远的她3",
        singer:"毛不易3"}
    ]
    const TSstate4=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她4",
        singer:"毛不易4"}
    ]
    const TSstate5=[
        {key:1,
        url:"./20220424151634414065.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:2,
        url:"./20220429111508362875.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:3,
        url:"./20220427172809612319.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:4,
        url:"./20220426145251992457.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:5,
        url:"./20220424151634414065.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:6,
        url:"./20220429111508362875.jpg",
        music:"遥远的她4",
        singer:"毛不易4"},
        {key:7,
        url:"./20220427172809612319.jpg",
        music:"遥远的她4",
        singer:"毛不易4"}
    ]
    const TSstates = [TSstate1,TSstate2,TSstate3,TSstate4,TSstate5]
    const TSstate = TSstates[props.tsover.indexOf(true)]
    
    return(
        TSstate.map(item=>(
            <div className='song-list' key={item.key}>
                <div className='songimg'>
                    <img className='songimg-img' alt="" src={require(`${item.url}`)}/>
                </div>
                <div className='songimg-msg'>
                    <div className='song-msg'>
                        <h3>{item.music}</h3>
                        <p>{item.singer}</p>
                    </div>
                    <div className='playblack'></div>
                    <div className='downloadblack'></div>
                </div>
            </div>
        ))
    )
}

const Home=()=>{
    let myRef = useRef()
    const [isHover,setHover]=useState([true,false,false,false]);
    const [TSover,setTSover]=useState([true,false,false,false,false]);
    const [count,setCount]=useState(1);
    const navigate = useNavigate()
    function rankList(){
        navigate("/Songs")
    }
    return(
        <>
            <div className='Home-Img'>
                <div className='left' onClick={()=>myRef.prev()}></div>
                <Carousel autoplay className='carousel' ref={dom=>(myRef=dom)}>
                    <div className='Home-Img-Div'>
                        <img className='Home-Img-Div-img' alt="" src={require("./20220317144937978098.jpg")}/>
                    </div>
                    <div className='Home-Img-Div'>
                        <img className='Home-Img-Div-img' alt="" src={require("./20220317145017775531.jpg")}/>
                    </div>
                    <div className='Home-Img-Div'>
                        <img className='Home-Img-Div-img' alt="" src={require("./20220427201240310295.jpg")}/>
                    </div>
                </Carousel>
                <div className="right" onClick={()=>myRef.next()}></div>
                <div className='download-img'>
                    <div className='pc-download'>
                        <a href="https://download.kugou.com/download/kugou_pc" className='pc-download-a'>
                            <span className='pc-download-a-span'>下载电脑版</span>
                        </a>
                    </div>
                    <div className='pc-download'>
                        <a href="https://download.kugou.com/download/kugou_pc" className='pc-download-a'>
                            <span className='pc-download-a-span'>下载iPhone版</span>
                        </a>
                    </div>
                    <div className='pc-download'>
                        <a href="https://download.kugou.com/download/kugou_pc" className='pc-download-a'>
                            <span className='pc-download-a-span'>下载Andriod版</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='homemain'>
                <div className='homemain-top'>
                    <div className='homemain-top-left'>
                        <div className='Selected-song'>
                            <h2 className='Selected-song-h'>精选歌单</h2>
                            <NavLink to="/Songs" className='Selected-song-more'>更多 &gt;</NavLink>
                        </div>
                        <div className='Hot-song-list'>
                            <div className='Hot-song-list-right'>
                                <div className='Hot-song-list-div'>
                                    <NavLink className='Hot-song-list-a' to='/Singer'>
                                        <img className='Hot-song-list-div-img' alt="" src={require("./20201207134716994336.jpg")}></img>
                                        <span className='Hot-song-list-div-span'>乡村之旅：安静惬意·与自然同在</span>
                                    </NavLink>
                                    <div className='icon-play-white'></div>
                                </div>
                            </div>
                            <div className='Hot-song-list-left'>
                                <div className='Hot-song-list-div'>
                                    <NavLink className='Hot-song-list-a' to='/Singer'>
                                        <img className='Hot-song-list-div-img' alt="" src={require("./20210702081927884718.jpg")}></img>
                                        <span className='Hot-song-list-div-span'>青春回忆杀·80后的卡带故事</span>
                                    </NavLink>
                                    <div className='icon-play-white'></div>
                                </div>
                                <div className='Hot-song-list-div'>
                                    <NavLink className='Hot-song-list-a' to='/Singer'>
                                        <img className='Hot-song-list-div-img' alt="" src={require("./20210813110609255220.jpg")}></img>
                                        <span className='Hot-song-list-div-span'>披荆斩棘的哥哥 合辑</span>
                                    </NavLink>
                                    <div className='icon-play-white'></div>
                                </div>
                                <div className='Hot-song-list-div'>
                                    <NavLink className='Hot-song-list-a' to='/Singer'>
                                        <img className='Hot-song-list-div-img' alt="" src={require("./20210912000735358694.jpg")}></img>
                                        <span className='Hot-song-list-div-span'>丹心赋：望九州风月，祈万世长安</span>
                                    </NavLink>
                                    <div className='icon-play-white'></div>
                                </div>
                                <div className='Hot-song-list-div'>
                                    <NavLink className='Hot-song-list-a' to='/Singer'>
                                        <img className='Hot-song-list-div-img' alt="" src={require("./20210914141726699353.jpg")}></img>
                                        <span className='Hot-song-list-div-span'>巅峰ing-TA们创造着欧美乐坛新荣耀</span>
                                    </NavLink>
                                    <div className='icon-play-white'></div>
                                </div>       
                            </div>
                        </div>
                    </div>
                    <div className='homemain-top-right'>
                        <div className='Selected-song'>
                            <h2 className='Selected-song-h'>热门榜单</h2>
                            <NavLink to="/Songs" className='Selected-song-more'>更多 &gt;</NavLink>
                        </div>
                        <div className='homemain-top-right-rank'>
                            <div className='rank-list' onClick={rankList}>
                                <div className='rank-img'>
                                    <div className='icon-play-white'></div>
                                </div>
                                <div className='rank-li'>
                                    <ul>
                                        <li><span>周深-有我</span></li>
                                        <li><span>何文宇 - 重不重要我都不要了</span></li>
                                        <li><span>桑杰才让 - 心上人</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rank-list' onClick={rankList}>
                                <div className='rank-img'>
                                    <div className='icon-play-white'></div>
                                </div>
                                <div className='rank-li'>
                                    <ul>
                                        <li><span>周深-有我</span></li>
                                        <li><span>何文宇 - 重不重要我都不要了</span></li>
                                        <li><span>桑杰才让 - 心上人</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rank-list' onClick={rankList}>
                                <div className='rank-img'>
                                    <div className='icon-play-white'></div>
                                </div>
                                <div className='rank-li'>
                                    <ul>
                                        <li><span>周深-有我</span></li>
                                        <li><span>何文宇 - 重不重要我都不要了</span></li>
                                        <li><span>桑杰才让 - 心上人</span></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>  
                    </div>
                </div>
                <div className='homemain-middle'>
                    <div className='New-song'>
                        <div className='Selected-song'>
                            <h2 className='Selected-song-h'>精选歌单</h2>
                            <div className='songover'>
                                <div className={isHover[0]?'songsort_active':'songsort'} 
                                    onMouseOver={()=>{setHover([true,false,false,false]);setCount(1)}}>
                                    华语
                                </div>
                                <div className={isHover[1]?'songsort_active':'songsort'} 
                                    onMouseOver={()=>{setHover([false,true,false,false]);setCount(1)}}>
                                    欧美
                                </div>
                                <div className={isHover[2]?'songsort_active':'songsort'} 
                                    onMouseOver={()=>{setHover([false,false,true,false]);setCount(1)}}>
                                    韩国
                                </div>
                                <div className={isHover[3]?'songsort_active':'songsort'} 
                                    onMouseOver={()=>{setHover([false,false,false,true]);setCount(1)}}>
                                    日本
                                </div>
                            </div>
                            <div className='Selected-song-more'>
                                <div className='lt' onClick={()=>{if(count>1){setCount(count-1)}}}>&lt;</div>
                                <div className='page'>{count}/3</div> 
                                <div className='gt' onClick={()=>{if(count<3){setCount(count+1)}}}>&gt;</div>
                            </div>
                        </div>
                        <div className={isHover[0]?'songlists_active':'songlists'}>
                            <SelectedSongs ishover={isHover} isCount={count}/>
                        </div>
                        <div className={isHover[1]?'songlists_active':'songlists'}>
                            <SelectedSongs ishover={isHover} isCount={count}/>
                        </div>
                        <div className={isHover[2]?'songlists_active':'songlists'}>
                            <SelectedSongs ishover={isHover} isCount={count}/>
                        </div>
                        <div className={isHover[3]?'songlists_active':'songlists'}>
                            <SelectedSongs ishover={isHover} isCount={count}/>
                        </div>
                    </div>
                    <div className='Selected-MV'>
                        <div className='Selected-song'>
                            <h2 className='Selected-song-h'>推荐MV</h2>
                            <NavLink to="/Songs" className='Selected-song-more'>更多 &gt;</NavLink>
                        </div>
                        <div className='MV-lists'>
                            <div className='MV-list'>
                                <div className='MV-list-div'>
                                    <img className='MV-list-div-img' src={require("./20220428140206177029.jpg")}/>
                                </div>
                                <h3 className='MV-list-h3'>Like Love</h3>
                                <p className='MV-list-p'>刘雨欣</p>
                            </div>
                            <div className='MV-list'>
                                <div className='MV-list-div'>
                                    <img className='MV-list-div-img' src={require("./20220428143029403521.jpg")}/>
                                </div>
                                <h3 className='MV-list-h3'>Drive</h3>
                                <p className='MV-list-p'>美延</p>
                            </div>
                            <div className='MV-list'>
                                <div className='MV-list-div'>
                                    <img className='MV-list-div-img' src={require("./20220428143029403521.jpg")}/>
                                </div>
                                <h3 className='MV-list-h3'>寓言 (《请叫我总监》电视剧主题曲)</h3>
                                <p className='MV-list-p'>硬糖少女303希林娜依·高</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Selected-TS'>
                    <div className='Selected-song'>
                        <h2 className='Selected-song-h'>精选歌单</h2>
                        <div className='songover'>
                            <div className={TSover[0]?"TSsort_active":"TSsort"} 
                                onMouseOver={()=>{setTSover([true,false,false,false,false])}}>
                                热门
                            </div>
                            <div className={TSover[1]?"TSsort_active":"TSsort"} 
                                onMouseOver={()=>{setTSover([false,true,false,false,false])}}>
                                小说
                            </div>
                            <div className={TSover[2]?"TSsort_active":"TSsort"} 
                                onMouseOver={()=>{setTSover([false,false,true,false,false])}}>
                                儿童
                            </div>
                            <div className={TSover[3]?"TSsort_active":"TSsort"} 
                                onMouseOver={()=>{setTSover([false,false,false,true,false])}}>
                                相声
                            </div>
                            <div className={TSover[4]?"TSsort_active":"TSsort"} 
                                onMouseOver={()=>{setTSover([false,false,false,false,true])}}>
                                情感
                            </div>
                        </div>
                        <NavLink to="/Songs" className='Selected-song-more'>更多 &gt;</NavLink>
                    </div>
                    <div className={TSover[0]?'songlists_active':'songlists'}>
                        <TSSelectedSongs tsover={TSover}/>
                    </div>
                    <div className={TSover[1]?'songlists_active':'songlists'}>
                        <TSSelectedSongs tsover={TSover}/>
                    </div>
                    <div className={TSover[2]?'songlists_active':'songlists'}>
                        <TSSelectedSongs tsover={TSover}/>
                    </div>
                    <div className={TSover[3]?'songlists_active':'songlists'}>
                        <TSSelectedSongs tsover={TSover}/>
                    </div>
                    <div className={TSover[4]?'songlists_active':'songlists'}>
                        <TSSelectedSongs tsover={TSover}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home