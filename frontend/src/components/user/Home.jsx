import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import StartupDetails from './Startupdetails'; 
import EIRDetails from './EirDetails';
import GrantDetails from './GrantDetails';
import Messages from './Messages';
import MonthlyProgress from './Monthlyorogress';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setStartupData, setEirData, setGrantSchemeData, setMessages } from '../../redux/startupSlice';

export default function StartupHomepage() {
  const [activeComponent, setActiveComponent] = useState('details');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = Cookies.get('user');
  const startup = Cookies.get('startup');

  const userData = useSelector((state) => state.startup.userData);
  const startupData = useSelector((state) => state.startup.startupData);
  const eirData = useSelector((state) => state.startup.eirData);
  const grantSchemeData = useSelector((state) => state.startup.grantSchemeData);
  const messages = useSelector((state) => state.startup.messages);

  useEffect(() => {
    if (!user || !startup) {
      return navigate('/login');
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`/user/home/${user}/${startup}`);
        const { user: userResponse, startup: startupResponse, eirRecords, grantRecords } = response.data;

        console.log(response); // Log the entire response for better debugging
        dispatch(setUserData(userResponse));
        dispatch(setStartupData(startupResponse));
        dispatch(setEirData(eirRecords || [])); 
        dispatch(setGrantSchemeData(grantRecords || []));
        dispatch(setMessages(startupResponse.messages || []));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user, startup, dispatch, navigate]);

  useEffect(() => {
    console.log(activeComponent);
  }, [activeComponent]);

  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar setActiveComponent={setActiveComponent} />
      <main className="container mx-auto px-4 py-8 flex-grow text-gray-800">
        {activeComponent === 'details' && startupData && (
          <StartupDetails
            kyc={startupData.kyc}
            progress={startupData.progress}
          />
        )}
        {activeComponent === 'eir' && (
          <EIRDetails eirList={eirData} />
        )}
        {activeComponent === 'grant' && (
          <GrantDetails grant={grantSchemeData} />
        )}
        {activeComponent === 'messages' && (
          <Messages />
        )}
        {activeComponent === 'monthly' && (
          <MonthlyProgress progress={startupData.progress} />
        )}
      </main>
      <footer className="bg-gray-200 text-gray-800 py-4 text-center">
        StartX. . 
      </footer>
    </div>
  );
}