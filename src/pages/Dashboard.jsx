import { useState, useEffect } from 'react'
import Topbar from '../components/topbar/Topbar'
import Message from '../components/message/Message'
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../components/widgetLg/WidgetLg'
import { useLocation } from "react-router-dom"

const Dashboard = () => {
    debugger;
    const location = useLocation();
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        const loadMsg = () => {
            setSuccessMsg(location.state.successMsg);
        }
        loadMsg();
    }, [location.state.successMsg]);

    return (
        <div className='dashboard'>
            <Topbar />
            <Message successMsg={successMsg} />
            <FeaturedInfo />
            <WidgetLg />
        </div>
    )
}

export default Dashboard
