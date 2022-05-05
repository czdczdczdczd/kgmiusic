import { NavLink } from "react-router-dom"
import "./index.scss"
import { Popover } from 'antd';


function Top(){
    const content = (
        <div className="morelist">
            <NavLink to="/Radio" className="morelist-a">
                电台
            </NavLink>
            <br />
            <NavLink to="/MV" className="morelist-a">
                MV
            </NavLink>
            <br />
            <NavLink to="/Songs" className="morelist-a">
                歌单
            </NavLink>
            <br />
            <NavLink to="/Singers" className="morelist-a">
                歌手
            </NavLink>
            <br />
            <NavLink to="/Album" className="morelist-a">
                专辑
            </NavLink>
            <br />
        </div>
      );

    return(
        <div className="kghead">    
            <div className="kghead1">
                <div className="kg-logo">
                    <a className="kg-logo-a" href="/">
                        <img className="kg-logo-img" alt="" src={require("./kugou_white.png")} />
                    </a>
                </div>
                <div className="search">
                    <div className="search-btn"></div>
                    <input type="text" className="search-input" placeholder="半生"/>
                </div>
                <div className="kghead1-lists">
                    <div className="kghead1-list">
                        <a className="kghead1-list-a" target="_blank" rel="noopener noreferrer" href="https://www.kugou.com/imusic/">
                            音乐人
                        </a>
                    </div>
                    <div className="kghead1-list">
                        <a className="kghead1-list-a" target="_blank" rel="noopener noreferrer" href="http://www.kugou.com/fmugc-v2/dist/index.html">
                            主播电台
                        </a>
                    </div>
                    <div className="kghead1-list">
                        <a className="kghead1-list-a" target="_blank" rel="noopener noreferrer" href="https://open.kugou.com/">
                            开发平台
                        </a>
                    </div>
                    <div className="kghead1-list">
                        <a className="kghead1-list-a" target="_blank" rel="noopener noreferrer" href="http://vip.kugou.com/">
                            VIP会员
                        </a>
                    </div>
                    <div className="kghead1-list">
                        <button className="kghead1-list-button">
                            登录
                        </button>
                    </div>
                </div>
            </div>
            <div className="kghead2">
                <div className="kghead2-list">
                    <NavLink to="/" className={({isActive})=>isActive?"kghead2-a-active":"kghead2-a"}>
                        首页
                    </NavLink>
                </div>
                <div className="kghead2-list">
                    <NavLink to="/TopList" className={({isActive})=>isActive?"kghead2-a-active":"kghead2-a"}>
                        榜单
                    </NavLink>
                </div>
                <div className="kghead2-list">
                    <NavLink to="/TS" className={({isActive})=>isActive?"kghead2-a-active":"kghead2-a"}>
                        听书
                    </NavLink>
                </div>
                <div className="kghead2-list">
                    <a className="kghead2-a" target="_blank" rel="noopener noreferrer" href="https://fanxing.kugou.com/?action=spreadIndex&id=3">
                        直播
                    </a>
                </div>
                <div className="kghead2-list">
                    <a className="kghead2-a" target="_blank" rel="noopener noreferrer" href="https://kugou.tmall.com/">
                        商城
                    </a>
                </div>
                <div className="kghead2-list">
                    <NavLink to="/Download" className={({isActive})=>isActive?"kghead2-a-active":"kghead2-a"}>
                        下载
                    </NavLink>
                </div>
                <div className="kghead2-list">
                    <Popover content={content} trigger="hover">
                        更多 &gt;
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Top