import "./index.scss"
import { Button} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';
import { useState } from "react";

const KG500 =()=>{
    const [check,ischecked] = useState([
        {
            value:"1",
            choose:true,
            play_url:"https://www.kugou.com/song/#hash=733D0D38136F220585003FFE4E9E5FD4&album_id=56621358",
            name:"太想念",
            singer:"豆包",
            time:"3:50"},
        {
            value:"2",
            choose:false,
            play_url:"https://www.kugou.com/song/#hash=733D0D38136F220585003FFE4E9E5FD4&album_id=56621358",
            name:"太想念",
            singer:"豆包",
            time:"3:50"},
    ])
    const toplay=(url)=>{window.open(url)}
    const ischeck=(num)=>{
        console.log(check)
        ischecked(check.map(item=>(item.value===num?item.choose=!item.choose:item=item)),console.log(check))
        console.log(check)
        console.log(check[0].choose)
    }

    return(
        <div className="TOP500">
            <div className="top-head">
                <div className="top-head-title">
                    <h2 className="top-head-title-h">酷狗TOP500</h2>
                    <p className="top-head-title-p">2022-04-30更新</p>
                </div>
                <div className="paly-all">
                    <Button type="primary" shape="round" icon={<PlayCircleOutlined/>} size={'large'} onClick={()=>toplay("https://www.kugou.com/song/#hash=733D0D38136F220585003FFE4E9E5FD4&album_id=56621358")}>
                        播放全部
                    </Button>
                </div>
            </div>
            <div className="top-body">

                <div className="top-body-list">
                    <input 
                        id="point"
                        className="top-body-list-checkbox" 
                        type="checkbox" 
                        name="song-list" 
                        value="1" 
                        checked={false} 
                        onChange={()=>ischeck("1")}/>
                    <div className="number"><span className="number-span">1</span></div>
                    <div className="songs"  onClick={()=>toplay("https://www.kugou.com/song/#hash=733D0D38136F220585003FFE4E9E5FD4&album_id=56621358")}>
                        <span className="songs-name">太想念</span>
                        <span className="songs-singer">-豆包</span>
                    </div>
                    <div className="play-down-relay">
                        <div className="play"  onClick={()=>toplay("https://www.kugou.com/song/#hash=733D0D38136F220585003FFE4E9E5FD4&album_id=56621358")}></div>
                        <div className="down"></div>
                        <div className="relay"></div>
                    </div>
                    <div className="times"><span className="times-span">3:50</span></div>
                </div>
            </div>
        </div>
    )
}

export default KG500