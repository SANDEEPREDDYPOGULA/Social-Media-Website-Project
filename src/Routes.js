import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Boxs } from "./components/boxs/Boxs";
import { Groups } from "./components/groups/Groups";
import { Search } from "./components/search/Search";
import { Profile } from "./components/profile/Profile";
import { Notifications } from "./components/notifications/Notifications";
import { Settings } from "./components/settings/Settings";
import { StoryView } from "./components/home/StoryView";
import { GeneralBox } from "./components/home/GeneralBox";
import { UserView } from "./components/profile/UserView";
import { MyBoxView } from "./components/boxs/MyBoxView";
import { BoxView } from "./components/boxs/BoxView";
import { FindPeople } from "./components/findpeople/FindPeople";
import { GroupView } from "./components/groups/GroupView";
import { MomentView } from "./components/boxs/MomentView";

export const Routes = () => 
       <Switch>
        <Route path="/" exact component={Home}  /> 
        <Route path="/storyview" exact component={StoryView}  /> 
        <Route path="/findpeople" exact component={FindPeople}  /> 
        <Route path="/boxview" exact component={BoxView}  />
        <Route path="/momentview" exact component={MomentView}  />  
        <Route path="/groupview" exact component={GroupView}  /> 
        <Route path="/userview" exact component={UserView}  /> 
        <Route path="/myboxview" exact component={MyBoxView}  /> 
        <Route path="/boxs" exact component={Boxs}  />
        <Route path="/generalbox" exact component={GeneralBox}  />  
        <Route path="/groups" exact component={Groups}  /> 
        <Route path="/search" exact component={Search}  /> 
        <Route path="/profile" exact component={Profile}  /> 
        <Route path="/notifications" exact component={Notifications}  /> 
        <Route path="/settings" exact component={Settings}  /> 
       </Switch> ;
