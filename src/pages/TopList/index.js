import "./index.scss"
import { Collapse,} from 'antd';
import { NavLink,Outlet} from "react-router-dom";

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

const TopList=()=>{
    return(
        <div className="toplist">
            <div className='collapse'>
                <Collapse defaultActiveKey={['1',"2","3"]} onChange={callback}>
                    <Panel header="热门榜单" key="1">
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20130807185439172736.png")}/>
                            <NavLink to="/Toplist"><span className="collapse-list-span">酷狗TOP500</span></NavLink>
                        </div>
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20130807185450567609.png")}/>
                            <NavLink to="/Toplist/KGhot"><span className="collapse-list-span">酷狗飙升榜    </span></NavLink>
                        </div>
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20160119110054378246.jpg")}/>
                            <NavLink to="/Toplist/KGdj"><span className="collapse-list-span">DJ热歌榜</span></NavLink>
                        </div>
                    </Panel>
                    <Panel header="特色音乐榜" key="2">
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20130807185439172736.png")}/>
                            <NavLink to="/Toplist"><span className="collapse-list-span">酷狗TOP500</span></NavLink>
                        </div>
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20130807185450567609.png")}/>
                            <NavLink to="/Toplist/KGhot"><span className="collapse-list-span">酷狗飙升榜    </span></NavLink>
                        </div>
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20160119110054378246.jpg")}/>
                            <NavLink to="/Toplist/KGdj"><span className="collapse-list-span">DJ热歌榜</span></NavLink>
                        </div>
                    </Panel>
                    <Panel header="全球版" key="3">
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20130807185439172736.png")}/>
                            <NavLink to="/Toplist"><span className="collapse-list-span">酷狗TOP500</span></NavLink>
                        </div>
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20130807185450567609.png")}/>
                            <NavLink to="/Toplist/KGhot"><span className="collapse-list-span">酷狗飙升榜    </span></NavLink>
                        </div>
                        <div className="collapse-list">
                            <img className="collapse-list-img" alt="" src={require("./20160119110054378246.jpg")}/>
                            <NavLink to="/Toplist/KGdj"><span className="collapse-list-span">DJ热歌榜</span></NavLink>
                        </div>
                    </Panel>
                </Collapse>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            
        </div>
    )
}

export default TopList